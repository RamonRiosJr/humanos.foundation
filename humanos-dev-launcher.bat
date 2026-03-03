@echo off
pushd "%~dp0"
powershell -NoProfile -ExecutionPolicy Bypass -File ".\humanos-dev-launcher.ps1"
popd
