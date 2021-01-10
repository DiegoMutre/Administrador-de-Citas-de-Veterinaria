import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

const Formulario = ({ crearCita }) => {
  // Crear State de Citas
  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  // Función que se ejecuta cada que el usuario escribe en un input
  function actualizarState(e) {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  }

  // State de alerta de error
  const [error, actualizarError] = useState(false);

  // Extraer los valores del state actual
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  // Al hacer submit al formulario
  const submitCita = (e) => {
    e.preventDefault();

    // Validar
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      actualizarError(true);
      return;
    }

    // Generar un ID único
    cita.id = uuidv4();

    // Remover mensaje de error
    actualizarError(false);

    // Crear la Cita
    crearCita(cita);

    // Reiniciar el formulario
    actualizarCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <Fragment>
      <h2>Crear Cita</h2>
      {error ? (
        <p className="alerta-error">Todos los Campos Son Obligatorios</p>
      ) : null}
      <form onSubmit={submitCita}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          placeholder="Nombre Mascota"
          className="u-full-width"
          onChange={actualizarState}
          value={mascota}
        />
        <label>Dueño de la Mascota</label>
        <input
          type="text"
          name="propietario"
          placeholder="Nombre Dueño de la Mascota"
          className="u-full-width"
          onChange={actualizarState}
          value={propietario}
        />
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />
        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />
        <label>Sintomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

// Documentar Props
Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired,
};

export default Formulario;
