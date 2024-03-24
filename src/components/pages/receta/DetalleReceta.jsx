import { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { obtenerReceta } from "../../../helpers/queries";
import Swal from "sweetalert2";

const DetalleReceta = () => {
  /* 1. VARIABLES GLOBALES ---------------------------------------------------------------------------------------- */
  const { id } = useParams();
  const [receta, setReceta] = useState({});

  /* 2. FUNCIONES -------------------------------------------------------------------------------------------------- */
  useEffect(() => {
    cargarDetalles();
  }, []);

  const cargarDetalles = async () => {
    try {
      const respuesta = await obtenerReceta(id);
      if (respuesta.status === 200) {
        const objetoReceta = await respuesta.json();
        setReceta(objetoReceta);
      } else {
        Swal.fire({
          title: "Ocurrió un error!",
          text: "Intente nuevamente más tarde",
          icon: "error",
        });
      }
    } catch (error) {
      console.log("Error al cargar detalles:");
      Swal.fire({
        title: "Ocurrió un error!",
        text: "Intente nuevamente más tarde",
        icon: "error",
      });
    }
  };

  /* 3. MAQUETADO Y LOGICA EXTRA ----------------------------------------------------------------------------------- */
  return (
    <Container fluid className="main mb-5 mt-3">
      <article className="d-flex flex-column flex-lg-row flex-md-row">
        <div className="my-4 ms-lg-3 px-3 contenedorTextDetalle  order-lg-1 order-md-2">
          <h1 className=" display-6 text-intermedio text-titulo text-shadow">
            {receta.nombreReceta}
          </h1>
          <h2 className="text-titulo fw-lighter border-bottom border-secondary-subtle pb-4 fs-5 ps-1">
            {receta.descripcion}
          </h2>
          <p className="text-parrafo fw-bolder">
            <span className="text-danger fw-bold text-decoration-underline">
              Ingredientes
            </span>{" "}
            {receta.ingredientes}
          </p>
          <p className="text-parrafo fw-bolder">
            <span className="text-danger fw-bold text-decoration-underline">
              Preparacion
            </span>{" "}
            {receta.preparacion}
          </p>
          <hr />
          <div className="d-flex align-items-center justify-content-between">
            <h4>
              <span className="text-danger">Precio: $</span>
              {receta.precio}
            </h4>
            <div>
              <Link className="btn btn-outline-danger me-3 px-4 botonResponsive" to="/">
                <i className="bi bi-arrow-counterclockwise"></i> <br></br>
                Inicio
              </Link>
              <Link className="btn btn-danger border-0" to="*">
                <i className="bi bi-cart-check-fill"></i> <br></br>
                Comprar
              </Link>
            </div>
          </div>
        </div>
        <div className="contenedorImgDetalle pt-md-5 mt-md-5 mt-lg-0 pt-lg-0 d-flex align-items-center">
          <Image
            src={receta.imagen}
            alt={receta.nombreReceta}
            className="rounded-2 img-fluid imgDetalle object-fit-cover"
          ></Image>
        </div>
      </article>
    </Container>
  );
};

export default DetalleReceta;
