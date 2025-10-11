# frontIntegrador

proyecto integrador estudiantil

# 🎓 Sistema Educativo Integral

> Plataforma web desarrollada para la gestión académica y de bienestar estudiantil, que permite registrar, monitorear y analizar información relacionada con estudiantes, asistencia, rendimiento académico y bienestar familiar.

---

## 🚀 Tecnologías principales

![React](https://img.shields.io/badge/React-18.0.0-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0.6-38B2AC?logo=tailwind-css)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple?logo=bootstrap)
![React Router](https://img.shields.io/badge/React_Router-7.0.14-CA4245?logo=react-router)
![MongoDB](https://img.shields.io/badge/MongoDB-Pending-green?logo=mongodb)
![Express](https://img.shields.io/badge/Express-Pending-lightgrey?logo=express)

---

## 🧩 Módulos del sistema

### 1️⃣ Bienestar Estudiantil

- Registro de casos de salud, psicológico, académico, social y disciplinario.
- Seguimiento de cada caso con observaciones y próximas acciones.
- Estado del caso: **Activo**, **En seguimiento**, **Resuelto**.
- Panel informativo del estudiante seleccionado.

### 2️⃣ Módulo Familiar

- Registro y gestión de información de acudientes.
- Asociación familiar-estudiante.
- Control de notificaciones al núcleo familiar.

### 3️⃣ Ingreso y Registro

- Registro de nuevos estudiantes con sus datos básicos.
- Control de matrícula y actualización de información personal.

### 4️⃣ Seguimiento de Notas

- Registro de calificaciones por materia.
- Promedios por período y estadísticas académicas.
- Visualización por curso o estudiante.

### 5️⃣ Asistencia

- Control de asistencia diaria.
- Indicadores de puntualidad y ausentismo.
- Exportación a reportes.

### 6️⃣ Estadísticas

- Tablero visual con métricas de rendimiento, asistencia y bienestar.
- Gráficas y análisis de tendencias.

---

## 🗂️ Estructura del proyecto

src/
│
├── assets/ # Recursos estáticos (imágenes, íconos)
├── components/ # Componentes reutilizables (Topbar, Sidebar, Cards)
├── pages/ # Páginas principales (Bienestar, Familiar, Notas, etc.)
├── routes/ # Configuración de rutas
├── services/ # Conexiones con API (pendiente)
├── App.jsx # Configuración principal
└── main.jsx # Punto de entrada

---

## 🖥️ Instalación y ejecución

```bash
# Clonar el repositorio
git clone https://github.com/tuusuario/sistema-educativo-integral.git

# Entrar al directorio
cd sistema-educativo-integral

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

📍 Se ejecutará en: http://localhost:5173
```
