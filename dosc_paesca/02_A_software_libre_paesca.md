# Bloque A: Software Libre y Licenciamiento

# 1. Comandos de Auditoría Ejecutados 
* **`ls /usr/share/common-licenses/`**: Sirven como referencia centralizada para que los desarrolladores y el sistema enlacen los términos legales de los programas, evitando tener que copiar y repetir el mismo texto en cada paquete instalado.
* **`less /usr/share/common-licenses/GPL-3`**: El comando less /usr/share/common-licenses/GPL-3 se utiliza para listar y ver la información de la Licencia Pública General de GNU (GPL) en el directorio /usr/share/common-licenses/GPL-3.
* **`cat /usr/share/doc/bash/copyright`**: Despliega en la salida estándar el archivo de derechos de autor y licencias específicas aplicadas al shell Bash en la distribución.

# 2. Explicación de software libre y su diferencia: 
* **Software Libre**: Software que respeta las cuatro libertades fundamentales del usuario: libertad de usarlo con cualquier propósito, estudiar su funcionamiento y adaptarlo, distribuir copias, y mejorar el programa publicando dichas mejoras.
* **Copyleft (GPL)**: Mecanismo legal que garantiza que los trabajos derivados de un software libre sigan siendo libres. Obliga a que cualquier redistribución o modificación mantenga los mismos derechos de acceso al código fuente.
* **Licencias Permisivas (MIT / BSD / Apache)**: Autorizan la modificación, distribución y sublicenciamiento comercial del software sin obligar a que las versiones derivadas liberen su código fuente. Su única restricción general es mantener el aviso de copyright original.
* **Software Propietario**: Software privativo donde el titular de los derechos restringe el uso, redistribución o modificación, ocultando el código fuente y exigiendo un acuerdo de licencia de usuario final (EULA).

# 3. Licenciamiento de la Distribución Ubuntu
La distribución Ubuntu Server está compuesta por una colección de paquetes de software donde la gran mayoría se distribuye bajo licencias libres como GNU GPL. El núcleo (Kernel Linux) se rige específicamente bajo GNU GPL v2. Sin embargo, la infraestructura global de Ubuntu permite la inclusión opcional de firmware binario cerrado (blobs) y controladores propietarios en secciones de repositorios restringidos (restricted) para asegurar la compatibilidad del hardware.

