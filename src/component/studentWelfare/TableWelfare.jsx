import {
  FaCheckCircle,
  FaClipboardList,
  FaClock,
  FaExclamationCircle,
  FaPlus,
} from 'react-icons/fa';

import React from 'react';

export const TableWelfare = ({
  filtros,
  handleFiltroChange,
  registrosFiltrados,
  totalRegistros,
  totalResueltos,
  totalSeguimiento,
  totalActivos,
}) => {
  return (
    <div className="container-fluid">
      
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Bienestar Estudiantil</h1>
        <a
         href="/create-welfare"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
          <FaPlus className="text-white-50 mr-1" /> Nuevo Registro
        </a>
      </div>

      
      <div className="row mb-4">
        <div className="col-md-3">
          <label className="form-label">Estudiante</label>
          <input
            type="text"
            name="estudiante"
            value={filtros.estudiante}
            onChange={handleFiltroChange}
            className="form-control"
            placeholder="Buscar estudiante..."
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">Tipo</label>
          <select
            name="tipo"
            value={filtros.tipo}
            onChange={handleFiltroChange}
            className="form-control"
          >
            <option value="">Todos</option>
            <option value="Salud">Salud</option>
            <option value="Psicológico">Psicológico</option>
            <option value="Académico">Académico</option>
            <option value="Social">Social</option>
            <option value="Disciplinario">Disciplinario</option>
          </select>
        </div>
        <div className="col-md-3">
          <label className="form-label">Estado</label>
          <select
            name="estado"
            value={filtros.estado}
            onChange={handleFiltroChange}
            className="form-control"
          >
            <option value="">Todos</option>
            <option value="Activo">Activo</option>
            <option value="En Seguimiento">En Seguimiento</option>
            <option value="Resuelto">Resuelto</option>
          </select>
        </div>
        <div className="col-md-3">
          <label className="form-label">Fecha</label>
          <input
            type="date"
            name="fecha"
            value={filtros.fecha}
            onChange={handleFiltroChange}
            className="form-control"
          />
        </div>
      </div>

      
      <table className="table align-middle mb-0 bg-white shadow-sm">
        <thead className="bg-light">
          <tr>
            <th>#</th>
            <th>Estudiante</th>
            <th>Tipo</th>
            <th>Fecha</th>
            <th>Estado</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {registrosFiltrados.length > 0 ? (
            registrosFiltrados.map((r, index) => (
              <tr key={r.id}>
                <td>{index + 1}</td>
                <td>{r.estudiante}</td>
                <td>{r.tipo}</td>
                <td>{r.fecha}</td>
                <td>{r.estado}</td>
                <td>{r.descripcion}</td>
                <td>
                  <button className="btn btn-sm btn-info me-2">Ver</button>
                  <button className="btn btn-sm btn-warning me-2">
                    Editar
                  </button>
                  <button className="btn btn-sm btn-danger">Eliminar</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center text-muted py-4">
                No se encontraron registros
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Estadísticas */}
      <div className="row mt-4">
        <div className="col-md-3">
          <StatCard
            title="Total Registros"
            value={totalRegistros}
            color="primary"
            icon={<FaClipboardList />}
          />
        </div>
        <div className="col-md-3">
          <StatCard
            title="Resueltos"
            value={totalResueltos}
            color="success"
            icon={<FaCheckCircle />}
          />
        </div>
        <div className="col-md-3">
          <StatCard
            title="En Seguimiento"
            value={totalSeguimiento}
            color="warning"
            icon={<FaClock />}
          />
        </div>
        <div className="col-md-3">
          <StatCard
            title="Casos Activos"
            value={totalActivos}
            color="danger"
            icon={<FaExclamationCircle />}
          />
        </div>
      </div>

      {/* Paginación (a futuro puede venir de API) */}
      <nav aria-label="Page navigation example" className="mt-3">
        <ul className="pagination">
          <li className="page-item">
            <button className="page-link">Anterior</button>
          </li>
          <li className="page-item">
            <span className="page-link">1</span>
          </li>
          <li className="page-item">
            <button className="page-link">Siguiente</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

// Subcomponente para tarjetas de estadísticas
const StatCard = ({ title, value, color, icon }) => (
  <div className={`card border-left-${color} shadow h-100 py-2`}>
    <div className="card-body">
      <div className="row no-gutters align-items-center">
        <div className="col mr-2">
          <div
            className={`text-xs font-weight-bold text-${color} text-uppercase mb-1`}
          >
            {title}
          </div>
          <div className="h5 mb-0 font-weight-bold text-gray-800">{value}</div>
        </div>
        <div className="col-auto">
          <span className="fa-2x text-gray-300">{icon}</span>
        </div>
      </div>
    </div>
  </div>
);
