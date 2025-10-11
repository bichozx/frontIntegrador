import React, { useState } from 'react';

import { TableAttendace } from '../../component/assietance/TableAttendace';

export const ListAssistancePage = () => {
  const [search, setSearch] = useState('');
  const [filtros, setFiltros] = useState({
    fecha: '',
    grado: '',
    asignatura: '',
    estado: '',
  });

  // Datos estáticos (luego se reemplazan por datos de la API)
  const asistencias = [
    {
      id: 1,
      estudiante: 'Alan Brito',
      grado: '10°',
      asignatura: 'Matemáticas',
      fecha: '2024-03-15',
      hora: '08:00 AM',
      estado: 'Presente',
      observaciones: '-',
    },
    {
      id: 2,
      estudiante: 'Zoyla Vaca',
      grado: '11°',
      asignatura: 'Matemáticas',
      fecha: '2024-03-15',
      hora: '08:15 AM',
      estado: 'Tardanza',
      observaciones: 'Llegó 15 minutos tarde',
    },
    {
      id: 3,
      estudiante: 'Alan Brito',
      grado: '10°',
      asignatura: 'Lenguaje',
      fecha: '2024-03-16',
      hora: '10:00 AM',
      estado: 'Ausente',
      observaciones: 'Enfermedad',
    },
    {
      id: 4,
      estudiante: 'Zoyla Vaca',
      grado: '11°',
      asignatura: 'Ciencias',
      fecha: '2024-03-17',
      hora: '09:00 AM',
      estado: 'Justificado',
      observaciones: 'Cita médica',
    },
  ];

  const getBadgeClass = (estado) => {
    switch (estado) {
      case 'Presente':
        return 'badge badge-success';
      case 'Ausente':
        return 'badge badge-danger';
      case 'Tardanza':
        return 'badge badge-warning';
      case 'Justificado':
        return 'badge badge-info';
      default:
        return 'badge badge-secondary';
    }
  };

  const handleChange = (e) => {
    setFiltros({ ...filtros, [e.target.name]: e.target.value });
  };

  const filteredData = asistencias.filter((a) =>
    a.estudiante.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <TableAttendace
        search={search}
        setSearch={setSearch}
        filtros={filtros}
        setFiltros={setFiltros}
        asistencias={asistencias}
        getBadgeClass={getBadgeClass}
        handleChange={handleChange}
        filteredData={filteredData}
      />
    </>
  );
};
