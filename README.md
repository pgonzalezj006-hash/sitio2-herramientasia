# HerramientasIA — guiaherramientasia.com

Sitio estático (HTML + CSS) publicado con **Cloudflare Pages** conectado a este repositorio de GitHub.
Versión de septiembre de 2026 con todas las mejoras del plan SEO aplicadas.

## Cómo publicarlo

1. Descomprime el ZIP y sube **todo su contenido** a la raíz del repositorio
   (GitHub → Add file → Upload files → arrastrar → Commit changes).
2. Cloudflare Pages publica automáticamente en 1-2 minutos (Workers & Pages → proyecto → Deployments).
3. En Cloudflare, purga la caché: Caching → Configuration → Purge Everything.
4. En Google Search Console, envía de nuevo `https://guiaherramientasia.com/sitemap.xml`
   y pide la indexación de la home, las 5 categorías y los 6 artículos nuevos.

## Direcciones limpias

Cloudflare Pages sirve cada página sin `.html` (`/articulos/resena-chatgpt`). Por eso los enlaces internos,
las etiquetas canónicas y el sitemap usan ya esas direcciones. Los archivos siguen llamándose `.html`.

## Imágenes (Gemini)

La web lleva imágenes provisionales (sin texto) para que funcione desde el primer momento.
`IMAGENES-PROMPTS.md` contiene un prompt por imagen con el nombre de archivo exacto.
Genera cada imagen en Gemini, guárdala en `_imagenes-gemini/` con ese nombre y, en un Mac,
ejecuta `bash _herramientas/preparar-imagenes.sh` (recorta a 1200×630, crea la miniatura y sustituye la provisional).

## Mantenimiento

- **Precios:** las tablas indican «revisado en septiembre de 2026». Revísalas cada mes.
- **Cookies y AdSense:** AdSense solo se carga tras pulsar «Aceptar» (`assets/cookie-consent.js`);
  la verificación de AdSense usa la etiqueta meta `google-adsense-account` y `ads.txt`.
