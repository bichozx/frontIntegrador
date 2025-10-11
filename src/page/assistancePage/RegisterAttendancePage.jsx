import React, { useState } from 'react';

import { RegisterAttendace } from '../../component/assietance/RegisterAttendace';

export const RegisterAttendancePage = () => {
  const [asistencia, setAsistencia] = useState({
    estudiante: '',
    asignatura: '',
    fecha: '',
    hora: '',
    estado: 'presente',
    minutosTardanza: '',
    tipoJustificacion: '',
    observaciones: '',
    notificarFamilia: false,
  });

  const [mostrarTardanza, setMostrarTardanza] = useState(false);
  const [mostrarJustificacion, setMostrarJustificacion] = useState(false);

  // Simulación de datos que luego vendrán del backend
  const estudiantes = [
    { id: 1, nombre: 'Alan Brito', grado: '10°' },
    { id: 2, nombre: 'Zoyla Vaca', grado: '11°' },
  ];

  const asignaturas = [
    { id: 'matematicas', nombre: 'Matemáticas' },
    { id: 'lenguaje', nombre: 'Lenguaje' },
    { id: 'ciencias', nombre: 'Ciencias' },
    { id: 'sociales', nombre: 'Sociales' },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAsistencia({
      ...asistencia,
      [name]: type === 'checkbox' ? checked : value,
    });

    // Mostrar campos condicionales
    if (name === 'estado') {
      setMostrarTardanza(value === 'tardanza');
      setMostrarJustificacion(value === 'justificado');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', asistencia);
    alert('Asistencia registrada correctamente (modo estático)');
  };

  return (
    <>
      <RegisterAttendace
        mostrarTardanza={mostrarTardanza}
        mostrarJustificacion={mostrarJustificacion}
        estudiantes={estudiantes}
        asignaturas={asignaturas}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
};
