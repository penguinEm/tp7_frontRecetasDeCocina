import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardReceta = ({ receta }) => {
  return (
    <Card className="cardDimensiones px-0 mb-4 mt-3 cardEfectos ">
      <Card.Img
        variant="top"
        alt={receta.nombreReceta}
        src={receta.imagen}
        className="img-fluid cardImgDimensiones imgDetalle"
      />
      <Card.Body>
        <Card.Title className="text-intermedio text-grisOscuro ms-2">
          {receta.nombreReceta}
        </Card.Title>
        <Card.Text className="cardScroll text-parrafo fw-bolder">
          {receta.descripcion}
        </Card.Text>
        <Card.Text className="fw-bold text-parrafo py-0">
          <span className="text-danger text-decoration-underline">
            Precio $
          </span>{" "}
          {receta.precio}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-end">
        <Link className="border-0 btn btn-danger" to={`/detalleReceta/${receta.id}`}>
          Ver más
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default CardReceta;
