# Entrega Final Backend 2

Este proyecto es una API RESTful desarrollada con Node.js, Express y MongoDB. Implementa funcionalidades de autenticación, manejo de usuarios, productos, carritos de compras y tickets.

## Tabla de Contenidos

- [Instalación](#instalación)
- [Configuración](#configuración)
- [Ejecución](#ejecución)
- [Rutas Principales](#rutas-principales)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Estructura del Proyecto](#estructura-del-proyecto)

## Instalación

1. Clona este repositorio:
   ```bash
   git clone <https://github.com/ManuelManodes/EntregaFinalBackend2.git>
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd EntregaFinalBackend2
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```

## Configuración

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables de entorno:

```env
JWT_SECRET=manodes3000
COOKIE_SIGNATURE=cookieSignature
MONGODB_URI=mongodb+srv://manuelmanodescofre:Manodes3000@clusterproyectofinalman.f0jes.mongodb.net/?retryWrites=true&w=majority&appName=ClusterProyectoFinalManuelManodes
PORT=3000
```

## Ejecución

### Modo Desarrollo
Ejecuta el servidor con `nodemon`:
```bash
npm run dev
```

### Modo Producción
Ejecuta el servidor con Node.js:
```bash
npm start
```

El servidor estará disponible en `http://localhost:3000`.

## Rutas Principales

### Autenticación
- **POST** `/auth/login`: Inicia sesión y genera un token JWT.

### Usuarios
- **GET** `/users/current`: Obtiene la información del usuario actual.
- **POST** `/users`: Crea un nuevo usuario (solo administradores).

### Productos
- **POST** `/products`: Crea un nuevo producto (solo administradores).

### Carritos
- **POST** `/carts`: Crea un nuevo carrito (solo usuarios).
- **POST** `/carts/:cid/products`: Agrega un producto al carrito (solo usuarios).
- **POST** `/carts/:cid/purchase`: Finaliza la compra de un carrito.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript.
- **Express**: Framework para construir aplicaciones web.
- **MongoDB**: Base de datos NoSQL.
- **Mongoose**: ODM para MongoDB.
- **Passport**: Middleware para autenticación.
- **JWT**: Tokens para autenticación.
- **Handlebars**: Motor de plantillas para vistas.

## Estructura del Proyecto

```plaintext
.env
.gitignore
package.json
README.md
src/
  config/
    passport.js
  daos/
    cart.dao.js
    product.dao.js
    ticket.dao.js
    user.dao.js
  database/
    index.js
  dtos/
    cart.dto.js
    product.dto.js
    ticket.dto.js
    user.dto.js
  middlewares/
    auth.js
  models/
    cart.model.js
    product.model.js
    ticket.model.js
    user.model.js
  public/
    css/
  repositories/
    cart.repository.js
    product.repository.js
    ticket.repository.js
    user.repository.js
  routes/
    auth.routes.js
    carts.routes.js
    products.routes.js
    users.routes.js
  utils/
    index.js
  views/
    layouts/
      main.handlebars
    login.handlebars
    register.handlebars
    home.handlebars
    current.handlebars
```

## Contribución

Si deseas contribuir a este proyecto, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la licencia MIT.