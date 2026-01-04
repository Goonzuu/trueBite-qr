# TrueBite QR - Backend

API Backend para TrueBite QR - Sistema de votación por QR

## Stack Tecnológico

- **Runtime**: Node.js >= 18.0.0
- **Framework**: Express 4.18.2
- **Lenguaje**: TypeScript 5.3.3
- **ORM**: Prisma 5.7.1
- **Base de Datos**: PostgreSQL

## Setup Local

### Prerrequisitos

- Node.js >= 18.0.0
- PostgreSQL (o Docker para docker-compose)
- npm o yarn

### Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Configurar variables de entorno:
```bash
cp .env.example .env
# Editar .env con tus credenciales de PostgreSQL
```

3. Configurar base de datos:
```bash
# Generar Prisma Client
npm run db:generate

# Aplicar migraciones
npm run db:migrate
```

4. Iniciar servidor de desarrollo:
```bash
npm run dev
```

5. Verificar que funciona:
- Endpoint: http://localhost:3001/api/health

## Estructura del Proyecto

```
/src
  /routes        # API routes
  /controllers   # Controllers (lógica de request/response)
  /services      # Services (lógica de negocio)
  /lib           # Utilidades (db client, helpers)
  /types         # Tipos TypeScript
  /middleware    # Middlewares
/prisma          # Schema y migraciones de Prisma
```

## Scripts Disponibles

- `npm run dev` - Servidor de desarrollo con nodemon
- `npm run build` - Compilar TypeScript
- `npm run start` - Servidor de producción
- `npm run db:generate` - Generar Prisma Client
- `npm run db:push` - Push schema a DB (desarrollo)
- `npm run db:migrate` - Crear/aplicar migraciones
- `npm run db:studio` - Abrir Prisma Studio
- `npm run db:seed` - Ejecutar seeds

## Variables de Entorno

- `DATABASE_URL` - URL de conexión a PostgreSQL
- `PORT` - Puerto del servidor (default: 3001)
- `FRONTEND_URL` - URL del frontend para CORS
- `ADMIN_API_KEY` - Clave secreta para endpoints admin
- `NODE_ENV` - Entorno (development/production)
