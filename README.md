# E-fligh Web  

![screenshot_E-fligt Web](./public/images/Screenshot.png)

* Sitio e-commerce. Ruta admin para crear, editar y eliminar productos y empleados (sólo usuarios autorizados, seteados en la base de datos con admin=1.  

* Signin - Signup (Autenticación mediante correo electrónico).  

* Recibirás un mail de confirmación de tu compra.  



## Instalación
```
npm install
```
## Server en localhost: 3000

1. Ejecutar XAMPP ([descarga XAMPP](https://www.apachefriends.org/es/download.html)) 
  
2. En el panel de control activar los servicios mysql y Apache.  

3. Importar la base de datos (tp_final.sql). 

4. Ejecutar ``npm start``.  


### Variables de entorno:

#### **Base de datos**
```
DB_HOST = "localhost"  

DB_USER = "root"  

DB_PASSWORD = ""  

DB_PORT = 3306  

DB_DATABASE = "tp_final"
```

#### **Tablas**

``` T_USERS = "users"  

T_PRODUCTS = "products"  

T_IMAGES = "images"  

T_CATEGORY = "category"  

T_EMPLOYEES = "employees"  

```
#### **Mail**
```
MAIL_SERVICE = "(servicio de mail)"  

MAIL_USER = "(mail)"  

MAIL_PASSWORD = "(password)"  

```
#### **Server**
```
URL_SERVER = "http://localhost"  

URL_PORT = 3000

```

