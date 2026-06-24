# Convenio Musicala × Foneh

Aplicación web estática lista para publicar en **GitHub Pages**.

## Estructura de archivos

```
/
├── index.html          ← Página principal
├── styles.css          ← Todos los estilos (dark mode, responsive, animaciones)
├── app.js              ← JavaScript: galería, carrusel, precios, PWA
├── manifest.json       ← PWA manifest
├── sw.js               ← Service Worker (caché offline)
├── data/
│   └── precios.json    ← ⭐ EDITA AQUÍ los precios del convenio
├── assets/
│   ├── images/         ← Agrega aquí tus fotografías reales
│   └── icons/          ← icon-192.png e icon-512.png para PWA
└── README.md
```

## Cómo editar los precios

Abre `data/precios.json` y reemplaza los `0` con los valores reales:

```json
{
  "servicios": [
    {
      "nombre": "Clase Individual de Música",
      "particular": 280000,   ← Precio sin convenio
      "foneh": 210000,        ← Precio con convenio Foneh
      ...
    }
  ]
}
```

El descuento (%) y el ahorro se calculan **automáticamente**.

> Si dejas el valor en `0`, la celda mostrará "Por definir".

## Cómo agregar imágenes reales

Agrega tus fotos en `assets/images/` y referencia en el HTML o JS:

```css
/* En styles.css, reemplaza el gradient de cada sección: */
.service-img-musica {
  background: url('../assets/images/musica.jpg') center/cover;
}
```

## Cómo publicar en GitHub Pages

1. Crea un repositorio en GitHub (ej: `musicala-foneh`)
2. Sube todos los archivos al branch `main`
3. Ve a **Settings → Pages → Source → main / (root)**
4. Tu sitio quedará en: `https://TU-USUARIO.github.io/musicala-foneh/`

## Cómo actualizar el número de WhatsApp

Busca y reemplaza `57XXXXXXXXXX` en `index.html` y `app.js` por el número real:

```
57XXXXXXXXXX → 573001234567
```

(Formato internacional sin espacios ni +)

## Logos oficiales

Reemplaza los logos de texto por imágenes reales:

En `index.html`, busca `.logo-icon` y cambia por:
```html
<img src="assets/images/logo-foneh.png" alt="Foneh" width="40" height="40" />
<img src="assets/images/logo-musicala.png" alt="Musicala" width="40" height="40" />
```

## Funcionalidades incluidas

- ✅ Diseño responsive (móvil, tablet, escritorio)
- ✅ Modo oscuro / claro con memoria
- ✅ Animaciones al hacer scroll
- ✅ Tabla de precios cargada desde JSON
- ✅ Galería con filtros y lightbox
- ✅ Carrusel de testimonios automático
- ✅ Formulario de contacto → WhatsApp
- ✅ PWA instalable (manifest + service worker)
- ✅ SEO optimizado + Open Graph
- ✅ Accesibilidad WCAG AA
- ✅ Sin dependencias externas de servidor

---

Desarrollado para **Musicala × Foneh** · Bogotá, Colombia · 2026
