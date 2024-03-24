const URI_RECETAS = import.meta.env.VITE_API_PRODUCTOS;

/* GET de TODOS - los objetos de nuestro array en la fake api*/
export const obtenerRecetas = async () => {
  try {
    const respuesta = await fetch(URI_RECETAS);
    const recetas = await respuesta.json();
    return recetas;
  } catch (error) {
    console.log(error);
  }
};

/* GET de para traer 1 - receta de la api */
export const obtenerReceta = async (id) => {
  try {
    const respuesta = await fetch(`${URI_RECETAS}/${id}`);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

/* POST - para crear una nueva receta y mandarla a db.json */

export const crearRecetaAPI = async (nuevaReceta) => {
  try {
    const respuesta = await fetch(URI_RECETAS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevaReceta),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

/* DELETE - para borrar una receta del db.json a traves de su id */

export const borrarRecetaApi = async (id) => {
  try {
    const respuesta = await fetch(`${URI_RECETAS}/${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

/* PUT - para editar una receta a traves de su id */
export const editarRecetaApi = async (id, receta) => {
  try {
    const respuesta = await fetch(`${URI_RECETAS}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(receta),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
