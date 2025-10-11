import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import {
  FaCalendarCheck,
  FaChartLine,
  FaDownload,
  FaHeartbeat,
  FaUsers,
} from "react-icons/fa";

import React from 'react'

// Registrar componentes de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);
export const Statistics = ({
  filtros,
  handleFiltroChange,
  estadisticas,
  dataNotas,
  dataAsistencia,
  dataBienestar,
  dataMaterias,
  topEstudiantes,
  topMaterias,

}) => {
  return (
       <div className="container-fluid">
      
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Estadísticas del Sistema</h1>
        <button className="btn btn-sm btn-primary shadow-sm">
          <FaDownload className="me-2" /> Exportar Reporte
        </button>
      </div>

    
      <div className="row mb-4">
        <div className="col-md-3">
          <label className="form-label">Año Académico</label>
          <select
            name="anio"
            value={filtros.anio}
            onChange={handleFiltroChange}
            className="form-control"
          >
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className="col-md-3">
          <label className="form-label">Grado</label>
          <select
            name="grado"
            value={filtros.grado}
            onChange={handleFiltroChange}
            className="form-control"
          >
            <option value="">Todos los grados</option>
            <option value="10">10°</option>
            <option value="11">11°</option>
          </select>
        </div>
        <div className="col-md-3">
          <label className="form-label">Período</label>
          <select
            name="periodo"
            value={filtros.periodo}
            onChange={handleFiltroChange}
            className="form-control"
          >
            <option value="">Todo el año</option>
            <option value="1">Primer Trimestre</option>
            <option value="2">Segundo Trimestre</option>
            <option value="3">Tercer Trimestre</option>
          </select>
        </div>
        <div className="col-md-3">
          <label className="form-label">&nbsp;</label>
          <button className="btn btn-primary w-100">
            <i className="fas fa-chart-bar"></i> Generar Reporte
          </button>
        </div>
      </div>

      
      <div className="row mb-4">
        <StatCard
          title="Total Estudiantes"
          value={estadisticas.totalEstudiantes}
          color="primary"
          icon={<FaUsers />}
        />
        <StatCard
          title="Promedio General"
          value={`${estadisticas.promedioGeneral}%`}
          color="success"
          icon={<FaChartLine />}
        />
        <StatCard
          title="Asistencia Promedio"
          value={`${estadisticas.asistenciaPromedio}%`}
          color="info"
          icon={<FaCalendarCheck />}
        />
        <StatCard
          title="Casos de Bienestar"
          value={estadisticas.casosBienestar}
          color="warning"
          icon={<FaHeartbeat />}
        />
      </div>

      
      <div className="row">
        <ChartCard title="Distribución de Notas">
          <Bar data={dataNotas} />
        </ChartCard>
        <ChartCard title="Asistencia por Grado">
          <Bar data={dataAsistencia} />
        </ChartCard>
      </div>

      <div className="row">
        <ChartCard title="Casos de Bienestar por Tipo">
          <Pie data={dataBienestar} />
        </ChartCard>
        <ChartCard title="Rendimiento por Materia">
          <Bar data={dataMaterias} />
        </ChartCard>
      </div>

      
      <div className="row">
        <TableCard
          title="Top 10 Mejores Estudiantes"
          headers={["#", "Estudiante", "Grado", "Promedio"]}
          rows={topEstudiantes.map((e, i) => [
            i + 1,
            e.nombre,
            e.grado,
            e.promedio,
          ])}
        />
        <TableCard
          title="Materias con Mejor Rendimiento"
          headers={["Materia", "Promedio", "Estudiantes"]}
          rows={topMaterias.map((m) => [m.materia, m.promedio, m.estudiantes])}
        />
      </div>
    </div>
  );
};

// Subcomponentes Reutilizables
const StatCard = ({ title, value, color, icon }) => (
  <div className="col-xl-3 col-md-6 mb-4">
    <div className={`card border-left-${color} shadow h-100 py-2`}>
      <div className="card-body">
        <div className="row no-gutters align-items-center">
          <div className="col mr-2">
            <div
              className={`text-xs font-weight-bold text-${color} text-uppercase mb-1`}
            >
              {title}
            </div>
            <div className="h5 mb-0 font-weight-bold text-gray-800">
              {value}
            </div>
          </div>
          <div className="col-auto text-gray-300">{icon}</div>
        </div>
      </div>
    </div>
  </div>
);

const ChartCard = ({ title, children }) => (
  <div className="col-xl-6 col-lg-6 mb-4">
    <div className="card shadow">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">{title}</h6>
      </div>
      <div className="card-body">{children}</div>
    </div>
  </div>
);

const TableCard = ({ title, headers, rows }) => (
  <div className="col-xl-6 col-lg-6 mb-4">
    <div className="card shadow">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">{title}</h6>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-bordered" width="100%">
            <thead>
              <tr>
                {headers.map((h, i) => (
                  <th key={i}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i}>
                  {r.map((cell, j) => (
                    <td key={j}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);
