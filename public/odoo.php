<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit();
}

$input = file_get_contents("php://input");
$data = json_decode($input, true);

if (!$data || !isset($data["model"])) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid Odoo payload"]);
    exit();
}

$env_file = __DIR__ . '/../.env';
$odoo_api_key = "";
$odoo_user = "";
$odoo_pass = "";

if (file_exists($env_file)) {
    $env = parse_ini_file($env_file);
    $odoo_api_key = $env["ODOO_API_KEY"] ?? ($env["VITE_ODOO_API_KEY"] ?? "");
    $odoo_user = $env["ODOO_USER"] ?? ($env["VITE_ODOO_USER"] ?? "");
    $odoo_pass = $env["ODOO_PASS"] ?? ($env["VITE_ODOO_PASS"] ?? "");
    $odoo_db = $env["ODOO_DB"] ?? ($env["VITE_ODOO_DB"] ?? "humanos_foundation");
} else {
    // If running in same directory
    $local_env = __DIR__ . '/.env';
    if (file_exists($local_env)) {
        $env = parse_ini_file($local_env);
        $odoo_api_key = $env["ODOO_API_KEY"] ?? ($env["VITE_ODOO_API_KEY"] ?? "");
        $odoo_user = $env["ODOO_USER"] ?? ($env["VITE_ODOO_USER"] ?? "");
        $odoo_pass = $env["ODOO_PASS"] ?? ($env["VITE_ODOO_PASS"] ?? "");
        $odoo_db = $env["ODOO_DB"] ?? ($env["VITE_ODOO_DB"] ?? "humanos_foundation");
    }
}

$url = "https://team.humanos.foundation/send_request?model=" . urlencode($data["model"]);

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json",
    "api-key: " . $odoo_api_key,
    "login: " . $odoo_user,
    "password: " . $odoo_pass,
    "db: " . $odoo_db
]);

if (isset($data["data"]) && $_SERVER["REQUEST_METHOD"] === "GET") {
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
} else {
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $data["method"] ?? "POST");
}

if (isset($data["data"])) {
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data["data"]));
} elseif ($_SERVER["REQUEST_METHOD"] === "POST") {
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["fields" => ["name", "id", "subtitle", "content", "post_date"]]));
}

$response = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

http_response_code($http_code);
echo $response;
?>
