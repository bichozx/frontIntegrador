// src/component/student/TableStudent.jsx
import { Link } from "react-router-dom";
import React from "react";

export const TableStudent = ({
  students,
  handleView,
  handleEdit,
  handleDelete,
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
            <th>Correo</th>
            <th>Programa</th>
            <th>Semestre</th>
            <th>Promedio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, index) => (
            <tr key={s.id || index}>
              <td>{index + 1}</td>
              <td>{s.usuario?.nombre || "Sin nombre"}</td>
              <td>{s.usuario?.correo || "Sin correo"}</td>
              <td>{s.programa}</td>
              <td>{s.semestre}</td>
              <td>{s.promedio}</td>
              <td>
                <button
                
                  className="btn btn-sm btn-warning me-2"
                  onClick={() => handleEdit(s)}
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
                  onClick={() => handleView(s)}
                >
                  <i className="fas fa-eye"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
