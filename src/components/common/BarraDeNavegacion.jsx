import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const BarraDeNavegacion = () => {
  return (
    <header>
      <Navbar expand="lg" className="bg-danger-subtle roboto-intermedio">
        <Container>
          <Link className="gradiente navbar-brand " to={"/"}>
            <i className="bi bi-magic"> </i>
            RECETAS
          </Link>
          <Nav className="ms-auto">
            <NavLink end className="nav-link" to={"/administrar"}>
              <i className="bi bi-plus-lg"></i> Nueva Receta
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default BarraDeNavegacion;
