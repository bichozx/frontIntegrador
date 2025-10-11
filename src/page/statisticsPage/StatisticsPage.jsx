import React, { useEffect, useState } from 'react';

import { Statistics } from '../../component/statistics/Statistics';

export const StatisticsPage = () => {
  // Filtros simulados
  const [filtros, setFiltros] = useState({
    anio: '2024',
    grado: '',
    periodo: '',
  });

  // Datos simulados
  const [estadisticas, setEstadisticas] = useState({
    totalEstudiantes: 120,
    promedioGeneral: 86,
    asistenciaPromedio: 92,
    casosBienestar: 14,
  });

  // Tablas simuladas
  const [topEstudiantes, setTopEstudiantes] = useState([
    { id: 1, nombre: 'Juan Pérez', grado: '11°', promedio: 9.8 },
    { id: 2, nombre: 'María López', grado: '10°', promedio: 9.6 },
  ]);

  const [topMaterias, setTopMaterias] = useState([
    { materia: 'Matemáticas', promedio: 9.4, estudiantes: 35 },
    { materia: 'Inglés', promedio: 9.1, estudiantes: 30 },
  ]);

  // Simular carga desde API
  useEffect(() => {
    console.log('Cargando datos del año:', filtros.anio);
  }, [filtros]);

  const handleFiltroChange = (e) => {
    setFiltros({ ...filtros, [e.target.name]: e.target.value });
  };

  // Datos para gráficos
  const dataNotas = {
    labels: ['1-3', '4-6', '7-8', '9-10'],
    datasets: [
      {
        label: 'Cantidad de Estudiantes',
        data: [10, 25, 45, 40],
        backgroundColor: '#4e73df',
      },
    ],
  };

  const dataAsistencia = {
    labels: ['10°', '11°'],
    datasets: [
      {
        label: 'Asistencia %',
        data: [95, 89],
        backgroundColor: ['#1cc88a', '#36b9cc'],
      },
    ],
  };

  const dataBienestar = {
    labels: ['Salud', 'Psicológico', 'Académico', 'Social'],
    datasets: [
      {
        data: [5, 4, 3, 2],
        backgroundColor: ['#f6c23e', '#e74a3b', '#36b9cc', '#1cc88a'],
      },
    ],
  };

  const dataMaterias = {
    labels: ['Matemáticas', 'Inglés', 'Historia', 'Ciencias'],
    datasets: [
      {
        label: 'Promedio',
        data: [9.4, 9.1, 8.8, 8.5],
        backgroundColor: '#858796',
      },
    ],
  };
  return (
    <>
      <Statistics
        filtros={filtros}
        handleFiltroChange={handleFiltroChange}
        estadisticas={estadisticas}
        dataNotas={dataNotas}
        dataAsistencia={dataAsistencia}
        dataBienestar={dataBienestar}
        dataMaterias={dataMaterias}
        topEstudiantes={topEstudiantes}
        topMaterias={topMaterias}
        setEstadisticas={setEstadisticas}
        setTopEstudiantes={setTopEstudiantes}
        setTopMaterias={setTopMaterias}
      />
    </>
  );
};
