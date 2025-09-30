@echo off
echo 🚀 Configurando el portafolio de Justo García Ferrández...
echo.

echo 📦 Instalando dependencias...
call npm install

echo.
echo ✅ Dependencias instaladas correctamente!
echo.

echo 🔧 Verificando configuración...
if not exist ".env.local" (
    echo ⚠️  Archivo .env.local no encontrado. Copiando desde .env.example...
    copy .env.example .env.local
    echo ✅ Archivo .env.local creado. Por favor, configura tus variables de entorno.
) else (
    echo ✅ Archivo .env.local encontrado.
)

echo.
echo 🧪 Ejecutando verificaciones...
call npm run type-check
if %errorlevel% neq 0 (
    echo ❌ Error en verificación de tipos
    pause
    exit /b 1
)

call npm run lint
if %errorlevel% neq 0 (
    echo ❌ Error en linting
    pause
    exit /b 1
)

echo.
echo ✅ Todas las verificaciones pasaron correctamente!
echo.

echo 🏗️  Construyendo el proyecto...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ Error en build
    pause
    exit /b 1
)

echo.
echo 🎉 ¡Proyecto configurado correctamente!
echo.
echo 📋 Comandos disponibles:
echo   npm run dev     - Ejecutar en modo desarrollo
echo   npm run build   - Construir para producción
echo   npm run start   - Ejecutar en modo producción
echo   npm test        - Ejecutar tests
echo   npm run lint    - Verificar código
echo.
echo 🌐 Para iniciar el servidor de desarrollo:
echo   npm run dev
echo.
echo 📖 Consulta el README.md para más información.
echo.
pause
