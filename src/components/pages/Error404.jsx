import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import imgError404 from "../../assets/error404.jpg";

const Error404 = () => {
  return (
    <Container className="main text-center mt-5">
      <section className="mb-0">
        <div className="mb-3">
          <img
            src={imgError404}
            alt="Error 404"
            className="img-fluid imgError rounded-2"
          />
        </div>
        <div className="mt-5">
          <h1 className="text-intermedio">Vuelva mas tarde</h1>
          <div className="mb-5 ms-5">
            <Link className="btn btn-danger me-3 px-4" to="/">
              <i className="bi bi-arrow-counterclockwise">
                <br></br>
                Inicio
              </i>
            </Link>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Error404;
