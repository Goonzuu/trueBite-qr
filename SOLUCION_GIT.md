# Solución: Archivos no deseados en Git

## Problema

VS Code está mostrando miles de archivos del sistema (`.gradle`, `.h`, etc.) porque detecta un repositorio git en el directorio home (`/Users/goonzuuy`).

## Solución Aplicada

1. ✅ **Mejorado `.gitignore`** - Ahora ignora archivos del sistema y otros proyectos
2. ✅ **Actualizado `.git/info/exclude`** - Exclusión local de archivos del sistema
3. ✅ **Configuración VS Code** - `.vscode/settings.json` para ocultar archivos no deseados

## Instrucciones para VS Code

### Opción 1: Abrir solo la carpeta del proyecto (RECOMENDADO)

1. Cierra el workspace actual en VS Code
2. File → Open Folder
3. Selecciona solo: `/Users/goonzuuy/trueBite/trueBite-qr`
4. Esto hará que VS Code solo vea los archivos del proyecto

### Opción 2: Si necesitas mantener el workspace actual

Los archivos del sistema ahora están ocultos gracias a `.vscode/settings.json`, pero VS Code seguirá mostrando el repositorio git del directorio home.

## Verificar que funciona

```bash
cd /Users/goonzuuy/trueBite/trueBite-qr
git status --short
# Solo deberías ver archivos del proyecto (máximo 15-20 archivos)
```

## Archivos que deberían estar en el repo

- `/app/**` - Páginas y componentes Next.js
- `/lib/**` - Utilidades
- `package.json`, `tsconfig.json`, etc.
- Archivos de configuración

## Archivos que NO deberían estar

- `.gradle/`, `.cache/`, `.npm/` - Cachés del sistema
- Archivos `.h` de otros proyectos
- Directorios del sistema (Applications, Documents, etc.)
