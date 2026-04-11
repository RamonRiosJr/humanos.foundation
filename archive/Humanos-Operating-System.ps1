#!/usr/bin/env pwsh

# Set the console title for maximum impact
$Host.UI.RawUI.WindowTitle = "Humanos Operating System | hOS Advocacy Kernel"

# Function for cinematic delays
function Boot-Delay($ms) { Start-Sleep -Milliseconds $ms }

# Beautiful ASCII Art Logic
Clear-Host
Write-Host ""
Write-Host " #################################################################" -ForegroundColor Cyan
Write-Host " #################################################################" -ForegroundColor Cyan
Write-Host " #                                                               #" -ForegroundColor Cyan
Write-Host " #         _   _ _   _ __  __    _    _   _  ___  ____           #" -ForegroundColor Cyan
Write-Host " #        | | | | | | |  \/  |  / \  | \ | |/ _ \/ ___|          #" -ForegroundColor Cyan
Write-Host " #        | |_| | | | | |\/| | / _ \ |  \| | | | \___ \          #" -ForegroundColor Cyan
Write-Host " #        |  _  | |_| | |  | |/ ___ \| |\  | |_| |___) |         #" -ForegroundColor Cyan
Write-Host " #        |_| |_|\___/|_|  |_/_/   \_\_| \_|\___/|____/          #" -ForegroundColor Cyan
Write-Host " #                                                               #" -ForegroundColor Cyan
Write-Host " #                    HUMAN OPERATING SYSTEM                     #" -ForegroundColor Cyan
Write-Host " #                                                               #" -ForegroundColor Cyan
Write-Host " #           Developed by RamonRios.NET @ Coqui.Cloud            #" -ForegroundColor Cyan
Write-Host " #################################################################" -ForegroundColor Cyan
Write-Host ""

# Simulated High-Tech Boot Sequence
Write-Host " [BOOT] Initializing hOS Kernel v0.5-Alpha..." -ForegroundColor Cyan
Boot-Delay 400
Write-Host " [BOOT] Mounting Sovereign Data Layer..." -ForegroundColor Gray
Boot-Delay 300
Write-Host " [BOOT] Loading Patient Bill of Rights Taxonomy..." -ForegroundColor Gray
Boot-Delay 500
Write-Host " [BOOT] Establishing Zero-Knowledge Handshake..." -ForegroundColor Gray
Boot-Delay 400
Write-Host " [BOOT] Bypassing Institutional EHR Silos..." -ForegroundColor Cyan
Boot-Delay 600
Write-Host " [BOOT] Syncing Foundation Principles..." -ForegroundColor Gray
Boot-Delay 300
Write-Host ""

# Dramatic Check Marks
$tasks = @("Neural Engine", "Advocacy Router", "Privacy Shroud", "Clinical Agenda")
foreach ($task in $tasks) {
    Write-Host " [SUCCESS] $task LOADED" -ForegroundColor Green
    Boot-Delay 200
}

Write-Host ""
Write-Host " [READY] Humanos Advocacy Engine is LIVE." -ForegroundColor White -BackgroundColor Blue
Write-Host ""

# Start the main Humanos Foundation App in the background on Port 7200
Write-Host " [SYSTEM] Forking Advocacy Pipeline to Port 7200..." -ForegroundColor Yellow
Start-Process -NoNewWindow -FilePath "npm.cmd" -ArgumentList "run", "dev"

Write-Host ""
Write-Host " -----------------------------------------------------------------" -ForegroundColor Gray
Write-Host " STATUS: SOVEREIGNTY GUARANTEED" -ForegroundColor Green
Write-Host " -----------------------------------------------------------------" -ForegroundColor Gray
Write-Host ""
Write-Host " -> ACCESS PORTAL: http://localhost:7200" -ForegroundColor Cyan
Write-Host ""
Write-Host " hOS IS LISTENING. Press Ctrl+C to terminate the kernel."
Write-Host ""

# Keep the window alive for the presentation
Read-Host " [PRESENTATION MODE] Press Enter to shutdown the hOS environment..."
