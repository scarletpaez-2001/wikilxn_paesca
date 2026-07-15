# Parte D: Gestores de Paquetes (APT)

En este bloque abordaré la administración de software en distribuciones basadas en Debian/Ubuntu utilizando el gestor Advanced Package Tool (APT), automatizando el control de dependencias e instalación de binarios.



# 1. Traducción y Explicación de Comandos Ejecutados

* **`apt search htop`**  
  Este comando realiza una búsqueda en la base de datos de paquetes locales buscando la palabra clave "htop". Sirve para verificar si la herramienta está disponible en los repositorios oficiales y conocer su nombre exacto antes de descargarla.

* **`apt show htop`**  
  Despliega la ficha técnica descriptiva del paquete "htop". Muestra información crítica como el número de versión, el tamaño que ocupará en el disco, las dependencias de software necesarias para que funcione y una breve descripción de su utilidad.
  ![Búsqueda y visualización de ficha técnica htop](/img_paesca/gest_paquetes1.png)

* **`sudo apt install -y htop tree`**  
  Descarga e instala en el sistema las herramientas `htop` (monitor de recursos) y `tree` (visualizador de directorios en árbol). El parámetro `-y` responde automáticamente "sí" a la confirmación de descarga, permitiendo una instalación desatendida, y el uso de `sudo` eleva los privilegios necesarios para modificar el software del sistema.
![Instalación de paquetes htop y tree](/img_paesca/gest_paquetes2.png)


# 2. Actividad de Análisis: Flujo de Trabajo de APT

# Descripción del Ciclo Operativo: update ➔ search ➔ show ➔ install

El proceso correcto de administración de software en un entorno Linux a través de la terminal sigue un orden lógico e incremental:

1. **`update` (Actualización de Índices)**: Es el paso inicial obligatorio. No actualiza programas, sino que descarga la lista más reciente de software disponible desde los servidores de los repositorios. Si no se ejecuta, corremos el riesgo de buscar o instalar versiones obsoletas o inexistentes.
2. **`search` (Localización del Software)**: Permite rastrear la base de datos que descargamos en el paso anterior para verificar si la aplicación existe y cómo se llama técnicamente el paquete en los repositorios.
3. **`show` (Inspección de Requisitos)**: Antes de instalar a ciegas, este comando nos ayuda a evaluar los metadatos del paquete. Nos permite revisar si el programa es muy pesado o si requiere instalar muchas librerías adicionales (dependencias) que puedan sobrecargar el servidor.
4. **`install` (Instalación Definitiva)**: Una vez que sabemos que el paquete es seguro y compatible, este comando se encarga de descargar los archivos binarios, resolver y bajar las dependencias de forma automática, y configurar el software en el sistema para que quede listo para su uso.



# Criterio de Factibilidad: Alternativas para Monitoreo de Sistema

Frente al requerimiento técnico de monitorizar el rendimiento del servidor en tiempo real (uso de procesador, memoria RAM y procesos activos), evaluamos tres herramientas de la paquetería oficial:

1. **`top`**: Viene instalado por defecto en el sistema operativo. Consume cero recursos adicionales de almacenamiento, pero su interfaz visual es sumamente básica, estática y monótona, complicando la lectura rápida o el cierre de procesos en momentos de alta carga.
2. **`htop`**: Requiere una instalación mínima (pesa menos de 400 KB en disco). Ofrece una interfaz interactiva basada en colores a través de la terminal, permite ordenar procesos con el teclado y muestra gráficos en barra muy intuitivos para la CPU y memoria RAM. Su árbol de dependencias es sumamente bajo.
3. **`glances`**: Es una alternativa extremadamente avanzada que permite monitoreo web. Sin embargo, requiere un entorno completo de Python y múltiples librerías adicionales para funcionar, lo cual incrementa el peso en disco y el uso de recursos del servidor de manera innecesaria para los fines de este laboratorio.

**Justificación de Selección:**  
Elegí htop como la opción más factible. Cumple perfectamente con el equilibrio técnico: no consume recursos críticos como glances (manteniendo el servidor ligero) pero soluciona las carencias visuales y operativas del comando nativo top, permitiendo una administración mucho más ágil y profesional mediante SSH.