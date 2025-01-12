# Backend Leyendas de Ecuador
Este proyecto es una aplicación basada en Node.js y MongoDB diseñada para gestionar colecciones de los puntajes del videojuego. Proporciona una interfaz RESTful que permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) en una base de datos MongoDB.

## Objetivo del Proyecto
El objetivo principal de este proyecto es ofrecer un sistema escalable y seguro que permita gestionar información del sistema de puntaje con facilidad.

## Características Principales

1. **Tecnología Moderna**: Implementado con Node.js y Express como base del servidor, junto con MongoDB como base de datos NoSQL.
2. **Controladores Estructurados**: Cada operación CRUD está manejada por controladores que encapsulan la lógica del negocio.
3. **Pruebas Automatizadas**: Utiliza Jest y Supertest para asegurar la calidad del código y la funcionalidad de la API.
4. **Configuración Segura**: Integra variables de entorno mediante un archivo `.env` para mantener las credenciales y configuraciones sensibles fuera del código fuente.

---

## Estructura del Proyecto

```plaintext
├── controllers
│   ├── CantuniaController.js
│   ├── FatherController.js
├── models
│   ├── Cantunia.js
│   ├── Father.js
├── routes
│   ├── routes.js
├── tests
│   ├── controllerTests.js
├── app.js
├── Dockerfile
├── index.js
├── .env
├── README.md
```

- **`controllers`**: Contiene la lógica para manejar las solicitudes HTTP y realizar operaciones CRUD.
- **`models`**: Define los esquemas de la base de datos MongoDB utilizando Mongoose.
- **`routes`**: Define las rutas de la API REST.
- **`tests`**: Incluye las pruebas automatizadas para garantizar la calidad del sistema.

## Configuración del Entorno

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- Node.js (v14 o superior)
- MongoDB Atlas (puede utilizar local)

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```plaintext
PORT=3900
MONGO_URI=mongodb+srv://<usuario>:<contraseña>@cluster0.mongodb.net/Cantunia?retryWrites=true&w=majority
```

## Instalación y Ejecución
1. **Clonar el repositorio**:

   ```bash
   git clone https://github.com/usuario/cantunia.git
   cd cantunia
   ```
2. **Instalar dependencias**:
    ```
    npm install
    npm i -g nodemon
    ```

3. **Ejecutar el servidor**:
    ```
    nodemon
    ```

4. **Sintaxis de código**:
    ```
    npm install eslint
    npx eslint .
    ```

5. **Análisis de Dependencias**:
    ```
    npm audit
    ```

4. **Pruebas Automatizadas**:
    ```
    npm install jest supertest
    npm test
    ```

---

## Documentación de la API con Swagger

Esta aplicación utiliza Swagger para generar una documentación interactiva de la API. Puedes acceder a la documentación visitando la siguiente URL después de iniciar el servidor:

```
http://localhost:3900/api-docs
```

La documentación proporciona una descripción detallada de cada endpoint, incluyendo los parámetros requeridos, respuestas y ejemplos.

---

## Endpoints de la API

| Método | Endpoint             | Descripción                              |
|--------|----------------------|------------------------------------------|
| POST   | `/api/cantunia/add`  | Agregar un nuevo registro               |
| DELETE | `/api/cantunia/:id`  | Eliminar un registro por ID             |
| GET    | `/api/cantunia/all`  | Obtener todos los registros             |
| POST   | `/api/father/add`    | Agregar un nuevo registro               |
| DELETE | `/api/father/:id`    | Eliminar un registro por ID             |
| GET    | `/api/father/all`    | Obtener todos los registros             |

---

## Pruebas Automatizadas

Se implementaron pruebas unitarias y funcionales utilizando Jest y Supertest. Estas pruebas garantizan que los controladores y la lógica de negocio funcionen correctamente.

## Contribuciones

Este proyecto es parte de una tesis universitaria, pero contribuciones externas son bienvenidas. Por favor, abre un issue o envía un pull request si deseas colaborar.

## Autores

**[Gustavo Guevara]**
**[Ismael Ordoñez]**
**[Erick Rosero]**
Ingeniería de Software
[Universidad de las Américas]

---

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](./LICENSE) para más detalles.
