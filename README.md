# NestJS en Vercel

API mínima en NestJS. `GET /api/hello` responde:

```json
{"message":"Hola desde NestJS!"}
```

## Requisitos

- Node.js 20 o superior
- npm

## Ejecutar localmente

```bash
npm install
npm run start:dev
```

Abrí <http://localhost:3000/api/hello>.

Para probar el entorno de Vercel localmente, instalá la CLI (`npm install --global vercel`) y ejecutá:

```bash
npm run vercel:dev
```

## Desplegar en Vercel

1. Subí el proyecto a un repositorio Git e importalo desde [vercel.com/new](https://vercel.com/new), o instalá la CLI con `npm install --global vercel`.
2. Desde la carpeta del proyecto, ejecutá `vercel` para crear un despliegue de vista previa.
3. Ejecutá `vercel --prod` para publicar en producción.

Vercel detecta la aplicación NestJS mediante `src/main.ts` y la ejecuta como una función serverless. El prefijo global `api` y el controlador NestJS resuelven la ruta `/api/hello`.
