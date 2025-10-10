import React, { useState } from 'react'

import { CreateStudent } from '../../component/student/CreateStudent'

export const StudentPage = () => {
    const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    celular: "",
    grado: "",
    direccionPrincipal: "",
    direccionSecundaria: "",
    infoAcademica: "",
  });

    const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Estudiante creado:", formData);
    // Aquí puedes agregar la llamada al backend
  };
  return (
    <>
      <CreateStudent
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  )
}
