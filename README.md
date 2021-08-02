# E-fligh Web

* Signin - Signup (Autenticación mediante correo electrónico).
* Sitio e-commerce / ruta admin para crear, editar y eliminar productos y empleados (sólo usuarios autorizados).

# Instalar dependencias

*npm install:
- express
- express-session
- hbs
- dotenv
- multer
- mysql
- nodemailer
- nodemon
- sha1
- util
- uuid 
- @hapi/joi

# Server en localhost: 3000

Ejecutar XAMPP (descarga en https://www.apachefriends.org/es/download.html), en el panel de control activar los servicios mysql y Apache.
Importar la base de datos.
Ejecutar nodemon npm start

(Nota: para utilizar el servicio de envio de mail en el registro cambiar los datos del .env correspondientes a su mail -service, user y password-).
