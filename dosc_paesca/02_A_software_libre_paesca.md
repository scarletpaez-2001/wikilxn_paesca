# Bloque A: Software Libre y Licenciamiento

## 1. Comandos de Auditoría Ejecutados
* **`ls /usr/share/common-licenses/`**: Lista las licencias estándar precargadas en el sistema operativo (ej. GPL, LGPL, BSD, Apache).
* **`less /usr/share/common-licenses/GPL-3`**: Abre el paginador interactivo para visualizar el texto completo de la Licencia Pública General GNU versión 3.
* **`cat /usr/share/doc/bash/copyright`**: Despliega en la salida estándar el archivo de derechos de autor y licencias específicas aplicadas al shell Bash en la distribución.

## 2. Marco Conceptual de Licenciamiento
* **Software Libre**: Software que respeta las cuatro libertades fundamentales del usuario: libertad de usarlo con cualquier propósito, estudiar su funcionamiento y adaptarlo, distribuir copias, y mejorar el programa publicando dichas mejoras.
* **Copyleft (GPL)**: Mecanismo legal que garantiza que los trabajos derivados de un software libre sigan siendo libres. Obliga a que cualquier redistribución o modificación mantenga los mismos derechos de acceso al código fuente.
* **Licencias Permisivas (MIT / BSD / Apache)**: Autorizan la modificación, distribución y sublicenciamiento comercial del software sin obligar a que las versiones derivadas liberen su código fuente. Su única restricción general es mantener el aviso de copyright original.
* **Software Propietario**: Software privativo donde el titular de los derechos restringe el uso, redistribución o modificación, ocultando el código fuente y exigiendo un acuerdo de licencia de usuario final (EULA).

## 3. Licenciamiento de la Distribución Ubuntu
La distribución Ubuntu Server está compuesta por una colección de paquetes de software donde la gran mayoría se distribuye bajo licencias libres como **GNU GPL**. El núcleo (Kernel Linux) se rige específicamente bajo **GNU GPL v2**. Sin embargo, la infraestructura global de Ubuntu permite la inclusión opcional de firmware binario cerrado (blobs) y controladores propietarios en secciones de repositorios restringidos (*restricted*) para asegurar la compatibilidad del hardware.