# Etapas de Desarrollo - TrueBite QR Backend

## ✅ ETAPA 1 — Setup del repo (COMPLETADA)

### Decisiones tomadas:

1. **Express + TypeScript**: Separado del frontend para trabajar en paralelo
2. **Prisma + PostgreSQL**: ORM type-safe
3. **TypeScript estricto**: Para mantener calidad de código
4. **Estructura modular**: `/src/routes`, `/src/controllers`, `/src/services`, `/src/lib`

### Archivos creados:

- Configuración Express + TypeScript
- Prisma schema básico
- Cliente Prisma singleton en `/src/lib/db.ts`
- Endpoint `/api/health` para verificar estado
- Docker Compose para PostgreSQL local
- CORS configurado para frontend
- README con instrucciones

---

## ✅ ETAPA 2 — Modelo de datos (COMPLETADA)

### Decisiones tomadas:

1. **Schema Prisma**: Modelos Commerce y Vote con relaciones
2. **Enums**: CommerceStatus para status de comercios
3. **Índices**: Optimizados para búsquedas por commerceId y deviceToken
4. **Slug único**: Generado cuando se aprueba el comercio

### Modelos implementados:

#### Commerce:
- `id` (uuid, cuid)
- `name` (string)
- `rut` (string)
- `category` (string)
- `address` (string)
- `city` (string)
- `status` (enum: pending | approved | rejected)
- `slug` (string único, nullable)
- `createdAt` / `updatedAt`
- Relación: `votes` (1:N con Vote)

#### Vote:
- `id` (uuid, cuid)
- `commerceId` (fk a Commerce)
- `deviceToken` (string)
- `serviceRating` (int 1-5, SmallInt)
- `valueRating` (int 1-5, SmallInt)
- `comment` (string nullable, opcional)
- `createdAt`
- Relación: `commerce` (N:1 con Commerce)

### Índices creados:

- `Commerce.status` - Para filtrar por status
- `Commerce.slug` - Para búsquedas por slug
- `Vote.commerceId` - Para obtener votos de un comercio
- `Vote(commerceId, deviceToken, createdAt)` - Para validar 1 voto por mes

### Seed creado:

- 1 Commerce de ejemplo (approved)
- 1 Vote de ejemplo

### Comandos:

```bash
# Generar Prisma Client
npm run db:generate

# Aplicar migraciones (cuando DB esté configurada)
npm run db:migrate

# Ejecutar seed
npm run db:seed

# Abrir Prisma Studio
npm run db:studio
```

### Criterios de "DONE" ✅:

- ✅ Schema Prisma creado con Commerce y Vote
- ✅ Enums definidos (CommerceStatus)
- ✅ Índices creados
- ✅ Relaciones configuradas
- ✅ Seed creado (1 commerce y 1 vote)
- ✅ Prisma Client generado

### Notas:

- El campo `comment` está incluido pero es opcional (nullable)
- El `slug` se genera cuando el comercio se aprueba (ETAPA 6)
- Los índices están optimizados para las búsquedas requeridas

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
