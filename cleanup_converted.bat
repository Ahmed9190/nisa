@echo off
setlocal enabledelayedexpansion

echo ========================================
echo WebP Cleanup Script
echo ========================================
echo.
echo This script will DELETE original JPG, JPEG, and HEIC files
echo that have corresponding WebP files in the same location.
echo.
echo WARNING: This action cannot be undone!
echo.
pause
echo.

REM Counter for deleted files
set /a deleted=0
set /a skipped=0

REM Process JPG files
for /r %%f in (*.jpg) do (
    if exist "%%~dpnf.webp" (
        echo Deleting: %%f
        del "%%f"
        if !errorlevel! equ 0 (
            set /a deleted+=1
            echo   Deleted: %%~nxf
        ) else (
            echo   Failed to delete: %%~nxf
        )
    ) else (
        set /a skipped+=1
        echo Skipping: %%~nxf ^(no WebP found^)
    )
    echo.
)

REM Process JPEG files
for /r %%f in (*.jpeg) do (
    if exist "%%~dpnf.webp" (
        echo Deleting: %%f
        del "%%f"
        if !errorlevel! equ 0 (
            set /a deleted+=1
            echo   Deleted: %%~nxf
        ) else (
            echo   Failed to delete: %%~nxf
        )
    ) else (
        set /a skipped+=1
        echo Skipping: %%~nxf ^(no WebP found^)
    )
    echo.
)

REM Process HEIC files
for /r %%f in (*.heic) do (
    if exist "%%~dpnf.webp" (
        echo Deleting: %%f
        del "%%f"
        if !errorlevel! equ 0 (
            set /a deleted+=1
            echo   Deleted: %%~nxf
        ) else (
            echo   Failed to delete: %%~nxf
        )
    ) else (
        set /a skipped+=1
        echo Skipping: %%~nxf ^(no WebP found^)
    )
    echo.
)

echo.
echo ========================================
echo Cleanup complete!
echo Files deleted: !deleted!
echo Files skipped: !skipped!
echo ========================================
pause
