import React, { useState } from 'react';

import { TableWelfare } from '../../component/studentWelfare/TableWelfare';

export const ListWelfarePage = () => {
  const [filtros, setFiltros] = useState({
    estudiante: '',
    tipo: '',
    estado: '',
    fecha: '',
  });

  // Datos estáticos simulando API (más adelante puedes reemplazar con fetch)
  const [registros, setRegistros] = useState([
    {
      id: 1,
      estudiante: 'Juan Pérez',
      tipo: 'Salud',
      fecha: '2024-10-01',
      estado: 'Activo',
      descripcion: 'Consulta médica solicitada.',
    },
    {
      id: 2,
      estudiante: 'María López',
      tipo: 'Psicológico',
      fecha: '2024-09-25',
      estado: 'Resuelto',
      descripcion: 'Seguimiento académico completado.',
    },
  ]);

  const totalRegistros = registros.length;
  const totalResueltos = registros.filter(
    (r) => r.estado === 'Resuelto'
  ).length;
  const totalSeguimiento = registros.filter(
    (r) => r.estado === 'En Seguimiento'
  ).length;
  const totalActivos = registros.filter((r) => r.estado === 'Activo').length;

  // Manejadores de filtro
  const handleFiltroChange = (e) => {
    setFiltros({ ...filtros, [e.target.name]: e.target.value });
  };

  // Filtrar registros
  const registrosFiltrados = registros.filter((r) => {
    return (
      (filtros.estudiante === '' ||
        r.estudiante
          .toLowerCase()
          .includes(filtros.estudiante.toLowerCase())) &&
      (filtros.tipo === '' || r.tipo === filtros.tipo) &&
      (filtros.estado === '' || r.estado === filtros.estado)
    );
  });
  return (
    <>
      <TableWelfare
        registros={registros}
        setRegistros={setRegistros}
        filtros={filtros}
        handleFiltroChange={handleFiltroChange}
        registrosFiltrados={registrosFiltrados}
        totalRegistros={totalRegistros}
        totalResueltos={totalResueltos}
        totalSeguimiento={totalSeguimiento}
        totalActivos={totalActivos}
      />
    </>
  );
};
