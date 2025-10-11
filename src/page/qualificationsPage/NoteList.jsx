import React, { useState } from 'react';

import { TableNote } from '../../component/qualifications/TableNote';

export const NoteList = () => {
  const [filtros, setFiltros] = useState({
    periodo: '',
    asignatura: '',
    grado: '',
    estado: '',
    busqueda: '',
  });

  // Datos estáticos (luego se reemplazarán por la API)
  const notas = [
    {
      id: 1,
      estudiante: 'Alan Brito',
      asignatura: 'Matemáticas',
      periodo: 'Trimestre 1',
      nota1: 4.5,
      nota2: 4.2,
      nota3: 4.8,
      promedio: 4.5,
      estado: 'Aprobado',
    },
    {
      id: 2,
      estudiante: 'Alan Brito',
      asignatura: 'Lenguaje',
      periodo: 'Trimestre 1',
      nota1: 3.8,
      nota2: 4.0,
      nota3: 4.2,
      promedio: 4.0,
      estado: 'Aprobado',
    },
    {
      id: 3,
      estudiante: 'Zoyla Vaca',
      asignatura: 'Matemáticas',
      periodo: 'Trimestre 1',
      nota1: 2.8,
      nota2: 3.0,
      nota3: 2.5,
      promedio: 2.8,
      estado: 'Reprobado',
    },
  ];

  const handleChange = (e) => {
    setFiltros({ ...filtros, [e.target.name]: e.target.value });
  };

  const notasFiltradas = notas.filter((n) =>
    n.estudiante.toLowerCase().includes(filtros.busqueda.toLowerCase())
  );

  return (
    <>
      <TableNote
        filtros={filtros}
        handleChange={handleChange}
        notasFiltradas={notasFiltradas}
      />
    </>
  );
};
