@echo off
setlocal enabledelayedexpansion

echo Starting image conversion to WebP...
echo.

REM Counter for converted files
set /a count=0

REM Process JPG files
for /r %%f in (*.jpg) do (
    echo Converting: %%f
    magick "%%f" "%%~dpnf.webp"
    if !errorlevel! equ 0 (
        set /a count+=1
        echo   Success: %%~nxf -^> %%~nf.webp
    ) else (
        echo   Failed: %%~nxf
    )
    echo.
)

REM Process JPEG files
for /r %%f in (*.jpeg) do (
    echo Converting: %%f
    magick "%%f" "%%~dpnf.webp"
    if !errorlevel! equ 0 (
        set /a count+=1
        echo   Success: %%~nxf -^> %%~nf.webp
    ) else (
        echo   Failed: %%~nxf
    )
    echo.
)

REM Process HEIC files
for /r %%f in (*.heic) do (
    echo Converting: %%f
    magick "%%f" "%%~dpnf.webp"
    if !errorlevel! equ 0 (
        set /a count+=1
        echo   Success: %%~nxf -^> %%~nf.webp
    ) else (
        echo   Failed: %%~nxf
    )
    echo.
)

echo.
echo ========================================
echo Conversion complete!
echo Total files converted: !count!
echo ========================================
pause
