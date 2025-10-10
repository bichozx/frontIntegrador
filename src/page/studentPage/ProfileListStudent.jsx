import React, { useState } from 'react'

import { TableProfileStudent } from '../../component/student/TableProfileStudent';

export const ProfileListStudent = () => {
  const [search, setSearch] = useState('');
  const [estudiantes, setEstudiantes] = useState([
    {
      id: 1,
      nombre: 'Alan Brito',
      institucion: 'Colegio Los Alamos',
      anio: 2023,
      promedio: 4.5,
      estado: 'Completo',
    },
    {
      id: 2,
      nombre: 'Zoyla Vaca',
      institucion: 'Colegio Las Violetas',
      anio: 2023,
      promedio: 4.2,
      estado: 'Pendiente',
    },
  ]);

  const handleEdit = (id) => {
    console.log('Editar HV', id);
  };

  const handleDelete = (id) => {
    console.log('Eliminar HV', id);
  };

  const handleView = (id) => {
    console.log('Ver HV', id);
  };

  const filteredEstudiantes = estudiantes.filter((e) =>
    e.nombre.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <TableProfileStudent
        search={search}
        setSearch={setSearch}
        setEstudiantes={setEstudiantes}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleView={handleView}
        filteredEstudiantes={filteredEstudiantes}
      />
    </>
  )
}
