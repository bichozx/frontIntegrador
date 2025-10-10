import React, { useState } from 'react';

import { CreateHVStudent } from '../../component/student/CreateHVStudent';

export const StudentProfile = () => {
  const [formData, setFormData] = useState({
    estudiante: '',
    institucionAnterior: '',
    anioGraduacion: '',
    promedioAnterior: '',
    conductaAnterior: '',
    logros: '',
    actividades: '',
    observaciones: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
    alert('Hoja de vida creada correctamente ✅');
  };
  return (
    <>
      <CreateHVStudent
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
};
