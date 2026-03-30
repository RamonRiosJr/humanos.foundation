@echo off
pushd "%~dp0"
powershell -NoProfile -ExecutionPolicy Bypass -File ".\Humanos-Operating-System.ps1"
popd
