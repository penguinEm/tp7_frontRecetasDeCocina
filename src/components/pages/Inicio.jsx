import { Container } from "react-bootstrap";
import ContenedorCards from "./ContenedorCards";
import { useEffect, useState } from "react";
import { obtenerRecetas } from "../../helpers/queries";
import { ColorRing } from "react-loader-spinner";
import Swal from "sweetalert2";

const Inicio = () => {
  /* VARIABLES GLOBALES --------------------------------------------------------------------------------------------------------- */
  const [recetas, setRecetas] = useState([]);
  const [respuesServidor, setRespuestaServidor] = useState(false);

  /* FUNCIONES          --------------------------------------------------------------------------------------------------------- */
  useEffect(() => {
    cargarRecetasEnInicio();
  }, []);

  const cargarRecetasEnInicio = async () => {
    try {
      const respuesta = await obtenerRecetas();
      if (respuesta.status === 200) {
        const recetas = await respuesta.json();
        setRecetas(recetas);
        setRespuestaServidor(true);
      } else {
        console.error("Error al obtener las recetas:");
      }
    } catch (error) {
      console.error("Error de red al obtener las recetas:");
    }
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
        {respuesServidor === true ? (
          <ContenedorCards recetas={recetas}></ContenedorCards>
        ) : (
          <div className="text-center">
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="color-ring-loading"
              wrapperStyle={{}}
              wrapperClass="color-ring-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
          </div>
        )}
      </Container>
    </main>
  );
};

export default Inicio;
