# Portafolio profesional — Wendy Fabiola Charcas Paredes

Sitio estático (HTML + CSS + JS, sin dependencias) listo para GitHub Pages.

## Estructura

```
index.html                  Página completa (contenido, estilos y scripts)
assets/cv-wendy-charcas.pdf CV descargable
assets/foto.webp / foto.png Foto de perfil (WebP con respaldo PNG)
.nojekyll                   Evita que GitHub procese el sitio con Jekyll
```

## Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub. Si lo llamas `TU-USUARIO.github.io`,
   el sitio quedará en `https://TU-USUARIO.github.io/`; con otro nombre
   (por ejemplo `cv`), quedará en `https://TU-USUARIO.github.io/cv/`.
2. Sube **todo el contenido de esta carpeta**, incluida la carpeta `assets` con ese nombre exacto en minúsculas, a la raíz del repositorio
   (`index.html` debe quedar en la raíz, junto a la carpeta `assets`).
3. Ve a **Settings → Pages**. En *Source* elige **Deploy from a branch**,
   rama `main` y carpeta `/ (root)`. Guarda.
4. En uno o dos minutos el sitio estará disponible en la URL indicada.

## Después de publicar (recomendado)

Para que la vista previa al compartir el enlace (WhatsApp, LinkedIn) muestre
la foto, cambia en `index.html` la ruta relativa por la URL completa:

```html
<meta property="og:image" content="https://TU-USUARIO.github.io/assets/foto.png">
<link rel="canonical" href="https://TU-USUARIO.github.io/">
```

## Editar contenido

Todo el texto está directamente en `index.html`. Para añadir un curso, copia
una línea `<li class="card course-card" data-cat="...">` dentro de
`#courseList`; el valor de `data-cat` define su categoría en los filtros.

Guarda siempre los archivos en **UTF-8** para evitar caracteres rotos.
