# La casita de Florín

Sitio de la casa en alquiler en Mar del Tuyú. React + Vite, sin backend.

## Para correrlo
    npm install
    npm run dev      # desarrollo
    npm run build    # genera la carpeta dist/ para subir a Vercel, Netlify, etc.

## Qué completar antes de publicar
1. `src/data/casa.js`: poné tu número en `whatsapp` (formato 549 + código de área + número, sin + ni espacios).
2. Mismo archivo: revisá `capacidad`, `camas`, `comodidades` y las coordenadas de `mapa`.
3. Tarifas y condiciones: completá los precios y los textos de `condiciones`; la sección aparece sola cuando hay datos.
4. `index.html`: reemplazá `TU-DOMINIO` en la etiqueta `og:image` por la URL final.
5. Fotos: `src/data/fotos.js` (para sacar o agregar fotos de la galería).
