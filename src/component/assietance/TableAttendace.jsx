import {
  FaCheckCircle,
  FaClock,
  FaEdit,
  FaEye,
  FaFileMedical,
  FaPlus,
  FaTimesCircle,
  FaTrash,
} from 'react-icons/fa';

import React from 'react';

export const TableAttendace = ({
  filtros,
  handleChange,
  search,
  setSearch,
  filteredData,
  getBadgeClass,
}) => {
  return (
    <div className="container-fluid">
      
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Control de Asistencias</h1>
        <a
          href="/create-assistance"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <FaPlus className="me-2" /> Registrar Asistencia
        </a>
      </div>

      
      <div className="row mb-4">
        <div className="col-md-3">
          <label className="form-label">Fecha</label>
          <input
            type="date"
            name="fecha"
            className="form-control"
            value={filtros.fecha}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">Grado</label>
          <select
            name="grado"
            className="form-control"
            value={filtros.grado}
            onChange={handleChange}
          >
            <option value="">Todos los grados</option>
            <option value="10">10°</option>
            <option value="11">11°</option>
          </select>
        </div>
        <div className="col-md-3">
          <label className="form-label">Asignatura</label>
          <select
            name="asignatura"
            className="form-control"
            value={filtros.asignatura}
            onChange={handleChange}
          >
            <option value="">Todas las asignaturas</option>
            <option value="matematicas">Matemáticas</option>
            <option value="lenguaje">Lenguaje</option>
            <option value="ciencias">Ciencias</option>
          </select>
        </div>
        <div className="col-md-3">
          <label className="form-label">Estado</label>
          <select
            name="estado"
            className="form-control"
            value={filtros.estado}
            onChange={handleChange}
          >
            <option value="">Todos los estados</option>
            <option value="Presente">Presente</option>
            <option value="Ausente">Ausente</option>
            <option value="Justificado">Justificado</option>
            <option value="Tardanza">Tardanza</option>
          </select>
        </div>
      </div>

      
      <div className="input-group mb-3 rounded-pill overflow-hidden border w-50">
        <span className="input-group-text bg-white border-0 pe-1">
          <i className="fas fa-search"></i>
        </span>
        <input
          type="search"
          className="form-control border-0"
          placeholder="Buscar Estudiante"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      
      <table className="table align-middle mb-0 bg-white">
        <thead className="bg-light">
          <tr>
            <th>#</th>
            <th>Estudiante</th>
            <th>Grado</th>
            <th>Asignatura</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Estado</th>
            <th>Observaciones</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((a, index) => (
            <tr key={a.id}>
              <td>{index + 1}</td>
              <td>{a.estudiante}</td>
              <td>{a.grado}</td>
              <td>{a.asignatura}</td>
              <td>{a.fecha}</td>
              <td>{a.hora}</td>
              <td>
                <span className={getBadgeClass(a.estado)}>{a.estado}</span>
              </td>
              <td>{a.observaciones}</td>
              <td>
                <button className="btn btn-sm btn-warning me-2">
                  <FaEdit />
                </button>
                <button className="btn btn-sm btn-danger me-2">
                  <FaTrash />
                </button>
                <button className="btn btn-sm btn-info">
                  <FaEye />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    
      <div className="row mt-4">
        <div className="col-md-3">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body d-flex align-items-center justify-content-between">
              <div>
                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                  Asistencia Total
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  92%
                </div>
              </div>
              <FaCheckCircle className="text-gray-300 fa-2x" />
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-left-danger shadow h-100 py-2">
            <div className="card-body d-flex align-items-center justify-content-between">
              <div>
                <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">
                  Ausencias
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">5%</div>
              </div>
              <FaTimesCircle className="text-gray-300 fa-2x" />
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-left-warning shadow h-100 py-2">
            <div className="card-body d-flex align-items-center justify-content-between">
              <div>
                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                  Tardanzas
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">3%</div>
              </div>
              <FaClock className="text-gray-300 fa-2x" />
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-left-info shadow h-100 py-2">
            <div className="card-body d-flex align-items-center justify-content-between">
              <div>
                <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                  Justificados
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">2%</div>
              </div>
              <FaFileMedical className="text-gray-300 fa-2x" />
            </div>
          </div>
        </div>
      </div>

      
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
