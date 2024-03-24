import { Container, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {
  crearRecetaAPI,
  editarRecetaApi,
  obtenerReceta,
} from "../../../helpers/queries";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const FormularioCrear = ({ crear, titulo, textoBoton }) => {
  /* 1. VARIABLES GLOBALES ----------------------------------------------------------------------------------------------------- */
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const { id } = useParams();
  const redireccionar = useNavigate();

  /* 2. FUNCIONES ----------------------------------------------------------------------------------------------------- */
  const recetaValida = async (receta) => {
    if (crear === false) {
      /* Logica para edit */
      const respuesta = await editarRecetaApi(id, receta);
      if (respuesta.status === 200) {
        Swal.fire({
          title: `Buen trabajo!`,
          text: `Su receta: ${receta.nombreReceta} ha sido editada correctamente`,
          icon: "success",
        });
        redireccionar("/administrar");
      } else {
        Swal.fire({
          title: "Ops!",
          text: `Se produjo un error intente editar su receta mas tarde`,
          icon: "error",
        });
      }
    } else {
      /* Logica para crear */
      const crearReceta = await crearRecetaAPI(receta);
      if (crearReceta.status === 201) {
        Swal.fire({
          title: "Buen trabajo!",
          text: `Su receta: ${receta.nombreReceta} ha sido añadida al inicio`,
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Ops!",
          text: `Se produjo un error intente añadir su receta mas tarde`,
          icon: "error",
        });
      }
      reset();
    }
  };

  useEffect(() => {
    if (crear === false) {
      cargarFormularioEditar();
    }
  }, []);

  const cargarFormularioEditar = async () => {
    const respuesta = await obtenerReceta(id);
    if (respuesta.status === 200) {
      const objetoReceta = await respuesta.json();
      setValue("nombreReceta", objetoReceta.nombreReceta);
      setValue("precio", objetoReceta.precio);
      setValue("imagen", objetoReceta.imagen);
      setValue("descripcion", objetoReceta.descripcion);
      setValue("ingredientes", objetoReceta.ingredientes);
      setValue("preparacion", objetoReceta.preparacion);
    } else {
      Swal.fire({
        title: "Ops!",
        text: `Se produjo un error intente editar mas tarde`,
        icon: "error",
      });
    }
  };

  /* 3. MAQUETADO Y LOG ----------------------------------------------------------------------------------------------------- */
  return (
    <Container className=" main px-lg-5 py-5 text-intermedio">
      <h1 className="display-1 mx-5 pb-4 border-bottom border-danger-subtle text-titulo">
        {titulo}
      </h1>
      <Form
        className=" rounded-2 px-lg-5 pt-3"
        onSubmit={handleSubmit(recetaValida)}
      >
        {/* nombreReceta */}
        <Form.Group
          className="mb-3 border border-1 p-1 border-danger-subtle rounded-1"
          controlId="receta"
        >
          <Form.Label>Nombre de la Receta*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Mazamorra"
            className="color-inputs"
            {...register("nombreReceta", {
              required: "El nombre de la receta es obligatorio",
              minLength: {
                value: 2,
                message:
                  "El nombre de la receta debe tener como mínimo 2 caracteres",
              },
              maxLength: {
                value: 40,
                message:
                  "El nombre de la receta debe tener como máximo 40 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger mt-1">
            {errors.nombreReceta?.message}
          </Form.Text>
        </Form.Group>

        {/* precio */}
        <Form.Group
          className="mb-3 border border-1 p-1 border-danger-subtle rounded-1"
          controlId="precio"
        >
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 750"
            className="color-inputs"
            {...register("precio", {
              required: "El precio es un campo obligatorio",
              min: {
                value: 50,
                message: "El precio mínimo debe ser de $50",
              },
              max: {
                value: 10000,
                message: "El precio máximo debe ser de $10.000",
              },
            })}
          />
          <Form.Text className="text-danger mt-1">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>

        {/* imagen */}
        <Form.Group
          className="mb-3 border border-1 p-1 border-danger-subtle rounded-1"
          controlId="imagen"
        >
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://images.pexels.com/photos/3892469/pexels-photo-3892469.jpeg"
            className="color-inputs"
            {...register("imagen", {
              required:
                "El campo para ingresar la URL de una imagen es obligatorio",
              pattern: {
                value: /^(https?:\/\/.*\.(?:jpg|jpeg|png|gif))$/i,
                message:
                  "Debe ingresar una URL válida con una extensión de imagen (jpg, jpeg, png, gif)",
              },
            })}
          />
          <Form.Text className="text-danger mt-1">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>

        {/* descripcion */}
        <Form.Group
          className="mb-3 border border-1 p-1 border-danger-subtle rounded-1"
          controlId="descripcion"
        >
          <Form.Label>Descripcion*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Postre tradicional delicioso"
            className="color-inputs"
            {...register("descripcion", {
              required: "La descripcion breve de la receta es obligatorio",
              minLength: {
                value: 3,
                message:
                  "Debe ingresar como mínimo 3 caracteres para la descripcion breve",
              },
              maxLength: {
                value: 35,
                message:
                  "Debe ingresar como máximo 35 caracteres para la descripcion breve",
              },
            })}
          />
          <Form.Text className="text-danger mt-1">
            {errors.descripcion?.message}
          </Form.Text>
        </Form.Group>

        {/* ingredientesPreparacion */}
        <Form.Group
          className="mb-3 border border-1 p-1 border-danger-subtle rounded-1"
          controlId="ingredientes"
        >
          <Form.Label>Ingredientes*</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Ej: 2 tazas de pan rallado, 2 tazas de leche, 3 huevos, 1 taza de azúcar, 1 cucharadita de esencia de vainilla, frutas confitadas al gusto"
            className="formularioTextArea color-inputs resize"
            {...register("ingredientes", {
              required: "Detallar los ingredientes es obligatorio",
              minLength: {
                value: 10,
                message:
                  "Debe ingresar como mínimo 10 caracteres para detallar los ingrdientes",
              },
              maxLength: {
                value: 500,
                message:
                  "Debe ingresar como máximo 500 caracteres para detallar los ingredientes",
              },
            })}
          />
          <Form.Text className="text-danger mt-1">
            {errors.ingredientes?.message}
          </Form.Text>
        </Form.Group>

        {/* preparacion */}
        <Form.Group
          className="mb-3 border border-1 p-1 border-danger-subtle rounded-1"
          controlId="preparacion"
        >
          <Form.Label>Preparación*</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Ej: Cocinar el maíz morado con canela y clavos de olor. Agregar azúcar y mezclar. Incorporar frutas picadas. Cocinar a fuego lento hasta obtener una consistencia espesa y deliciosa"
            className="formularioTextArea color-inputs resize"
            {...register("preparacion", {
              required: "Detallar los pasos de la preparación es obligatorio",
              minLength: {
                value: 10,
                message:
                  "Debe ingresar como mínimo 10 caracteres para detallar los pasos de la preparación",
              },
              maxLength: {
                value: 500,
                message:
                  "Debe ingresar como máximo 500 caracteres para detallar los pasos de la preparación",
              },
            })}
          />
          <Form.Text className="text-danger mt-1">
            {errors.preparacion?.message}
          </Form.Text>
        </Form.Group>
        <div className="text-end">
          <Button type="submit" variant="danger" className="border-0">
            {textoBoton}
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default FormularioCrear;
