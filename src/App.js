import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

function App() {
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));

  if (!citasIniciales) {
    citasIniciales = [];
  }

  // State par almacenar las citas
  const [citas, guardarCitas] = useState(citasIniciales);

  // Use Effect para Realizar ciertas operaciones cuando el state cambia
  useEffect(() => {
    if (citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(citas));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [citas, citasIniciales]);

  // Función que toma las citas
  const crearCita = (cita) => {
    guardarCitas([...citas, cita]);
  };

  // Función que elimina una cita por su id
  const eliminarCita = (id) => {
    const citasActualizadas = citas.filter((cita) => cita.id !== id);
    guardarCitas(citasActualizadas);
  };

  const titulo = citas.length ? "Administra tus Citas" : "No Hay Citas";

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map((cita) => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
