## flow this link for ubuntu 22.04

``https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-22-04``

## Install nginx

`` sudo apt update``
``sudo apt install nginx``

## Adjusting the Firewall

``sudo ufw app list``

##  Checking your Web Server

``systemctl status nginx``

## Managing the Nginx Process

**Stop command**
``sudo systemctl stop nginx``

**Start command**
``sudo systemctl start nginx``

**Restart command**
``sudo systemctl restart nginx``


**If you are only making configuration changes, Nginx can often reload without dropping connections.**

``sudo systemctl reload nginx``



