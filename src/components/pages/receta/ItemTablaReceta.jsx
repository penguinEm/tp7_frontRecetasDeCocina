import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarRecetaApi, obtenerRecetas } from "../../../helpers/queries";
import { Link } from "react-router-dom";

const ItemTablaReceta = ({ receta, setRecetas }) => {
  /* VARIABLES GLOBALES ------------------------------------------------------------------ */

  /* FUNCIONES ----------------------------------------------------------------------------- */

  const borrarReceta = () => {
    Swal.fire({
      html: `¿Estas seguro que deseas borrar la receta <span class="text-danger">${receta.nombreReceta}</span> ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarRecetaApi(receta._id);
        if (respuesta.status === 200) {
          const respuesta = await obtenerRecetas();
          const recetasActualizadas = await respuesta.json();
          setRecetas(recetasActualizadas);
          Swal.fire({
            title: "Borrado!",
            html: `Su receta: <span class="text-danger">${receta.nombreReceta}</span> ha sido borrada!`,
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Ops!",
            text: `Se produjo un error intente mas tarde`,
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <tr>
      {/* Producto nombre */}
      <td className="pt-5 text-center opciones-responsive">
        {receta.nombreReceta}
      </td>
      {/* Precio */}
      <td className="text-center pt-5 opciones-responsive">
        <span>$</span>
        {receta.precio}
      </td>
      {/* Url de la img */}
      <td className="text-center">
        <img
          src={receta.imagen}
          alt={receta.nombreReceta}
          className="tablaImagenDimensiones img-fluid img-thumbnail"
        />
      </td>
      {/* Opciones */}
      <td className="text-center pt-5 opciones-responsive">
        <Link
          className="me-1 btn btn-warning"
          to={`/editarReceta/${receta._id}`}
        >
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger" onClick={borrarReceta}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemTablaReceta;
