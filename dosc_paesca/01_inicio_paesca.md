# Wiki de Infraestructura y Administración de Sistemas Linux



* **Asignatura**: Sistemas Operativos
* **Proyecto**: Wiki de Configuración, Permisos y Despliegue en Servidores Linux (`wikilxn_paesca`).
* **Estudiante**: Scarlet Páez
* **Institución**: Inacap
* **Docente**: Rubén Schnettler



## 1. Estructura de la Página Web (Arquitectura del Proyecto)

Este proyecto es una Wiki de arquitectura estática moderna desarrollada con React y empaquetada mediante Vite. Su estructura física de archivos se organiza de la siguiente manera:

 *`wikilxn_paesca`: Raíz del proyecto
 *`dosc_paesca/`: Carpeta principal que aloja todo el conocimiento documentado de la asignatura. Contiene los archivos `.md` correspondientes a cada bloque del laboratorio.
 *`public/`: Directorio público de distribución.
 *`img_paesca/`: Contiene exclusivamente los recursos gráficos y capturas de pantalla de la consola (`.png`), sirviendo como evidencia de los procedimientos realizados en la máquina virtual Linux.
 *`src/`: Carpeta contenedora del código fuente de React.
 *`App.jsx`: Componente raíz e interactivo que importa de forma estática los archivos Markdown y renderiza dinámicamente un panel con un menú de navegación a la izquierda y el visualizador del contenido a la derecha.
 *`App.css`: Hoja de estilos que implementa un diseño responsivo, con tipografías legibles y una paleta de colores oscura (estilo terminal de desarrollo).
 *`main.jsx`: Punto de entrada de la aplicación de React.
 *`index.html`: Estructura de maquetación HTML base que carga la aplicación.
 *`vite.config.js`: Archivo de configuración que optimiza las tareas de compilación y empaquetado del proyecto.

