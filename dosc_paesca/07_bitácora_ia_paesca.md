# Bitácora de Uso de Inteligencia Artificial

En este documento registraré las interacciones, prompts específicos y el flujo de co-creación con herramientas de Inteligencia Artificial para el desarrollo, depuración y despliegue de este proyecto


# 1. Identificación del Modelo Utilizado
* **Modelo**: Gemini de Google - GitHub Copilot
* **Rol en el proyecto**: Utilicé Gemini de copiloto técnico para optimización de scripts de configuración, estructuración estática del sitio en React/Vite y asesoramiento de despliegue (Nginx y Vercel). Mientras tanto que GitHub copilot me sirvió para el diseño y colores de la interfaz.



# 2. Registro de Prompts Clave y Respuestas 

# Caso 1: Integración de Evidencias (Bloques B, C y D)
* **Contexto**: Tenía las explicaciones teóricas por un lado y una serie de capturas de la terminal por el otro. Necesitaba colocarlas en el orden lógico exacto de ejecución en la VM.
* **Prompt utilizado**:
  > *"Tengo este texto sobre la administración de permisos en Linux y estas imágenes de mi consola (`permisos1.png`, `ejec_comandos1.png`). Analiza qué comando se ejecuta en cada captura y organízame el código Markdown insertando las imágenes justo debajo del comando correspondiente."*


# Caso 2: El "Fantasma de la Wiki de Windows" (Depuración de Rutas en React)
* **Contexto**: En un proyecto previo (Wiki de Windows), al usar llamadas dinámicas tipo `fetch` para cargar los archivos `.md` desde la carpeta pública (`public/`), el sitio funcionaba en el entorno de desarrollo pero fallaba al desplegarse de manera estática en producción mediante Nginx, rompiendo las rutas físicas de navegación.
* **Prompt utilizado**:
  > *"Recuerda que en mi wiki anterior de Windows tuvimos un problema al usar `fetch` dinámico en producción con Nginx. Diseña un cargador en `App.jsx` que no use fetch, sino que cargue de forma estática y nativa los archivos .md desde la carpeta `dosc_paesca` en la raíz utilizando las directivas de Vite para asegurar que se compilen correctamente en la carpeta `dist/`."*

# Prompos de investigación y resolución de actividades:

Para la Parte A: Licenciamiento de Software

Necesito que me expliques de forma clara y detallada qué es el software libre. Además, haz una comparación y detalla las diferencias clave entre el software con licenciamiento Copyleft, las licencias permisivas (como MIT, BSD y Apache) y el software propietario, agregando ejemplos de cada uno para mi informe de la universidad.

Para la Parte B: Configuración de Red (NAT)

"Estoy configurando mi entorno en Oracle VirtualBox para un servidor Linux. Explícame a nivel de redes qué es la tecnología NAT (Network Address Translation), cómo funciona en el contexto de la máquina virtual y por qué es la opción recomendada para mantener el entorno seguro y con salida a internet."

Para la Parte C: Traducción y Explicación de Comandos

Tengo una serie de líneas de comandos ejecutadas en la terminal de Linux para la creación de usuarios, asignación de contraseñas, cambio de propietarios y permisos (como chmod y chown). Traduce cada comando al lenguaje natural en español y explícame paso a paso qué hace cada parámetro o modificador utilizado.

Para la Parte D: Flujo de Trabajo de APT

Necesito que me expliques el flujo lógico y secuencial del ciclo operativo del gestor de paquetes APT en sistemas Debian/Ubuntu. Detalla paso a paso por qué el orden correcto debe ser siempre: update, search, show, install, y qué ocurre técnicamente en el sistema en cada una de esas etapas

