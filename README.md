# Greek Wedding

Base de una guía para invitados a una boda en Grecia, con React, JavaScript, Vite, React Router y CSS propio.

## Desarrollo

```bash
npm install
npm run dev
```

## Comprobaciones

```bash
npm run lint
npm run build
npm run preview
```

## Organización

- `src/App.jsx`: las siete rutas de la aplicación.
- `src/components/`: cabecera, navegación y layout compartido con `Outlet`.
- `src/pages/`: componentes y archivos CSS reservados para cada página.
- `src/styles/`: reset, variables provisionales y bases globales, importados desde `main.jsx`.
- `src/assets/`, `src/lib/` y `src/utils/`: carpetas reservadas para recursos y futuras utilidades.
- `src/i18n/index.js`: pendiente de configurar, sin dependencias de idiomas.

Las páginas contienen únicamente sus títulos provisionales. Al publicar en un alojamiento estático, este deberá servir `index.html` también para las rutas de la aplicación, para permitir el acceso directo con `BrowserRouter`.
