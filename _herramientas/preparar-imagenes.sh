#!/bin/bash
# Prepara las imágenes generadas con Gemini para la web (solo macOS, usa "sips", que viene instalado).
# 1. Guarda cada imagen en la carpeta _imagenes-gemini/ con el nombre indicado en IMAGENES-PROMPTS.md
#    (por ejemplo: chatbots-ia-para-pymes.png).
# 2. Desde la raíz del repositorio ejecuta:  bash _herramientas/preparar-imagenes.sh
# Cada imagen se recorta al centro a 1200x630 (imagen principal y og:image) y a 480x252 (miniatura),
# se convierte a JPG y sustituye a la provisional en assets/img/.
set -e
cd "$(dirname "$0")/.."
IN="_imagenes-gemini"
[ -d "$IN" ] || { echo "No existe la carpeta $IN"; exit 1; }
TMP=$(mktemp -d)
n=0
for f in "$IN"/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}; do
  [ -e "$f" ] || continue
  name=$(basename "${f%.*}")
  if [ ! -f "assets/img/$name.jpg" ]; then
    echo "AVISO: $name no corresponde a ninguna imagen de la web (revisa el nombre). Se omite."
    continue
  fi
  w=$(sips -g pixelWidth "$f" | awk '/pixelWidth/{print $2}')
  h=$(sips -g pixelHeight "$f" | awk '/pixelHeight/{print $2}')
  # escalar para que cubra 1200x630 y recortar al centro
  if [ $((w * 630)) -gt $((h * 1200)) ]; then sips --resampleHeight 630 "$f" --out "$TMP/a.png" >/dev/null
  else sips --resampleWidth 1200 "$f" --out "$TMP/a.png" >/dev/null; fi
  sips --cropToHeightWidth 630 1200 "$TMP/a.png" --out "$TMP/b.png" >/dev/null
  sips -s format jpeg -s formatOptions 80 "$TMP/b.png" --out "assets/img/$name.jpg" >/dev/null
  sips --resampleWidth 480 "$TMP/b.png" --out "$TMP/c.png" >/dev/null
  sips -s format jpeg -s formatOptions 76 "$TMP/c.png" --out "assets/img/thumb/$name.jpg" >/dev/null
  echo "OK  $name"
  n=$((n+1))
done
rm -rf "$TMP"
echo "Listo: $n imágenes actualizadas. Revisa los cambios y haz commit + push."
