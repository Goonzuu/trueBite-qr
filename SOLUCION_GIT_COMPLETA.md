# Solución Completa: Archivos no deseados en Git

## ✅ Problema Resuelto

VS Code estaba mostrando 10,000+ archivos porque detectaba el repositorio git en el directorio home (`/Users/goonzuuy`).

## Soluciones Aplicadas

### 1. `.gitignore` en el directorio home
Creado `/Users/goonzuuy/.gitignore` que:
- Ignora todo por defecto (`*`)
- Permite solo los directorios de proyectos
- Ignora archivos del sistema (`.gradle`, `.cache`, `.npm`, etc.)
- Ignora directorios del sistema (Applications, Documents, Library, etc.)

### 2. `.git/info/exclude` actualizado
Configurado para excluir localmente los mismos archivos.

### 3. `.gitignore` del proyecto
Mejorado en `trueBite-qr/.gitignore` para ignorar archivos del sistema.

### 4. Configuración VS Code
Creado `.vscode/settings.json` para ocultar archivos del sistema en el explorador.

## Resultado

**Antes:** 10,000+ archivos en Source Control  
**Ahora:** ~17 archivos (solo cambios en proyectos)

## Verificación

```bash
# En el directorio home
cd /Users/goonzuuy
git status --short
# Solo deberías ver archivos de tus proyectos

# En el proyecto
cd /Users/goonzuuy/trueBite/trueBite-qr
git status --short
# Solo deberías ver archivos del proyecto (máximo 20)
```

## Recomendación para VS Code

Para que VS Code solo muestre el repositorio del proyecto:

1. **Cierra el workspace actual**
2. **File → Open Folder**
3. **Selecciona solo:** `/Users/goonzuuy/trueBite/trueBite-qr`

Esto hará que VS Code solo detecte el repositorio del proyecto, no el del directorio home.

## Archivos que ahora están ignorados

- `.gradle/`, `.cache/`, `.npm/` - Cachés del sistema
- Archivos `.h` de otros proyectos (hermes-android, etc.)
- Directorios del sistema (Applications, Documents, Library, etc.)
- Archivos de configuración del sistema (`.zshrc`, `.viminfo`, etc.)

## Nota Importante

El repositorio git en el directorio home seguirá existiendo, pero ahora ignora todos los archivos del sistema. VS Code puede seguir mostrándolo, pero ya no debería mostrar miles de archivos.

Si quieres que VS Code solo vea el proyecto, abre solo la carpeta del proyecto (no el directorio home).
