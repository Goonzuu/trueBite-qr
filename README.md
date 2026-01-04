# TrueBite QR - Frontend

Frontend mobile-first para TrueBite QR - Sistema de votación por QR

## Stack Tecnológico

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **HTTP Client**: Axios
- **Deploy**: Vercel

## Setup Local

### Prerrequisitos

- Node.js >= 18.0.0
- Backend API corriendo (ver `../trueBite-qr-back/README.md`)
- npm o yarn

### Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Configurar variables de entorno:
```bash
cp .env.example .env
# Editar .env con la URL del backend API
```

3. Iniciar servidor de desarrollo:
```bash
npm run dev
```

4. Abrir en el navegador:
- http://localhost:3000

## Estructura del Proyecto

```
/app              # Next.js App Router (páginas)
  /[pages]        # Páginas públicas
/lib              # Utilidades
  api.ts          # Cliente API (Axios)
/components       # Componentes React reutilizables
```

## Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build para producción
- `npm run start` - Servidor de producción
- `npm run lint` - Linter

## Variables de Entorno

- `NEXT_PUBLIC_API_URL` - URL del backend API (default: http://localhost:3001/api)
- `NODE_ENV` - Entorno (development/production)

## Notas

- Este es el frontend puro, consume el backend API en `../trueBite-qr-back`
- Mobile-first design con Tailwind CSS
- Sin API routes de Next.js (todo el backend está separado)
