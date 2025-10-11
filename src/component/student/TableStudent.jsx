import { Link } from 'react-router-dom';
import React from 'react'

export const TableStudent = ({
  students,
  handleView,
  handleEdit,
  handleDelete
}) => {
  return (
    <div className="container-fluid">
      
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Listado de Estudiantes</h1>
        <Link
          to="/create-student"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-plus fa-sm text-white-50"></i> Crear Estudiante
        </Link>
      </div>

      
      <div className="input-group mb-4 w-50 rounded-pill border overflow-hidden">
        <span className="input-group-text bg-white border-0 pe-1">
          <i className="fas fa-search"></i>
        </span>
        <input
          type="search"
          className="form-control border-0"
          placeholder="Buscar Estudiante"
        />
      </div>

      
      <table className="table align-middle mb-0 bg-white shadow-sm">
        <thead className="bg-light">
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Celular</th>
            <th>Dirección</th>
            <th>Grado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, index) => (
            <tr key={s.id}>
              <td>{index + 1}</td>
              <td>{s.nombre}</td>
              <td>{s.apellido}</td>
              <td>{s.email}</td>
              <td>{s.celular}</td>
              <td>{s.direccion}</td>
              <td>{s.grado}</td>
              <td>
                <button
                  className="btn btn-sm btn-warning me-2"
                  onClick={() => handleEdit(s.id)}
                >
                  <i className="fas fa-edit"></i>
                </button>
                <button
                  className="btn btn-sm btn-danger me-2"
                  onClick={() => handleDelete(s.id)}
                >
                  <i className="fas fa-trash"></i>
                </button>
                <button
                  className="btn btn-sm btn-info"
                  onClick={() => handleView(s.id)}
                >
                  <i className="fas fa-eye"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      
      <nav aria-label="Paginación" className="mt-4">
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
