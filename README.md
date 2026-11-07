# Backend de prueba sin MongoDB

Backend NestJS independiente, sin conexión a base de datos.

## API

`GET /api/hola` responde:

```json
{ "mensaje": "Hola Santiago" }
```

## Despliegue en Vercel

Importá el repositorio y configurá `backend-sin-mongo` como **Root Directory**. No necesita variables de entorno. El preset del proyecto debe ser **NestJS**.

## Prueba local

Ejecutá `npm install`, `npm run build` y `npm run start:prod`. La API queda en `http://localhost:3000/api/hola`.
