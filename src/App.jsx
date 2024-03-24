import { BrowserRouter, Route, Routes } from "react-router-dom";
import BarraDeNavegacion from "./components/common/BarraDeNavegacion";
import Footer from "./components/common/Footer";
import Inicio from "./components/pages/Inicio";
import AdministrarRecetas from "./components/pages/AdministrarRecetas";
import FormularioCrear from "./components/pages/receta/FormularioCrear";
import DetalleReceta from "./components/pages/receta/DetalleReceta";
import Error404 from "./components/pages/Error404";

function App() {
  return (
    <BrowserRouter>
      <BarraDeNavegacion></BarraDeNavegacion>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route
          exact
          path="/administrar"
          element={<AdministrarRecetas></AdministrarRecetas>}
        ></Route>
        <Route
          exact
          path="/crearReceta"
          element={
            <FormularioCrear
              titulo="Nueva Receta"
              textoBoton="Crear Receta"
              crear={true}
            ></FormularioCrear>
          }
        ></Route>
        <Route
          exact
          path="/editarReceta/:id"
          element={
            <FormularioCrear
              titulo="Editar receta"
              crear={false}
              textoBoton="Editar Receta"
            ></FormularioCrear>
          }
        ></Route>
        <Route
          exact
          path="/detalleReceta/:id"
          element={<DetalleReceta></DetalleReceta>}
        ></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
