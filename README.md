# E-fligh Web  

![screenshot_E-fligt Web](./public/images/Screenshot.png)

* E-commerce site. Admin path to create, edit, delete products and employees (only authorized users, set in the database with admin = 1).

* Signin - Signup (Authentication via email).

* You will receive a confirmation email of your purchase.


## Install
```
npm install
```
## Run the app

1. Run XAMPP ([XAMPP download](https://www.apachefriends.org/es/download.html)) 
  
2. In the control panel activate the mysql and Apache services.

3. Import the database (tp_final.sql).

4. Execute `` npm start``.

5. Server in localhost:3000 

### Environment Variables:

#### **Database**
```
DB_HOST = "localhost"  

DB_USER = "root"  

DB_PASSWORD = ""  

DB_PORT = 3306  

DB_DATABASE = "tp_final"
```

#### **Tables**

``` T_USERS = "users"  

T_PRODUCTS = "products"  

T_IMAGES = "images"  

T_CATEGORY = "category"  

T_EMPLOYEES = "employees"  

```
#### **Mail**
```
MAIL_SERVICE = "(mail service)"  

MAIL_USER = "(mail)"  

MAIL_PASSWORD = "(password)"  

```
#### **Server**
```
URL_SERVER = "http://localhost"  

URL_PORT = 3000

```

