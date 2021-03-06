import React from "react";
import PropTypes from "prop-types";

const Cita = ({
  cita: { mascota, propietario, fecha, hora, sintomas, id },
  eliminarCita,
}) => {
  return (
    <div className="cita">
      <p>
        Mascota: <span>{mascota}</span>
      </p>
      <p>
        Dueño: <span>{propietario}</span>
      </p>
      <p>
        Fecha: <span>{fecha}</span>
      </p>
      <p>
        Hora: <span>{hora}</span>
      </p>
      <p>
        Sintomas: <span>{sintomas}</span>
      </p>
      <button
        className="button eliminar u-full-width"
        onClick={() => eliminarCita(id)}
      >
        Eliminar Cita &times;
      </button>
    </div>
  );
};

// Documentar Props
Cita.propType = {
  cita: PropTypes.object.isRequired,
  eliminarCita: PropTypes.func.isRequired,
};

export default Cita;
