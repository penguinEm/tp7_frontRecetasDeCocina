import { Container } from "react-bootstrap";
import ContenedorCards from "./ContenedorCards";
import { useEffect, useState } from "react";
import { obtenerRecetas } from "../../helpers/queries";

const Inicio = () => {
  /* VARIABLES GLOBALES --------------------------------------------------------------------------------------------------------- */
  const [recetas, setRecetas] = useState([]);

  /* FUNCIONES          --------------------------------------------------------------------------------------------------------- */
  useEffect(() => {
    cargarRecetasEnInicio();
  }, []);

  const cargarRecetasEnInicio = async () => {
    const respuesta = await obtenerRecetas();
    setRecetas(respuesta);
  };

  /* MAQUETADO Y LOG EXTRA --------------------------------------------------------------------------------------------------------- */
  return (
    <main className="main">
      <Container>
        <article>
          <h1 className="my-5 text-titulo text-grisOscuro display-4 border-bottom border-danger-subtle">
            Recetas de Cocina
          </h1>
        </article>
        <ContenedorCards recetas={recetas}></ContenedorCards>
      </Container>
    </main>
  );
};

export default Inicio;
