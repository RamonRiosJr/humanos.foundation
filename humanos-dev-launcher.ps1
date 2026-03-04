#!/usr/bin/env pwsh

# Set the console title
$Host.UI.RawUI.WindowTitle = "Humanos Foundation | Advocacy Dashboard"

# Beautiful ASCII Art Logic
Clear-Host
Write-Host ""
Write-Host " #################################################################" -ForegroundColor Cyan
Write-Host " #                                                               #" -ForegroundColor Cyan
Write-Host " #   _   _ _   _ __  __    _    _   _  ___  ____                 #" -ForegroundColor Cyan
Write-Host " #  | | | | | | |  \/  |  / \  | \ | |/ _ \/ ___|                #" -ForegroundColor Cyan
Write-Host " #  | |_| | | | | |\/| | / _ \ |  \| | | | \___ \                #" -ForegroundColor Cyan
Write-Host " #  |  _  | |_| | |  | |/ ___ \| |\  | |_| |___) |               #" -ForegroundColor Cyan
Write-Host " #  |_| |_|\___/|_|  |_/_/   \_\_| \_|\___/|____/                #" -ForegroundColor Cyan
Write-Host " #                                                               #" -ForegroundColor Cyan
Write-Host " #             Humanos Foundation - Data Sovereignty             #" -ForegroundColor Cyan
Write-Host " #           Developed by RamonRios.NET @ Coqui.Cloud            #" -ForegroundColor Cyan
Write-Host " #                                                               #" -ForegroundColor Cyan
Write-Host " #################################################################" -ForegroundColor Cyan
Write-Host ""

Write-Host " [SYSTEM] Initializing Humanos Advocacy Engine..." -ForegroundColor Gray
Write-Host " [SYSTEM] Loading Patient Data Bill of Rights..." -ForegroundColor Gray
Write-Host " [SYSTEM] Syncing Foundation Sovereignty Standards..." -ForegroundColor Gray
Write-Host ""

# Start the main Humanos Foundation App in the background on Port 7200
Write-Host " [LAUNCH] Launching Humanos Foundation Website (Port 7200)..." -ForegroundColor Green
Start-Process -NoNewWindow -FilePath "npm.cmd" -ArgumentList "run", "dev"

Write-Host ""
Write-Host " -----------------------------------------------------------------" -ForegroundColor Gray
Write-Host " Status: ADVOCACY PIPELINE ACTIVE" -ForegroundColor White
Write-Host " -----------------------------------------------------------------" -ForegroundColor Gray
Write-Host ""
Write-Host " - Foundation Main: http://192.168.16.73:7200" -ForegroundColor Cyan
Write-Host ""
Write-Host " Press Ctrl+C in this window if you need to stop."
Write-Host ""

# Keep the window alive if run via batch
Read-Host " Press Enter to close this launcher..."
