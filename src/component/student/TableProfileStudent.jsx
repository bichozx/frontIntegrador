import { Link } from 'react-router-dom';
import React from 'react'

export const TableProfileStudent = ({
  handleView,
  search,
  setSearch,
  filteredEstudiantes,
  handleEdit,
  handleDelete,
}) => {
   return (
    <div className="container-fluid">
      
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Listado de HV Estudiantil</h1>
        <Link to="/create-profile" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
           <i className="fas fa-plus fa-sm text-white-50"></i>
          Crear Registro
        </Link>
      </div>

    
      <div className="input-group mb-3 rounded-pill overflow-hidden border w-50">
        <span className="input-group-text bg-white border-0 pe-1">
          <i className="bi bi-search"></i>
        </span>
        <input
          type="search"
          className="form-control border-0"
          placeholder="Buscar Estudiante"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      
      <table className="table align-middle mb-0 bg-white shadow-sm rounded">
        <thead className="bg-light">
          <tr>
            <th>#</th>
            <th>Estudiante</th>
            <th>Institución Anterior</th>
            <th>Año Graduación</th>
            <th>Promedio</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredEstudiantes.map((e, index) => (
            <tr key={e.id}>
              <td>{index + 1}</td>
              <td>{e.nombre}</td>
              <td>{e.institucion}</td>
              <td>{e.anio}</td>
              <td>{e.promedio}</td>
              <td>
                <span
                  className={`badge ${
                    e.estado === 'Completo'
                      ? 'bg-success'
                      : e.estado === 'Pendiente'
                      ? 'bg-warning'
                      : 'bg-secondary'
                  }`}
                >
                  {e.estado}
                </span>
              </td>
              <td>
                <button
                  className="btn btn-sm btn-warning me-2"
                  size="sm"
                  variant="warning"
                  onClick={() => handleEdit(e.id)}
                >
                  <i className="fas fa-edit"></i>
                </button>
                <button
                 
                  size="sm"
                  className="btn btn-sm btn-danger me-2"
                  onClick={() => handleDelete(e.id)}
                >
                  <i className="fas fa-trash"></i>
                </button>
                <button
                className="btn btn-sm btn-info"
                  variant="info"
                  size="sm"
                  onClick={() => handleView(e.id)}
                >
                 <i className="fas fa-eye"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      
      <nav aria-label="Page navigation example" className="mt-4">
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
}
