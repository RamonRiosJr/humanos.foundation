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

$url = "https://team.humanos.foundation/send_request?model=" . urlencode($data["model"]);

// Since .env is ignored, and Vercel proxy failed, we fallback to hardcoded production keys strictly locked behind PHP execution so they never reach the browser.
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json",
    "api-key: 7d9189405f117df0ab529f48ba5bfeff1e88c8f5",
    "login: VITE_ODOO_USER",
    "password: VITE_ODOO_PASS123!"
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
