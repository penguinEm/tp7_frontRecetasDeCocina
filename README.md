
# CRUD en REACT de recetas de cocina 
![CRUD](<crud react.png>)

Este proyecto es una aplicación web desarrollada con React que permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre recetas de cocina. A continuación, se detallan las tecnologías y herramientas utilizadas:

- **Bootstrap y React-Bootstrap:** Utilizados para estilizar y estructurar la interfaz de usuario de la aplicación de manera eficiente y responsiva.

- **Bootstrap - icon:** Utilizados para estilizar y estructurar la interfaz de usuario de la aplicación de manera eficiente y responsiva. - [Documentación React-bootstrap](https://react-bootstrap.github.io/docs/getting-started/introduction)

- **FontAwesome:** Se incorporó FontAwesome para agregar iconos a la interfaz de usuario, proporcionando una experiencia visual mejorada. - [Documentación React-Fontawesome](https://fontawesome.com/v5/docs/web/use-with/react)

- **FAK API de :** La aplicación consume la API de Newsdata.io para obtener información actualizada y relevante sobre noticias. Puedes encontrar más detalles sobre la API en [json-server](https://github.com/typicode/json-server).

- **React:** El proyecto se basa en el framework de trabajo React, permitiendo un desarrollo eficiente y una interfaz de usuario dinámica.

- **SwetAlert** Se integra SweetAlert2 para mostrar mensajes y alertas interactivas en la interfaz. [Sweetlaert2](https://sweetalert2.github.io/)

- **React-hook-form** Utilizado para gestionar y validar formularios de manera eficiente. [react-hook-form](https://react-hook-form.com/get-started)

- **Reactrouter** Integrado para gestionar la navegación entre las distintas vistas de la aplicación. [Reactrouter](https://reactrouter.com/en/main/start/tutorial)

## Características Principales

-   Creación, Edición y Eliminación de Recetas: Permite realizar operaciones CRUD sobre recetas de cocina, proporcionando una gestión completa.

-   Visualización de Recetas: Las recetas se presentan en tarjetas organizadas de manera atractiva.

-   Enlace a Detalles de Receta: Cada tarjeta de receta incluye un botón "Ver más" que enlaza a los detalles completos de la receta..

## DEMO:

https://tp6ejercicio14.netlify.app/

- **Variable de entorno (.env)**

```
VITE_API_PRODUCTOS=http://localhost:3000/recetas
```

- **Levantar la fake api**

```dotnetcli
npx json-server db.json
```
