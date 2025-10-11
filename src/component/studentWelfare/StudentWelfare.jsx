import { FaList } from "react-icons/fa";
import React from 'react'

export const StudentWelfare = ({
handleSubmit,
formData,
handleStudentSelect,
estudiantes,
handleChange,
selectedStudent

}) => {
  return (
        <div className="container-fluid">
      
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Registrar Caso de Bienestar</h1>
        <a
          href="/welfare-list"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <FaList className="me-2" /> Listado
        </a>
      </div>

      <div className="row">
        
        <div className="col-8">
          <form onSubmit={handleSubmit}>
            {/* Información básica */}
            <div className="form-group row">
              <div className="col-sm-6 mb-3 mb-sm-0">
                <label className="form-label">Estudiante *</label>
                <select
                  name="estudiante"
                  className="form-control"
                  required
                  value={formData.estudiante}
                  onChange={handleStudentSelect}
                >
                  <option value="">Seleccionar Estudiante</option>
                  {estudiantes.map((est) => (
                    <option key={est.id} value={est.id}>
                      {est.nombre} - {est.grado}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-sm-6">
                <label className="form-label">Tipo de Caso *</label>
                <select
                  name="tipoCaso"
                  className="form-control"
                  required
                  value={formData.tipoCaso}
                  onChange={handleChange}
                >
                  <option value="">Seleccionar Tipo</option>
                  <option value="salud">Salud</option>
                  <option value="psicologico">Psicológico</option>
                  <option value="academico">Académico</option>
                  <option value="social">Social</option>
                  <option value="disciplinario">Disciplinario</option>
                </select>
              </div>
            </div>

            <div className="form-group row">
              <div className="col-sm-6 mb-3 mb-sm-0">
                <label className="form-label">Fecha del Reporte *</label>
                <input
                  type="date"
                  name="fechaReporte"
                  className="form-control"
                  required
                  value={formData.fechaReporte}
                  onChange={handleChange}
                />
              </div>
              <div className="col-sm-6">
                <label className="form-label">Estado *</label>
                <select
                  name="estado"
                  className="form-control"
                  required
                  value={formData.estado}
                  onChange={handleChange}
                >
                  <option value="activo">Activo</option>
                  <option value="seguimiento">En Seguimiento</option>
                  <option value="resuelto">Resuelto</option>
                </select>
              </div>
            </div>

            
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Descripción del Caso</h6>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label className="form-label">Descripción *</label>
                  <textarea
                    name="descripcion"
                    className="form-control"
                    rows="4"
                    required
                    placeholder="Describa el caso o situación..."
                    value={formData.descripcion}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Acciones Tomadas</label>
                  <textarea
                    name="acciones"
                    className="form-control"
                    rows="3"
                    placeholder="Acciones implementadas..."
                    value={formData.acciones}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Observaciones</label>
                  <textarea
                    name="observaciones"
                    className="form-control"
                    rows="2"
                    placeholder="Observaciones adicionales..."
                    value={formData.observaciones}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Seguimiento</h6>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label className="form-label">Próximos Pasos</label>
                  <textarea
                    name="proximosPasos"
                    className="form-control"
                    rows="3"
                    placeholder="Próximas acciones a realizar..."
                    value={formData.proximosPasos}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Fecha de Próximo Seguimiento</label>
                  <input
                    type="date"
                    name="fechaSeguimiento"
                    className="form-control"
                    value={formData.fechaSeguimiento}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="notificarFamilia"
                    id="notificar-familia"
                    checked={formData.notificarFamilia}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="notificar-familia">
                    Notificar a la familia
                  </label>
                  <small className="form-text text-muted">
                    Enviará una notificación al acudiente principal.
                  </small>
                </div>
              </div>
            </div>

            
            <button type="submit" className="btn btn-primary btn-block mb-4">
              Registrar Caso
            </button>
          </form>
        </div>

        
        <div className="col-4">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Información del Estudiante</h6>
            </div>
            <div className="card-body">
              {selectedStudent ? (
                <div>
                  <p>
                    <strong>Nombre:</strong> {selectedStudent.nombre}
                  </p>
                  <p>
                    <strong>Grado:</strong> {selectedStudent.grado}
                  </p>
                  <p>
                    <strong>Acudiente:</strong> {selectedStudent.acudiente}
                  </p>
                  <p>
                    <strong>Teléfono:</strong> {selectedStudent.telefono}
                  </p>
                </div>
              ) : (
                <p className="text-muted">
                  Selecciona un estudiante para ver su información.
                </p>
              )}
            </div>
          </div>

          <div className="card shadow">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Información del Sistema</h6>
            </div>
            <div className="card-body">
              <p className="small">
                <strong>Nota:</strong> El sistema registra automáticamente:
              </p>
              <ul className="small">
                <li>Fecha y hora del registro</li>
                <li>Usuario que registra</li>
                <li>IP del equipo</li>
              </ul>
              <p className="small text-muted">
                Los casos de bienestar son confidenciales y solo accesibles para personal autorizado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
