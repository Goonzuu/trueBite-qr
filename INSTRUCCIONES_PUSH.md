# 📤 Instrucciones para Push y PR a GitHub

## Estado Actual

✅ **Commits locales listos para push:**
- ETAPA 1: Setup Frontend - Next.js + Tailwind
- Mejorar .gitignore para excluir archivos del sistema
- Configurar VS Code y mejorar .gitignore para ocultar archivos del sistema
- Documentar solución completa para archivos no deseados en git
- Agregar package-lock.json

❌ **Push falló:** Problema de autenticación SSH

---

## 🔐 Opción 1: Configurar SSH (Recomendado)

### Verificar si tienes clave SSH:
```bash
ls -la ~/.ssh/id_rsa.pub
```

### Si no tienes clave SSH, generarla:
```bash
ssh-keygen -t ed25519 -C "tu-email@ejemplo.com"
```

### Agregar clave SSH a GitHub:
1. Copiar la clave pública:
```bash
cat ~/.ssh/id_rsa.pub
```

2. En GitHub: Settings → SSH and GPG keys → New SSH key
3. Pegar la clave pública
4. Guardar

### Probar conexión:
```bash
ssh -T git@github.com
```

### Hacer push:
```bash
cd /Users/goonzuuy/trueBite/trueBite-qr
git push -u origin master
```

---

## 🔗 Opción 2: Usar HTTPS

### Cambiar remote a HTTPS:
```bash
cd /Users/goonzuuy/trueBite/trueBite-qr
git remote set-url origin https://github.com/Goonzuu/trueBite-qr.git
```

### Hacer push:
```bash
git push -u origin master
```

GitHub pedirá tus credenciales (usuario y Personal Access Token).

---

## 📝 Opción 3: Crear Repositorio en GitHub Primero

Si el repositorio no existe aún:

1. **Crear repositorio en GitHub:**
   - Ir a: https://github.com/new
   - Nombre: `trueBite-qr`
   - **NO** inicializar con README, .gitignore o licencia
   - Crear repositorio

2. **Hacer push:**
```bash
cd /Users/goonzuuy/trueBite/trueBite-qr
git push -u origin master
```

---

## 🔄 Después del Push: Crear PR

Si quieres crear un PR para revisar:

### 1. Cambiar a branch de desarrollo (opcional):
```bash
git checkout -b etapa-1-setup
git push -u origin etapa-1-setup
```

### 2. Crear PR en GitHub:
1. Ir a: https://github.com/Goonzuu/trueBite-qr
2. Click en "Compare & pull request"
3. Título: "ETAPA 1: Setup Frontend - Next.js + Tailwind"
4. Descripción:
   ```
   ## ETAPA 1: Setup Frontend
   
   - ✅ Next.js 14 (App Router) configurado
   - ✅ TypeScript estricto
   - ✅ Tailwind CSS configurado
   - ✅ Cliente API (Axios) configurado
   - ✅ Estructura de carpetas creada
   - ✅ .gitignore mejorado
   - ✅ Configuración VS Code
   ```
5. Crear PR

---

## ✅ Verificación

Después del push, verificar en GitHub:
- https://github.com/Goonzuu/trueBite-qr

---

## 🆘 Troubleshooting

### Error: "Permission denied (publickey)"
→ Usar Opción 1 (SSH) o Opción 2 (HTTPS)

### Error: "Repository not found"
→ Verificar que el repositorio exista o crearlo (Opción 3)

### Error: "Authentication failed" (HTTPS)
→ Necesitas un Personal Access Token:
   1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
   2. Generate new token
   3. Seleccionar scopes: `repo`
   4. Usar el token como password al hacer push
