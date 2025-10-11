import {
  FaChartLine,
  FaCheckCircle,
  FaEdit,
  FaExclamationTriangle,
  FaEye,
  FaPlus,
  FaTimesCircle,
  FaTrash,
} from 'react-icons/fa';

import React from 'react';

export const TableNote = ({ filtros, handleChange, notasFiltradas }) => {
  return (
    <div className="d-flex min-vh-100">
      
      <div className="d-flex flex-column flex-grow-1">
        
        <main className="flex-grow-1 p-4 bg-light">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Seguimiento de Notas</h1>
            <a
              href="/create-note"
              className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
            >
              <FaPlus className="me-1" /> Registrar Nota
            </a>
          </div>

          
          <div className="row mb-4">
            <div className="col-md-3">
              <label className="form-label">Periodo Académico</label>
              <select
                name="periodo"
                className="form-control"
                value={filtros.periodo}
                onChange={handleChange}
              >
                <option value="">Todos los periodos</option>
                <option value="1">Primer Trimestre 2024</option>
                <option value="2">Segundo Trimestre 2024</option>
                <option value="3">Tercer Trimestre 2024</option>
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
                <option value="sociales">Sociales</option>
              </select>
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
              <label className="form-label">Estado</label>
              <select
                name="estado"
                className="form-control"
                value={filtros.estado}
                onChange={handleChange}
              >
                <option value="">Todos los estados</option>
                <option value="Aprobado">Aprobado</option>
                <option value="Reprobado">Reprobado</option>
              </select>
            </div>
          </div>

          
          <div className="input-group mb-3 rounded-pill overflow-hidden border w-50">
            <span className="input-group-text bg-white border-0 pe-1">🔍</span>
            <input
              type="search"
              className="form-control border-0"
              placeholder="Buscar Estudiante"
              name="busqueda"
              value={filtros.busqueda}
              onChange={handleChange}
            />
          </div>

          
          <table className="table align-middle mb-0 bg-white">
            <thead className="bg-light">
              <tr>
                <th>#</th>
                <th>Estudiante</th>
                <th>Asignatura</th>
                <th>Periodo</th>
                <th>Nota 1</th>
                <th>Nota 2</th>
                <th>Nota 3</th>
                <th>Promedio</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {notasFiltradas.map((nota, i) => (
                <tr key={nota.id}>
                  <td>{i + 1}</td>
                  <td>{nota.estudiante}</td>
                  <td>{nota.asignatura}</td>
                  <td>{nota.periodo}</td>
                  <td>{nota.nota1}</td>
                  <td>{nota.nota2}</td>
                  <td>{nota.nota3}</td>
                  <td>{nota.promedio}</td>
                  <td>
                    <span
                      className={`badge ${
                        nota.estado === 'Aprobado'
                          ? 'badge-success'
                          : 'badge-danger'
                      }`}
                    >
                      {nota.estado}
                    </span>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-warning me-1">
                      <FaEdit />
                    </button>
                    <button className="btn btn-sm btn-danger me-1">
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
              <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Promedio General
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      3.8
                    </div>
                  </div>
                  <FaChartLine className="text-gray-300 fa-2x" />
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-left-success shadow h-100 py-2">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                      Aprobados
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      75%
                    </div>
                  </div>
                  <FaCheckCircle className="text-gray-300 fa-2x" />
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-left-warning shadow h-100 py-2">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                      En Riesgo
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      15%
                    </div>
                  </div>
                  <FaExclamationTriangle className="text-gray-300 fa-2x" />
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-left-danger shadow h-100 py-2">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">
                      Reprobados
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      10%
                    </div>
                  </div>
                  <FaTimesCircle className="text-gray-300 fa-2x" />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
