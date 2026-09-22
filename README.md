# HerramientasIA — Sitio 2 (MarketIA) (rediseño visual aplicado 2026-09-22)

Comparativas y reviews de herramientas de inteligencia artificial. Segundo sitio de la red de contenido MarketIA.

## Estado: completo, listo para desplegar

- **Dominio:** guiaherramientasia.com (comprado y verificado en DNS)
- **Despliegue objetivo:** Cloudflare
- **Contacto compartido de la red:** marketia@iapracticaparanegocios.com (no modificar — ya en uso en todos los sitios de la red)
- **AdSense publisher ID:** ca-pub-9723862717735653 (misma cuenta que Sitio 1)
- **Fecha de contenido/schema:** 2026-09-22

## Contenido publicado

- 1 página de inicio (`index.html`) con 5 categorías y 22 tarjetas de artículo
- 22 artículos completos en `articulos/` (pilar + 21), ~1000-1300 palabras cada uno, con FAQ, JSON-LD (Article + FAQPage), CTA interna y bloque de anuncio
- `sobre-nosotros.html`, `contacto.html`, `politica-privacidad.html`
- `sitemap.xml` con las 26 URLs del sitio
- `robots.txt`

## Categorías del homepage

1. Empieza aquí (3 artículos)
2. Comparativas generales (4 artículos)
3. Herramientas por tarea: contenido y diseño (9 artículos)
4. Herramientas por tarea: productividad y negocio (4 artículos)
5. Buenas prácticas (2 artículos)

## Notas técnicas

- `assets/styles.css` y `assets/cookie-consent.js` copiados sin modificar desde Sitio 1 (incluye el fix de especificidad CSS del banner de cookies).
- Rutas relativas verificadas: raíz usa `assets/...` y `articulos/...`; artículos usan `../assets/...`, `../` y `../articulos/...`.
- Todos los enlaces internos (homepage → artículos, relacionados, CTA) apuntan a archivos reales creados en este mismo lote — sin placeholders "próximamente".
- Nombres de herramientas mencionados sin cifras de precio inventadas; se describen posicionamiento y niveles de plan de forma cualitativa.

## Pendiente antes de publicar

- Configurar DNS/despliegue en Cloudflare.
- Enviar sitemap a Google Search Console tras el despliegue.
- Revisión final de AdSense una vez el sitio esté en producción.
