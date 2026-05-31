# Centro de Negocios Santiago – SERCOTEC
Landing page desarrollada con Next.js y Tailwind CSS para el Centro de Negocios Santiago de SERCOTEC.

## Integrantes del equipo
- Sebastian Espinoza

---

## Tecnologías utilizadas
- **Next.js 16** – Framework de React para aplicaciones web
- **React 19** – Librería para construir interfaces de usuario
- **Tailwind CSS 4** – Framework de estilos utilitarios

---

## Estructura del proyecto

src/
└── app/
├── layout.js              → Estructura base con Navbar y Footer
├── page.js                → Página principal con todas las secciones
├── globals.css            → Estilos globales
├── contacto/
│   └── page.js            → Página de formulario de contacto
└── components/
├── Navbar.js          → Barra de navegación sticky y responsive
├── Footer.js          → Pie de página con información de contacto
├── HeroSection.js     → Banner principal de bienvenida
├── AboutSection.js    → Sección Nosotros con estadísticas
├── ServiceCard.js     → Tarjeta de servicio reutilizable
├── ServicesSection.js → Grilla de servicios usando ServiceCard
├── Carousel.js        → Carrusel de testimonios con autoplay
├── TestimonialsSection.js → Sección de testimonios
└── FaqSection.js      → Preguntas frecuentes desplegables

---

## Instrucciones de instalación

### Requisitos previos
- Node.js v20 o superior
- npm

### Pasos
1. Clona el repositorio: git clone https://github.com/tu-usuario/sercotec-landing.git
2. Entra a la carpeta del proyecto: cd-sercotec-landing
3. Instala las dependencias: npm install
4. Inicia el servidor de desarrollo: npm run dev
5. Abre el navegador en: http://localhost:3000 

---

## Guía de uso de los componentes

### ServiceCard
Componente reutilizable que muestra un servicio con imagen, título, descripción y botón de contacto.
El botón lleva al formulario pre-llenando el campo servicio automáticamente.

```jsx
<ServiceCard
  image="URL de la imagen"
  title="Nombre del servicio"
  description="Descripción breve del servicio"
/>
```

### Carousel
Carrusel de testimonios con autoplay cada 5 segundos, botones anterior/siguiente y puntos indicadores.
Se usa directamente dentro de TestimonialsSection sin props adicionales.

```jsx
<Carousel />
```

### FaqSection
Acordeón de preguntas frecuentes. Al hacer click en una pregunta se despliega la respuesta.
Solo una pregunta puede estar abierta a la vez.

```jsx
<FaqSection />
```

---

## Guía de buenas prácticas

### 1. Convención de nomenclatura
- Componentes en **PascalCase**: `ServiceCard.js`, `HeroSection.js`
- Variables y funciones en **camelCase**: `handleSubmit`, `openIndex`
- Archivos de páginas siempre llamados `page.js` según la convención de Next.js

### 2. Estructura de archivos
- Cada componente en su propio archivo dentro de `components/`
- Las páginas van dentro de `app/` en carpetas con el nombre de la ruta
- Un componente por archivo, sin mezclar responsabilidades

### 3. Componentes reutilizables
- Los componentes reciben datos por props en vez de tenerlos hardcodeados
- Ejemplo: `ServiceCard` recibe `image`, `title` y `description` como props
- Esto permite reutilizar el mismo componente para todos los servicios

### 4. "use client" cuando corresponde
- Agregar `"use client"` solo en componentes que usan interactividad
- Componentes con `useState`, `useEffect` o eventos como `onClick` necesitan `"use client"`
- Componentes puramente visuales no lo necesitan

### 5. Accesibilidad (WCAG 2.1)
- Usar etiquetas semánticas: `header`, `nav`, `main`, `section`, `footer`, `article`
- Agregar `aria-label` en botones que no tienen texto descriptivo
- Agregar `alt` descriptivo en todas las imágenes
- Usar `loading="lazy"` en imágenes que no son visibles al cargar la página

### 6. Validación de formularios
- Validar siempre del lado del cliente antes de enviar
- Mostrar mensajes de error claros y específicos junto al campo correspondiente
- Usar `noValidate` en el form para controlar la validación manualmente
- Implementar honeypot para protección básica contra bots

### 7. Seguridad en formularios
- Campo honeypot oculto para detectar bots automáticos
- Validación de formato de email con expresión regular
- Largo mínimo en campos de texto para evitar envíos vacíos

### 8. Optimización de imágenes
- Usar `loading="lazy"` en todas las imágenes fuera del área visible inicial
- Especificar dimensiones con `width` y `height` cuando es posible
- Usar imágenes con tamaño apropiado para evitar cargar archivos innecesariamente grandes

### 9. Responsividad
- Diseñar primero para móvil y luego para escritorio (mobile first)
- Usar las clases responsivas de Tailwind: `sm:`, `md:`, `lg:`
- Ejemplo: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` para grillas adaptativas

### 10. Organización del código
- Mantener los componentes pequeños y con una sola responsabilidad
- Separar los datos (arrays de servicios, FAQs) de la lógica del componente
- Comentar las partes del código que no son evidentes a primera vista

---

## Retrospectiva del equipo

### ¿Qué funcionó bien?
- La división de componentes facilitó el trabajo en paralelo
- Tailwind CSS aceleró el desarrollo de estilos responsive
- Next.js simplificó el manejo de rutas y páginas

### ¿Qué se puede mejorar?
- Integrar una API real para los servicios y testimonios
- Agregar pruebas automatizadas a los componentes
- Mejorar el manejo de errores en el formulario de contacto

### Plan de acción para la próxima iteración
- Conectar el formulario a un backend real
- Agregar modo oscuro
- Implementar un sistema de CMS para que el cliente pueda editar el contenido sin tocar código

---

## Información del cliente
- **Sitio web:** https://sitios.sercotec.cl/centros-de-negocios/centro-de-desarrollo-de-negocios-santiago/
- **Correo:** centro.santiago@centrossercotec.cl
- **Dirección:** Manuel Rodríguez Sur 749, Santiago (Metro Toesca)
- **Facebook:** https://www.facebook.com/centrodnsantiago