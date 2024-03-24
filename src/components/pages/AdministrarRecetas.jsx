import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemTablaReceta from "./receta/ItemTablaReceta";
import { useEffect, useState } from "react";
import { obtenerRecetas } from "../../helpers/queries";

const AdministrarRecetas = () => {
  /* VARIABLES GLOBALES -------------------------------------------------------------------------------------------------- */
  const [recetas, setRecetas] = useState([]);

  /* FUNCIONES -------------------------------------------------------------------------------------------------------------- */
  useEffect(() => {
    cargarRecetasEnAdmin();
  }, []);

  const cargarRecetasEnAdmin = async () => {
    const respuesta = await obtenerRecetas();
    setRecetas(respuesta);
  };

  /* MAQUETADO Y LOG EXT ------------------------------------------------------------------------------------------------------ */
  return (
    <main className="main">
      <Container className="">
        <article className="d-flex justify-content-between align-items-center mt-5 border-bottom border-danger-subtle">
          <h1 className="text-titulo text-grisOscuro">Recetas</h1>
          <div>
            <Link className="btn btn-primary" to={"/crearReceta"}>
              <i className="bi bi-file-earmark-plus"></i>
            </Link>
          </div>
        </article>
        <article>
          <div className="table-responsive">
            <Table striped bordered hover className="mb-5 mt-3">
              <thead className="text-center">
                <tr>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>URL de la imagen</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              <tbody>
                {recetas.map((receta) => (
                  <ItemTablaReceta key={receta.id} receta={receta} setRecetas={setRecetas}></ItemTablaReceta>
                ))}
              </tbody>
            </Table>
          </div>
        </article>
      </Container>
    </main>
  );
};

export default AdministrarRecetas;
