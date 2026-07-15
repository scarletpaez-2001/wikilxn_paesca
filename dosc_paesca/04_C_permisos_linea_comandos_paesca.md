# Bloque C: Permisos por Línea de Comandos

En esta sección detallaré el uso de comandos para la gestión, asignación y control de permisos sobre archivos y directorios en el sistema operativo, garantizando la seguridad de la información.



# 1. Traducción y Explicación de Comandos Ejecutados

* **`mkdir -p ~/demo && cd ~/demo && touch nota.txt && mkdir privado`**  
  Este comando crea una carpeta llamada `demo` en el directorio personal (el símbolo `~` apunta al home), entra inmediatamente a esa carpeta, crea un archivo vacío llamado `nota.txt` y, por último, genera una subcarpeta llamada `privado`. Los símbolos `&&` sirven para encadenar instrucciones: si una falla, no se ejecuta la siguiente.

* **`ls -l`**  
  Lista todos los archivos y carpetas del directorio actual mostrando sus detalles técnicos (permisos, propietario, grupo, tamaño y fecha de modificación).

* **`chmod 600 nota.txt`**  
  Modifica los permisos de `nota.txt` de manera numérica. Otorga permisos de lectura y escritura al propietario del archivo, quitándole absolutamente todos los accesos al grupo y a otros usuarios del sistema.
  
* **`chmod u+x,go-rwx privado`**  
  Modifica los permisos de la carpeta `privado` de manera simbólica. Le añade permisos de ejecución (`+x`) al usuario propietario (`u`), y al mismo tiempo le quita (`-`) los permisos de lectura, escritura y ejecución (`rwx`) al grupo (`g`) y a otros (`o`).

  ![Pruebas de Permisos Iniciales](/img_paesca/permisos1.png)

* **`sudo chown root:root nota.txt`**  
  Cambia el propietario y el grupo del archivo `nota.txt` para que pertenezcan al súper usuario administrador (`root`). Al usar `sudo`, el sistema nos solicita privilegios elevados para poder ejecutar el cambio.

* **`sudo mkdir /srv/compartido && sudo chmod 2775 /srv/compartido`**  
  Crea una carpeta en la raíz del sistema llamada `/srv/compartido` con permisos de administrador. Luego, le aplica permisos octales especiales (`2775`), donde el `2` activa el bit de seguridad de grupo (SETGID).

* **`sudo chmod +t /tmp`**  
  Aplica el permiso especial llamado "Sticky Bit" (representado con el símbolo `+t`) sobre la carpeta de archivos temporales del sistema (`/tmp`).

* **`ls -ld /srv/compartido /tmp`**  
  Muestra detalladamente los permisos y propiedades únicamente de los directorios `/srv/compartido` y `/tmp`, sin listar todo el contenido que guardan dentro.
![Configuración de Permisos Especiales y Propietarios](/img_paesca/permisos2.png)


# 2. Actividad de Análisis: Permisos y Control de Acceso

# Interpretación de la Cadena de Permisos `-rw-rw-r--`
Esta cadena representa un archivo regular y se lee dividiendo sus caracteres en cuatro secciones de izquierda a derecha:
1. **Primer carácter (`-`)**: Indica el tipo de elemento. El guion significa que es un **archivo regular**.
2. **Grupo del Propietario (`rw-`)**: Indica que el dueño de este archivo tiene permisos de **lectura** (read) y **escritura** (write), pero no de ejecución.
3. **Grupo Asociado (`rw-`)**: Indica que cualquier usuario que pertenezca al grupo del archivo también cuenta con permisos de **lectura** y **escritura**.
4. **Otros Usuarios (`r--`)**: Indica que el resto de los usuarios del sistema solo pueden **leer** el archivo, sin la posibilidad de modificarlo ni ejecutarlo.



# Comparativa: Método Numérico (Octal) vs Método Simbólico
Ambos métodos sirven para configurar los accesos de seguridad usando el comando `chmod`, pero se aplican de manera distinta:

* **Método Numérico**: Utiliza números basados en el sistema binario asignando un peso a cada acción: Lectura (4), Escritura (2) y Ejecución (1). Se suman los valores para definir el permiso de cada perfil (dueño/grupo/otros).  
  * Por ejemplo: `chmod 640 archivo` (6 = lectura+escritura para el dueño; 4 = solo lectura para el grupo; 0 = ningún acceso para otros).
* **Método Simbólico**: Utiliza letras y operadores para modificar accesos puntuales sin alterar el resto de los permisos existentes. Se usan las letras `u` (dueño), `g` (grupo), `o` (otros) o `a` (todos), junto con los operadores `+` (añadir) o `-` (quitar).  
  * Por ejemplo: `chmod g+w archivo` (solo agrega el permiso de escritura al grupo, manteniendo intactos los accesos del dueño y de otros).



# ¿Para qué sirve cambiar el propietario (`chown`)?
El comando `chown` se utiliza para traspasar la propiedad y el control de un archivo o carpeta a otro usuario o grupo del sistema. Es una herramienta clave de seguridad en Linux para asegurar que solo las cuentas autorizadas (como los servicios de red o administradores) tengan la autoría de directorios críticos, evitando manipulaciones accidentales de usuarios comunes.


# ¿Qué hacen los Permisos Especiales?

* **Bit SETGID** (representado por la letra `s` en el grupo):  
  Cuando se aplica a un directorio, obliga a que cualquier archivo o carpeta que se cree en su interior herede automáticamente el grupo dueño del directorio principal, en lugar de heredar el grupo primario del usuario que lo creó. Es ideal para carpetas compartidas donde trabajan varios usuarios del mismo departamento.

* **Sticky Bit** (representado por la letra `t` al final de la cadena):  
  Se aplica a directorios compartidos o públicos (como `/tmp`). Su función es evitar que un usuario pueda borrar o renombrar archivos que pertenecen a otro compañero de trabajo, limitando el derecho de borrado únicamente al dueño real del archivo o al administrador del sistema.
  