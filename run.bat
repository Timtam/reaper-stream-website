@echo off

:: Check if a container named "rme" is already running or exists and remove it
docker ps -a --filter "name=rme" --format "{{.ID}}" | findstr . >nul && docker stop rme >nul && docker rm rme >nul

:: Start the Docker container in detached mode with --rm for automatic cleanup when stopped
docker run -d --rm -p 8000:80 --name rme rme-image

:waitloop
powershell -Command ^
    "$response = Invoke-WebRequest -Uri http://localhost:8000 -UseBasicParsing -ErrorAction SilentlyContinue; if ($response.StatusCode -eq 200) { exit 0 } else { exit 1 }"

if %errorlevel% neq 0 (
    timeout /t 1 >nul
    goto waitloop
)

:: Open the browser
start http://localhost:8000

:: Informational message
echo The rme container is running. Type stop to stop it (DUH) and automatically remove it.