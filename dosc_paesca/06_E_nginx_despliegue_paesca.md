# Parte E: Nginx y Despliegue del Sitio Web

En este apartado se documenta el despliegue del entorno web en producción.


# 1. Procedimiento de Configuración

# Paso 1: Instalación del Servidor Web
* **`sudo apt install -y nginx`**  
  Este comando sirve para descargar e instalar el servidor web de alto rendimiento Nginx en el sistema base, dejándolo operativo en el puerto 80 por defecto.
  ![Instalación de Nginx - Progreso](/img_paesca/serv1.png)
![Servicio Nginx Activo](/img_paesca/serv2.png)

# Paso 2: Construcción y Compilación del Sitio
* **`sudo apt install -y nodejs npm git`**  
  Este comando lo utilicé para instalar los entornos de ejecución necesarios para el manejo de JavaScript del lado del servidor y la herramienta de control de versiones Git.
  ![Instalación de dependencias de Node](/img_paesca/instal_node.png)

* **`git clone <tu-repo>`**  
  Para descargar y clonar los archivos del código fuente de la Wiki desarrollados en React/Vite desde el repositorio remoto a una carpeta local de trabajo.
  ![Clonación del repositorio parte 1](/img_paesca/clonacion1.png)
![Clonación del repositorio parte 2](/img_paesca/clonacion2.png)

* **`cd <tu-repo> && npm install`**  
  Accede al directorio del proyecto y descarga todas las dependencias y librerías declaradas en el archivo `package.json`.
* **`npm run build`**  
  Ejecuta el empaquetador (Vite) para procesar el código de desarrollo y compilar una versión de producción optimizada y estática (HTML, CSS y JS), la cual se guarda de forma automática en una carpeta llamada `dist/`.
  ![Compilación exitosa con npm run build](/img_paesca/construccion1.png)

# Paso 3: Migración de Archivos al Servidor
* **`sudo mkdir -p /var/www/wiki`**  
  Para crear la carpeta de destino definitiva en la ruta estándar de servidores web en Linux, asegurando la estructura si no existiera previamente.
* **`sudo cp -r dist/* /var/www/wiki/`**  
  Este comando copia de manera recursiva todo el contenido estático generado en la compilación (`dist/`) hacia la carpeta de Nginx.
 ![Migración de compilación al directorio web](/img_paesca/copiar_sitio.png)

* **`sudo chown -R www-data:www-data /var/www/wiki`**  
  Asigna como propietario y grupo de la carpeta y de sus archivos al usuario `www-data` (que es la cuenta interna con la que corre el servicio de Nginx). Esto garantiza que el servidor tenga permisos limpios de lectura y protección sobre la web.

# Paso 4: Creación del Bloque de Servidor (Virtual Host)
* **`sudo nano /etc/nginx/sites-available/wiki`**  
  Para abrir el editor de texto Nano en la ruta de configuraciones disponibles de Nginx para definir el comportamiento del nuevo sitio con los siguientes parámetros:

server {
    listen 80 default_server;
    root /var/www/wiki;
    index index.html;

    location / {
        try_files $uri$uri/ /index.html;
    }
} 
![Creación de configuración](/img_paesca/creacion_archivo.png)


# Paso 5: Activar el sitio y recargar
* **`sudo ln -s /etc/nginx/sites-available/wiki/etc/nginx/sites-enabled/`** 
* **`sudo systemctl restart nginx`**
![Activación del sitio y recarga ](/img_paesca/recarga_nginx.png)

# Paso 6: Comprobación 
![Comprobación del sitio levantado](/img_paesca/sitio_levantado.png)