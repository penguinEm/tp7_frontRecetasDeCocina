import React from "react";
import CardReceta from "./receta/CardReceta";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";


const ContenedorCards = ({ recetas }) => {
  return (
    <>
      {recetas.length === 0 ? (
        <div className="text-center">
        <Image src="public/Dbvacio.png" fluid>
        </Image>
        <Link className="btn btn-outline-danger mt-3 nav-link mb-3 d-inline-block" to={"/crearReceta"}>+ NUEVA RECETA</Link>
        </div>
        
      ) : (
        <article className="row justify-content-center justify-content-sm-center justify-content-lg-between justify-content-md-between">
          {recetas.map((receta) => (
            <CardReceta key={receta._id} receta={receta}></CardReceta>
          ))}
        </article>
      )}
    </>
  );
};

export default ContenedorCards;
