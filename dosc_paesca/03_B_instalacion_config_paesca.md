# Bloque B: Instalación y Configuración Base del Sistema


# 1. Parámetros de Infraestructura y Topología
* **Hipervisor**: Oracle VM VirtualBox.
* **Configuración VM**: Ubuntu Server 64-bit, 2 GB RAM, 256 MB VRAM, vDI Dinámico de 25GB.

![Configuración de la VM parte 1](/img_paesca/inst_config1.png)
![Configuración de la VM parte 2](/img_paesca/inst_config2.png)

* **Configuración de Red**: Adaptador 1 en modo NAT.
* **Reglas de Reenvío de Puertos (Port Forwarding)**:
  * Servicio SSH: Puerto Anfitrión `2222` $\rightarrow$ Puerto Invitado `22`.
  * Servicio Web: Puerto Anfitrión `8080` $\rightarrow$ Puerto Invitado `80`.

![Regla SSH en VirtualBox 1](/img_paesca/config_ssh1.png)
![Regla SSH en VirtualBox 2](/img_paesca/config_ssh2.png)

# 2. Traducción Técnica de Comandos de Inicialización
# Para la conexión al servidor, me conecté desde la terminal de la máquina física hacia la máquina virtual usando SSH:
![Conectar PC Terminal 1](/img_paesca/conectar_pc1.png)
![Conectar PC Terminal 2](/img_paesca/conectar_pc2.png)

# Comandos ejecutados en el servidor 
* **`sudo hostnamectl set-hostname srv-wiki`**: Este comando lo usé para cambiarle el nombre al servidor para que se llamara scarletwiki.
![Cambio de Hostname](/img_paesca/ejec_comandos1.png)

* **`ip a`**: Este comando despliega la configuración de todas las interfaces de red, direcciones IPv4/IPv6 asignadas y estados de enlace.
![Ver IP del Servidor](/img_paesca/ejec_comandos2.png)

* **`sudo apt update && sudo apt upgrade -y`**: Sincroniza el índice de paquetes locales con los repositorios remotos y procede a actualizar de forma automática todos los paquetes instalados a su versión más reciente.
![Actualización del Sistema](/img_paesca/ejec_comandos3.png)

* **`sudo ufw allow OpenSSH && sudo ufw allow 80/tcp && sudo ufw enable`**: Sirve para configurar el cortafuegos Netfilter (UFW) para permitir conexiones entrantes en el puerto 22 (SSH) y el puerto 80 (HTTP), activando posteriormente el firewall de manera permanente.
![Configuración](/img_paesca/ejec_comandos4.png)

* **`sudo ufw status verbose`**: Muestra de forma detallada el estado operativo del firewall y el listado de reglas activas junto con las políticas por defecto.
![Ver Estado Cortafuegos](/img_paesca/ejec_comandos5.png)

# 3. Investigación: ¿Qué es NAT?, ¿para qué sirve el reenvío de puertos?, ¿DHCP vs IP fija?
* **NAT (Network Address Translation)**: Protocolo que traduce las direcciones IP privadas de una red local a una única IP pública para permitir el acceso a redes externas (Internet). Aísla la VM del entorno físico externo, impidiendo conexiones directas entrantes no solicitadas.
* **Reenvío de Puertos (Port Forwarding)**: Configuración que mapea un puerto específico de la máquina anfitriona hacia un puerto de la máquina invitada (VM). Es estrictamente necesario en entornos NAT para permitir que peticiones externas (como el puerto `8080` del navegador local) superen el aislamiento y alcancen los servicios internos de la VM (puerto `80`).
* **¿DHCP o IP Fija en Servidores?**: En entornos de producción real, un servidor siempre debe poseer una IP fija (estática) para garantizar que los servicios DNS, pasarelas y clientes siempre localicen el nodo en la misma dirección de red. No obstante, en este laboratorio, al operar bajo la red NAT interna de VirtualBox, el servicio DHCP asigna de forma consistente la misma IP estática virtual, permitiendo la persistencia del reenvío de puertos.
