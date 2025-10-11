import React, { useState } from 'react';

import { CreateFamiliar } from '../../component/family/CreateFamiliar';

export const FamilyPage = () => {
  const [formData, setFormData] = useState({
    estudiante: '',
    nombre: '',
    apellido: '',
    parentesco: '',
    ocupacion: '',
    telefono: '',
    email: '',
    direccion: '',
    acudiente: false,
    emergencia: false,
    observaciones: '',
  });
    console.log('🚀 ~ FamilyPage ~ FamilyPage.estudiante:', FamilyPage.estudiante)

  // Manejo de cambios
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === 'checkbox' ? checked : value,
    });
  };
  

  // Envío del formulario (simulado)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del familiar:', formData);

    // POST a la API
    
    alert('Familiar creado exitosamente ✅ (modo estático)');
  };

  return (
    <>
      <CreateFamiliar handleChange={handleChange} handleSubmit={handleSubmit} />
    </>
  );
};
