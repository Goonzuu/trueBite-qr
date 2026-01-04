# Etapas de Desarrollo - TrueBite QR Frontend

## ✅ ETAPA 1 — Setup del repo (COMPLETADA)

### Decisiones tomadas:

1. **Next.js App Router**: Solo frontend, sin API routes
2. **Axios**: Cliente HTTP para consumir backend API
3. **Tailwind CSS**: Para estilos mobile-first
4. **TypeScript estricto**: Para mantener calidad de código
5. **Separación clara**: Frontend consume backend en `../trueBite-qr-back`

### Archivos creados:

- Configuración Next.js 14 (App Router)
- Cliente API en `/lib/api.ts` (Axios)
- Página inicial básica
- Tailwind CSS configurado
- Variables de entorno para API URL
- README con instrucciones

### Comandos para correr local:

```bash
# 1. Instalar dependencias
npm install

# 2. Configurar variables de entorno
cp .env.example .env
# Editar .env con NEXT_PUBLIC_API_URL (default: http://localhost:3001/api)

# 3. Asegurar que el backend está corriendo (ver ../trueBite-qr-back)

# 4. Iniciar servidor de desarrollo
npm run dev

# 5. Abrir en navegador:
# - http://localhost:3000
```

### Criterios de "DONE" ✅:

- ✅ `npm run dev` levanta sin errores
- ✅ Cliente API configurado (Axios)
- ✅ TypeScript compila sin errores
- ✅ Estructura de carpetas creada
- ✅ Separado del backend (puede trabajar en paralelo)

---

## 🔄 ETAPA 2 — Modelo de datos (PENDIENTE - Backend)

---

## 🔄 ETAPA 3 — Identidad de dispositivo (PENDIENTE)

---

## 🔄 ETAPA 4 — Flujo público QR + comercio (PENDIENTE)

---

## 🔄 ETAPA 5 — Votación + regla 1 por mes (PENDIENTE)

---

## 🔄 ETAPA 6 — Admin mínimo (PENDIENTE)

---

## 🔄 ETAPA 7 — Calidad mínima + tests (PENDIENTE)

---

## 🔄 ETAPA 8 — Deploy checklist (PENDIENTE)
