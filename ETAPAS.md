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

---

## ✅ ETAPA 2 — Estilos TrueBite (COMPLETADA)

### Decisiones tomadas:

1. **Replicar estilos de TrueBite original**: Misma paleta de colores y configuración
2. **Tailwind config completo**: Colores personalizados, animaciones, sombras
3. **Estilos globales**: Mismos estilos de App.css adaptados a Next.js

### Estilos implementados:

#### Paleta de colores:
- **Primary**: `#B6462C` (rojo terroso)
- **Secondary**: `#FFD28F` (mostaza suave)
- **Background**: `#FAF6F1` (blanco cálido)
- **Text**: `#1C1C1C` (negro suave)
- **Accent**: `#4E342E` (marrón profundo)

#### Colores semánticos para ratings:
- **Taste**: `#B6462C` (rojo terroso)
- **Quality**: `#FFD28F` (mostaza suave)
- **Value**: `#4E342E` (marrón profundo)

#### Configuración adicional:
- **Font Family**: Inter
- **Animaciones**: fade-in, slide-up, pulse-slow
- **Sombras**: soft, medium, strong
- **Border Radius**: xl, 2xl, 3xl

#### Estilos globales:
- Scrollbar personalizado
- Focus styles para accesibilidad
- Smooth scrolling
- Estilos base de body y root

### Archivos actualizados:

- `tailwind.config.ts` - Configuración completa de Tailwind
- `app/globals.css` - Estilos globales de TrueBite
- `app/layout.tsx` - Layout con clases de Tailwind
- `app/page.tsx` - Página de ejemplo con estilos TrueBite

### Criterios de "DONE" ✅:

- ✅ Tailwind config replicado de TrueBite original
- ✅ Paleta de colores completa
- ✅ Estilos globales aplicados
- ✅ Animaciones y sombras configuradas
- ✅ Página de ejemplo con estilos TrueBite

### Notas:

- Los estilos son idénticos a TrueBite original
- Adaptados para Next.js (App Router)
- Manteniendo la misma estructura visual

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
