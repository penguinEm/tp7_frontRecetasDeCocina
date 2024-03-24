import React from "react";
import CardReceta from "./receta/CardReceta";

const ContenedorCards = ({recetas}) => {
  return (
    <article className="row justify-content-center justify-content-sm-center justify-content-lg-between justify-content-md-between">
      {
        recetas.map((receta)=> <CardReceta key={receta.id} receta={receta}></CardReceta>)
      }
      
    </article>
  );
};

export default ContenedorCards;
