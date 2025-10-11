import React from 'react';

export const TableFamily = ({
  searchTerm,
  setSearchTerm,
  filteredFamiliares,
  handleEdit,
  handleDelete,
  handleView,
}) => {
  return (
    <>
      <div className="container-fluid">
      
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Listado de Familiares</h1>
          <a
            href="/create-family"
            className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          >
            <i className="fas fa-plus fa-sm text-white-50"></i> Crear Familiar
          </a>
        </div>

        
        <div className="input-group mb-4 w-50 rounded-pill overflow-hidden border">
          <span className="input-group-text bg-white border-0 pe-1">
            <i className="fas fa-search"></i>
          </span>
          <input
            type="search"
            className="form-control border-0"
            placeholder="Buscar Familiar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        
        <div className="table-responsive">
          <table className="table align-middle mb-0 bg-white">
            <thead className="bg-light">
              <tr>
                <th>#</th>
                <th>Estudiante</th>
                <th>Familiar</th>
                <th>Parentesco</th>
                <th>Teléfono</th>
                <th>Email</th>
                <th>Acudiente</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredFamiliares.map((f, index) => (
                <tr key={f.id}>
                  <td>{index + 1}</td>
                  <td>{f.estudiante}</td>
                  <td>{f.familiar}</td>
                  <td>
                    <span className="badge bg-primary text-white">
                      {f.parentesco}
                    </span>
                  </td>
                  <td>{f.telefono}</td>
                  <td>{f.email}</td>
                  <td>
                    <span
                      className={`badge ${
                        f.acudiente ? 'bg-success' : 'bg-secondary'
                      } text-white`}
                    >
                      {f.acudiente ? 'Sí' : 'No'}
                    </span>
                  </td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm me-1"
                      onClick={() => handleEdit(f.id)}
                    >
                      <i className="fas fa-edit"></i>
                    </button>
                    <button
                      className="btn btn-danger btn-sm me-1"
                      onClick={() => handleDelete(f.id)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                    <button
                      className="btn btn-info btn-sm"
                      onClick={() => handleView(f.id)}
                    >
                      <i className="fas fa-eye"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        
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
    </>
  );
};
