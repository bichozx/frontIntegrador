import {
  FaCheck,
  FaClock,
  FaInfoCircle,
  FaList,
  FaTimes,
} from 'react-icons/fa';

import React from 'react';

export const RegisterAttendace = ({
  handleSubmit,
  asistencia,
  handleChange,
  estudiantes,
  asignaturas,
  mostrarTardanza,
  mostrarJustificacion,
}) => {
  return (
    <div id="wrapper" className="d-flex">
      <div id="content-wrapper" className="d-flex flex-column flex-grow-1">
        <div id="content">
          <div className="container-fluid">
            {/* Encabezado */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Registrar Asistencia</h1>
              <a
                href="/assistance-list"
                className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
              >
                <FaList className="me-1" /> Listado
              </a>
            </div>

            
            <div className="row">
              <div className="col-8">
                <form onSubmit={handleSubmit}>
                  {/* Información básica */}
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <label className="form-label">Estudiante</label>
                      <select
                        name="estudiante"
                        className="form-control"
                        value={asistencia}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Seleccionar Estudiante</option>
                        {estudiantes.map((e) => (
                          <option key={e.id} value={e.nombre}>
                            {e.nombre} - {e.grado}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="col-sm-6">
                      <label className="form-label">Asignatura</label>
                      <select
                        name="asignatura"
                        className="form-control"
                        value={asistencia}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Seleccionar Asignatura</option>
                        {asignaturas.map((a) => (
                          <option key={a.id} value={a.id}>
                            {a.nombre}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <label className="form-label">Fecha de la Clase</label>
                      <input
                        type="date"
                        name="fecha"
                        className="form-control"
                        value={asistencia}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label">Hora de la Clase</label>
                      <input
                        type="time"
                        name="hora"
                        className="form-control"
                        value={asistencia}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Estado de Asistencia
                      </h6>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        {[
                          {
                            id: 'presente',
                            label: 'Presente',
                            color: 'success',
                          },
                          { id: 'ausente', label: 'Ausente', color: 'danger' },
                          {
                            id: 'tardanza',
                            label: 'Tardanza',
                            color: 'warning',
                          },
                          {
                            id: 'justificado',
                            label: 'Justificado',
                            color: 'info',
                          },
                        ].map((estado) => (
                          <div className="col-md-3 mb-3" key={estado.id}>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="estado"
                                id={`estado-${estado.id}`}
                                value={estado.id}
                                checked={asistencia === estado.id}
                                onChange={handleChange}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`estado-${estado.id}`}
                              >
                                <span className={`badge badge-${estado.color}`}>
                                  {estado.label}
                                </span>
                              </label>
                            </div>
                          </div>
                        ))}
                      </div>

                      
                      {mostrarTardanza && (
                        <div className="form-group mt-3">
                          <label className="form-label">
                            Minutos de Tardanza
                          </label>
                          <input
                            type="number"
                            name="minutosTardanza"
                            className="form-control"
                            min="1"
                            max="120"
                            placeholder="Ej: 15"
                            value={asistencia}
                            onChange={handleChange}
                          />
                        </div>
                      )}

                      {mostrarJustificacion && (
                        <div className="form-group mt-3">
                          <label className="form-label">
                            Tipo de Justificación
                          </label>
                          <select
                            name="tipoJustificacion"
                            className="form-control"
                            value={asistencia.tipoJustificacion}
                            onChange={handleChange}
                          >
                            <option value="">Seleccionar tipo</option>
                            <option value="enfermedad">Enfermedad</option>
                            <option value="cita_medica">Cita médica</option>
                            <option value="emergencia_familiar">
                              Emergencia familiar
                            </option>
                            <option value="actividad_institucional">
                              Actividad institucional
                            </option>
                            <option value="otro">Otro</option>
                          </select>
                        </div>
                      )}
                    </div>
                  </div>

                  
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
                          name="observaciones"
                          rows="3"
                          placeholder="Observaciones adicionales..."
                          value={asistencia}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">
                          Evidencia (Opcional)
                        </label>
                        <input
                          type="file"
                          name="evidencia"
                          className="form-control"
                          accept=".pdf,.jpg,.jpeg,.png"
                        />
                        <small className="form-text text-muted">
                          Formatos aceptados: PDF, JPG, PNG (Máx. 5MB)
                        </small>
                      </div>

                      <div className="form-group form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="notificarFamilia"
                          id="notificar-familia"
                          checked={asistencia}
                          onChange={handleChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="notificar-familia"
                        >
                          Notificar a la familia
                        </label>
                        <small className="form-text text-muted">
                          Enviará una notificación al acudiente principal.
                        </small>
                      </div>
                    </div>
                  </div>

                  
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4"
                  >
                    Registrar Asistencia
                  </button>
                </form>
              </div>

             
              <div className="col-4">
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Estadísticas del Estudiante
                    </h6>
                  </div>
                  <div className="card-body">
                    <p className="text-muted">
                      Selecciona un estudiante para ver sus estadísticas.
                    </p>
                  </div>
                </div>

                <div className="card shadow">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Información del Sistema
                    </h6>
                  </div>
                  <div className="card-body small">
                    <p>
                      <strong>Nota:</strong> El sistema registra
                      automáticamente:
                    </p>
                    <ul>
                      <li>Fecha y hora del registro</li>
                      <li>Usuario que registra</li>
                      <li>IP del equipo</li>
                    </ul>
                    <p className="text-muted">
                      Las asistencias se pueden filtrar y exportar para
                      reportes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
