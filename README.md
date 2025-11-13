# Fashion Store - Aplicación de Tienda de Ropa

Una aplicación web moderna y responsive para una tienda de ropa, construida con Flask y Tailwind CSS v4.

## Características

- ✨ Diseño moderno y responsive
- 🎨 Animaciones suaves con Tailwind CSS
- 🛍️ Sistema de carrito de compras
- 📱 Menú semi-transparente adaptable
- 🎯 Filtrado por categorías
- 🚀 Carga dinámica de productos

## Estructura del Proyecto

```
.
├── app.py                    # Aplicación Flask (solo rutas)
├── data/
│   ├── __init__.py
│   └── productos.py          # Datos de productos
├── templates/
│   └── index.html            # Template HTML principal
├── static/
│   ├── css/
│   │   ├── input.css         # CSS de entrada (Tailwind)
│   │   └── output.css        # CSS compilado (generado)
│   ├── js/
│   │   └── main.js           # JavaScript para interactividad
│   ├── icon/                 # Carpeta para iconos
│   └── image/                # Carpeta para imágenes
├── package.json              # Dependencias de Node.js
├── tailwind.config.js        # Configuración de Tailwind
├── requirements.txt          # Dependencias de Python
├── install.bat               # Script de instalación
├── start.bat                 # Script de inicio rápido
└── README.md
```

## Instalación Rápida (Windows)

Ejecuta el archivo de instalación:
```bash
install.bat
```

Luego inicia la aplicación:
```bash
start.bat
```

## Instalación Manual

1. Instalar dependencias de Python:
```bash
pip install -r requirements.txt
```

2. Instalar dependencias de Node.js:
```bash
npm install
```

3. Compilar CSS de Tailwind:
```bash
npm run build:css
```

4. Ejecutar la aplicación:
```bash
python app.py
```

5. Abrir en el navegador:
```
http://localhost:5000
```

## Desarrollo

Para desarrollo con auto-recarga de CSS:
```bash
npm run watch:css
```

En otra terminal:
```bash
python app.py
```

## Tecnologías Utilizadas

- **Backend**: Flask (Python)
- **Frontend**: HTML5, Tailwind CSS v4, JavaScript
- **Iconos**: Font Awesome 6
- **Imágenes**: Unsplash (placeholder)

## Funcionalidades

### Navegación
- Menú responsive con efecto semi-transparente
- Navegación suave entre secciones
- Menú móvil desplegable

### Productos
- Grid responsive de productos
- Filtrado por categorías
- Animaciones al cargar
- Efecto hover en tarjetas

### Carrito
- Agregar productos al carrito
- Contador animado
- Notificaciones visuales

## Personalización

### Cambiar Colores
Edita los gradientes en `styles.css` y las clases de Tailwind en `index.html`.

### Agregar Productos
Modifica el array `productos` en `app.py`.

### Modificar Categorías
Actualiza los botones de categoría en `index.html` y la lógica en `main.js`.

## Responsive Design

La aplicación está optimizada para:
- 📱 Móviles (< 768px)
- 💻 Tablets (768px - 1024px)
- 🖥️ Desktop (> 1024px)

## Licencia

MIT License - Libre para uso personal y comercial.
