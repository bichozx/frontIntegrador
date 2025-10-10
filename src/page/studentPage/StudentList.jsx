import React, { useState } from 'react';

import { TableStudent } from '../../component/student/TableStudent';

export const StudentList = () => {
   const [students] = useState([
    {
      id: 1,
      nombre: "Alan",
      apellido: "Brito",
      email: "alanbrito@gmail.com",
      celular: "323399999",
      direccion: "Calle ciega 123",
      grado: "10°",
    },
    {
      id: 2,
      nombre: "Zoyla",
      apellido: "Vaca",
      email: "zoylavaca@gmail.com",
      celular: "322131444",
      direccion: "Cra no se meta 12",
      grado: "11°",
    },
  ]);

  const handleEdit = (id) => {
    console.log("Editar estudiante:", id);
  };

  const handleDelete = (id) => {
    console.log("Eliminar estudiante:", id);
  };

  const handleView = (id) => {
    console.log("Ver estudiante:", id);
  };
  return (
    <>
      <TableStudent 
        students={students}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleView={handleView}
      />
    </>
  );
};
