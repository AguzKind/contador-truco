# Marcador Truco

SPA para llevar el marcador del juego Truco (Argentina). Equipos **Nosotros** vs **Ellos**, partidas a 15 o 30 puntos.
Este proyecto fue enteramente realizado con Cursor, para aprender las funcionalidades y el alcance del IDE.

- Vite + React + Tailwind CSS
- Despliegue en GitHub Pages con `gh-pages` (mismo enfoque que [react-gh-pages](https://github.com/gitname/react-gh-pages))

## Desarrollo

```bash
npm install
npm run dev
```

## Publicar en GitHub y desplegar en GitHub Pages

1. **Crear un repositorio en GitHub** (ej. `contador-truco`). No inicialices con README si clonas vacío.

2. **Ajustar `package.json`** si tu repo o usuario son distintos:
   - `homepage`: `https://TU_USUARIO.github.io/NOMBRE_REPO`
   - En `vite.config.js`, `base`: `'/NOMBRE_REPO/'` (mismo nombre que el repo).

3. **Inicializar Git y conectar el remoto** (si aún no está):
   ```bash
   git init
   git remote add origin https://github.com/TU_USUARIO/contador-truco.git
   ```

4. **Subir el código y desplegar**:
   ```bash
   git add .
   git commit -m "Marcador Truco - inicial"
   git push -u origin main
   npm run deploy
   ```

5. **Activar GitHub Pages** en el repo: **Settings → Pages → Source**: rama `gh-pages`, carpeta `/ (root)`.

La app quedará en `https://TU_USUARIO.github.io/contador-truco/`.

## Comandos

| Comando        | Descripción                    |
|----------------|--------------------------------|
| `npm run dev`  | Servidor de desarrollo         |
| `npm run build`| Build de producción            |
| `npm run deploy` | Build y subida a rama `gh-pages` |
