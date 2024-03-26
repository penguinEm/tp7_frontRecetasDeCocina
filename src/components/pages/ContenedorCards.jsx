import React from "react";
import CardReceta from "./receta/CardReceta";
import { Link } from "react-router-dom";
import imgSinProductos from "../../assets/src/assets/sinProductos.png";

const ContenedorCards = ({ recetas }) => {
  return (
    <>
      {recetas.length !== 0 ? (
        <article className="row justify-content-center justify-content-sm-center justify-content-lg-between justify-content-md-between">
          {recetas.map((receta) => (
            <CardReceta key={receta._id} receta={receta}></CardReceta>
          ))}
        </article>
      ) : (
        <div className="text-center">
          <img
            src={imgSinProductos}
            alt="Imagen que indica que el sitio esta sin productos"
            className="img-fluid imgError rounded-2"
          />
          <Link
            className="btn btn-outline-danger mt-3 nav-link mb-3 d-inline-block"
            to={"/crearReceta"}
          >
            + NUEVA RECETA
          </Link>
        </div>
      )}
    </>
  );
};

export default ContenedorCards;
