import React, { useState } from 'react';

import { StudentWelfare } from '../../component/studentWelfare/StudentWelfare';

export const StudentWelfarePage = () => {
  const [formData, setFormData] = useState({
    estudiante: '',
    tipoCaso: '',
    fechaReporte: '',
    estado: 'activo',
    descripcion: '',
    acciones: '',
    observaciones: '',
    proximosPasos: '',
    fechaSeguimiento: '',
    notificarFamilia: false,
  });

  const [selectedStudent, setSelectedStudent] = useState(null);

  // Datos estáticos (luego se reemplazan por los que lleguen de la API)
  const estudiantes = [
    {
      id: 1,
      nombre: 'Alan Brito',
      grado: '10°',
      acudiente: 'Carlos Brito',
      telefono: '3012345678',
    },
    {
      id: 2,
      nombre: 'Zoyla Vaca',
      grado: '11°',
      acudiente: 'Lucía Vaca',
      telefono: '3009876543',
    },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleStudentSelect = (e) => {
    const selected = estudiantes.find(
      (est) => est.id === parseInt(e.target.value)
    );
    setFormData({ ...formData, estudiante: e.target.value });
    setSelectedStudent(selected || null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos registrados:', formData);
    alert('Caso de bienestar registrado correctamente (modo estático).');
  };
  return (
    <>
      <StudentWelfare
        selectedStudent={selectedStudent}
        estudiantes={estudiantes}
        handleChange={handleChange}
        handleStudentSelect={handleStudentSelect}
        handleSubmit={handleSubmit}
        formData={formData}
      />
    </>
  );
};
