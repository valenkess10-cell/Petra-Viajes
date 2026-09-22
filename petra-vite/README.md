# Petra Viajes — proyecto Vite

Landing page de Petra Viajes y Turismo, lista para editar en Visual Studio Code y desplegar en un dominio propio.

## 1. Abrir el proyecto

1. Descomprimí el .zip.
2. Abrí la carpeta `petra-vite` en Visual Studio Code (`File > Open Folder...`).
3. Necesitás [Node.js](https://nodejs.org) instalado (versión 18 o superior). Para chequear: `node -v` en la terminal.

## 2. Instalar dependencias

Abrí una terminal en VS Code (`Terminal > New Terminal`) y corré:

```bash
npm install
```

## 3. Levantarlo en local (localhost)

```bash
npm run dev
```

Esto va a abrir el sitio en algo como `http://localhost:5173`. Cada cambio que guardes en `index.html` se refleja al instante en el navegador (hot reload).

## 4. Estructura del proyecto

```
petra-vite/
├── index.html      ← toda la página (HTML, CSS y JS están en este mismo archivo)
├── public/          ← acá van assets estáticos que no pasan por el bundler (ej: favicon)
├── package.json
└── vite.config.js   ← configuración de Vite (no hace falta tocarla)
```

Todo el contenido —textos, colores, secciones— está en `index.html`. Los estilos están en el `<style>` dentro del `<head>`, no hay archivos CSS separados.

## 5. Generar la versión de producción

Cuando esté listo para publicar:

```bash
npm run build
```

Esto genera una carpeta `dist/` con los archivos optimizados y listos para subir a cualquier hosting.

Para revisar cómo queda esa build antes de subirla:

```bash
npm run preview
```

## 6. Publicarlo con tu dominio (.com)

Las opciones más simples, en orden de recomendación:

**Opción A — Vercel o Netlify (gratis, más fácil)**
1. Subí este proyecto a un repositorio de GitHub.
2. Entrá a [vercel.com](https://vercel.com) o [netlify.com](https://netlify.com), conectá tu cuenta de GitHub e importá el repo.
3. Ambos detectan Vite automáticamente (build command: `npm run build`, output: `dist`).
4. Una vez desplegado, en la sección de configuración del proyecto agregás tu dominio propio (`petraviajes.com`) y seguís las instrucciones para apuntar los DNS desde donde compraste el dominio.

**Opción B — Hosting tradicional (cPanel, Hostinger, etc.)**
1. Corré `npm run build`.
2. Subí el contenido de la carpeta `dist/` por FTP a la carpeta pública de tu hosting (`public_html` o similar).
3. Apuntá el dominio a ese hosting desde el panel de tu proveedor.

## 7. Editar contenido

Buscá estos bloques dentro de `index.html` para reemplazar los datos de ejemplo:
- Destinos y precios: sección `<div class="dest-grid">`
- Testimonio: sección con `<blockquote>`
- Datos de contacto (mail, teléfono, WhatsApp, dirección): dentro de `<footer>`
- Número de WhatsApp del botón principal: buscá `wa.me/5491100000000` y reemplazalo por el número real, en formato `54 9 11 XXXX XXXX` sin espacios ni símbolos.
