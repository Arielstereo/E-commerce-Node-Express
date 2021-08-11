# E-fligh Web

* Signin - Signup (Autenticación mediante correo electrónico).
* Sitio e-commerce / ruta admin para crear, editar y eliminar productos y empleados (sólo usuarios autorizados, seteados en la base de datos con admin=1).
* Recibirás un mail de confirmación de tu compra.

# Instalación

- npm install

# Server en localhost: 3000

Ejecutar XAMPP (descarga en https://www.apachefriends.org/es/download.html), en el panel de control activar los servicios mysql y Apache.
Importar la base de datos.
Ejecutar nodemon npm start

# Variables de entorno

- Base de datos

DB_HOST = "localhost"
DB_USER = "root"
DB_PASSWORD = ""
DB_PORT = 3306
DB_DATABASE = "tp_final"

- Tablas

T_USERS = "users"
T_PRODUCTS = "products"
T_IMAGES = "images"
T_CATEGORY = "category"
T_EMPLOYEES = "employees"

- Mail

MAIL_SERVICE = "(servicio de mail)"
MAIL_USER = "(mail)"
MAIL_PASSWORD = "(password)"

- Server

URL_SERVER = "http://localhost"
URL_PORT = 3000



