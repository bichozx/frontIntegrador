import React from 'react'

export const RegisterNote = ({
  handleRegistrar,
  estudiantes,
  asignaturas,
  docentes,
  periodos,
  nota1,
  nota2,
  nota3,
  setNota1,
  setNota2,
  setNota3,
  handleNotaChange,
  promedio, 
  estado



}) => {
  return (
    <>
      <div id="wrapper">
       

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
          
            <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Registrar Nota</h1>
                <a
                  href="/note-list"
                  className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                >
                  <i className="fas fa-list fa-sm text-white-50"></i> Listado
                </a>
              </div>

              <div className="row">
                {/* Formulario */}
                <div className="col-8">
                  <form onSubmit={handleRegistrar}>
                    {/* Información básica */}
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <label className="form-label">Estudiante</label>
                        <select className="form-control" required>
                          <option value="">Seleccionar Estudiante</option>
                          {estudiantes.map((e) => (
                            <option key={e.id} value={e.id}>
                              {e.nombre}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="col-sm-6">
                        <label className="form-label">Asignatura</label>
                        <select className="form-control" required>
                          <option value="">Seleccionar Asignatura</option>
                          {asignaturas.map((a) => (
                            <option key={a} value={a.toLowerCase()}>
                              {a}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <label className="form-label">Periodo Académico</label>
                        <select className="form-control" required>
                          <option value="">Seleccionar Periodo</option>
                          {periodos.map((p, i) => (
                            <option key={i} value={i + 1}>
                              {p}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="col-sm-6">
                        <label className="form-label">Docente</label>
                        <select className="form-control" required>
                          <option value="">Seleccionar Docente</option>
                          {docentes.map((d, i) => (
                            <option key={i} value={d}>
                              {d}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Calificaciones */}
                    <div className="card shadow mb-4">
                      <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">
                          Calificaciones
                        </h6>
                      </div>
                      <div className="card-body">
                        <div className="form-group row">
                          <div className="col-sm-4 mb-3 mb-sm-0">
                            <label className="form-label">Nota 1 (30%)</label>
                            <input
                              type="number"
                              step="0.1"
                              min="0"
                              max="5"
                              className="form-control"
                              value={nota1}
                              onChange={(e) =>
                                handleNotaChange(setNota1, e.target.value)
                              }
                              required
                            />
                            <small className="form-text text-muted">
                              Primer corte evaluativo
                            </small>
                          </div>

                          <div className="col-sm-4">
                            <label className="form-label">Nota 2 (30%)</label>
                            <input
                              type="number"
                              step="0.1"
                              min="0"
                              max="5"
                              className="form-control"
                              value={nota2}
                              onChange={(e) =>
                                handleNotaChange(setNota2, e.target.value)
                              }
                              required
                            />
                            <small className="form-text text-muted">
                              Segundo corte evaluativo
                            </small>
                          </div>

                          <div className="col-sm-4">
                            <label className="form-label">Nota 3 (40%)</label>
                            <input
                              type="number"
                              step="0.1"
                              min="0"
                              max="5"
                              className="form-control"
                              value={nota3}
                              onChange={(e) =>
                                handleNotaChange(setNota3, e.target.value)
                              }
                              required
                            />
                            <small className="form-text text-muted">
                              Tercer corte evaluativo
                            </small>
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="form-label">Promedio Calculado</label>
                          <div className="alert alert-info">
                            <strong>{promedio}</strong> -{" "}
                            <span>{estado}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Información adicional */}
                    <div className="card shadow mb-4">
                      <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">
                          Información Adicional
                        </h6>
                      </div>
                      <div className="card-body">
                        <div className="form-group">
                          <label className="form-label">Observaciones</label>
                          <textarea
                            className="form-control"
                            rows="3"
                            placeholder="Observaciones sobre el desempeño del estudiante..."
                          ></textarea>
                        </div>

                        <div className="form-group">
                          <label className="form-label">Recomendaciones</label>
                          <textarea
                            className="form-control"
                            rows="3"
                            placeholder="Recomendaciones para mejorar el rendimiento..."
                          ></textarea>
                        </div>

                        <div className="form-group">
                          <label className="form-label">Fecha de Evaluación</label>
                          <input type="date" className="form-control" required />
                        </div>
                      </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block mb-4">
                      Registrar Nota
                    </button>
                  </form>
                </div>

                {/* Panel lateral */}
                <div className="col-4">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Escala de Calificación
                      </h6>
                    </div>
                    <div className="card-body">
                      <div className="mb-3">
                        <span className="badge badge-success p-2">4.6 - 5.0</span>{" "}
                        <small className="text-muted">Excelente</small>
                      </div>
                      <div className="mb-3">
                        <span className="badge badge-primary p-2">4.0 - 4.5</span>{" "}
                        <small className="text-muted">Bueno</small>
                      </div>
                      <div className="mb-3">
                        <span className="badge badge-warning p-2">3.0 - 3.9</span>{" "}
                        <small className="text-muted">Aceptable</small>
                      </div>
                      <div className="mb-3">
                        <span className="badge badge-danger p-2">0.0 - 2.9</span>{" "}
                        <small className="text-muted">Reprobado</small>
                      </div>
                    </div>
                  </div>

                  <div className="card shadow">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Información del Sistema
                      </h6>
                    </div>
                    <div className="card-body">
                      <p className="small">
                        <strong>Nota:</strong> El sistema calcula automáticamente
                        el promedio con los siguientes pesos:
                      </p>
                      <ul className="small">
                        <li>Nota 1: 30%</li>
                        <li>Nota 2: 30%</li>
                        <li>Nota 3: 40%</li>
                      </ul>
                      <p className="small text-muted">
                        La nota mínima para aprobar es 3.0
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </>
  )
}
