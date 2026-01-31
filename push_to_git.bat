@echo off
cd /d "%~dp0"

echo ==========================================
echo       AUTO PUSH TO GITHUB (Nexus Root)
echo ==========================================

:: 0. Clean up nested git if exists
if exist "app-chat\.git" (
    echo [INFO] Detected nested git repository in app-chat. Removing it to merge into root repo...
    rmdir /s /q "app-chat\.git"
)

:: 1. Initialize Git if needed
if not exist .git (
    echo [INFO] Initializing Git repository in root...
    git init
)

:: 2. Configure Remote
echo [INFO] Configuring remote origin...
git remote remove origin >nul 2>&1
git remote add origin https://github.com/NguyenDinhNhan010902/app_chat.git

:: 3. Switch to main branch
git branch -M main

:: 4. Add all changes
echo [INFO] Adding files...
git add .

:: 5. Commit with timestamp
for /f "tokens=2 delims==" %%I in ('wmic os get localdatetime /value') do set datetime=%%I
set timestamp=%datetime:~0,4%-%datetime:~4,2%-%datetime:~6,2% %datetime:~8,2%:%datetime:~10,2%

echo [INFO] Committing changes...
git commit -m "Auto-update: %timestamp%"

:: 6. Push to GitHub
echo [INFO] Pushing to remote...
git push -u origin main

echo.
echo ==========================================
if %errorlevel% equ 0 (
    echo [SUCCESS] Code pushed successfully!
) else (
    echo [ERROR] Failed to push code. Please check your connection or perms.
)
echo ==========================================
pause
