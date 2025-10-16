import { CertificadoModal } from '../modales/modalCertificado/CertificadoModal';
import { HabilidadModal } from '../modales/habilidadModal/HabilidadModal';
import { Link } from 'react-router-dom';
import { ProyectoModal } from '../modales/proyectoModal/ProyectoModal';

export const CreateHVStudent = ({
  handleSubmit,
  handleChange,
  estudiantesSinPerfil,
  loading,
  formData,
  rol
}) => {
  

  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Crear HV Estudiantil</h1>
        <Link
          to="/profile-list"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-list fa-sm text-white-50"></i> Listado
        </Link>
      </div>

      <div className="row">
        <div className="col-12 col-md-8">
          <form id="form-historial" onSubmit={handleSubmit}>
           {/* Estudiante */}
<div className="form-group mb-3">
  <label htmlFor="estudiante">Seleccionar estudiante</label>

  {loading ? (
    <p>Cargando estudiantes...</p>
  ) : (
    <>
      {rol === 'Administrador' ? (
        <select
          id="estudiante"
          className="form-control"
          required
          value={formData.estudiante || ''}
          onChange={handleChange}
        >
          <option value="">Seleccionar Estudiante</option>
          {estudiantesSinPerfil?.length > 0 ? (
            estudiantesSinPerfil.map((est) => (
              <option key={est.id} value={est.id}>
                {est.usuario?.nombre || est.nombre}
              </option>
            ))
          ) : (
            <option disabled>No hay estudiantes sin perfil</option>
          )}
        </select>
      ) : (
        <input
          type="text"
          id="estudiante"
          className="form-control"
          value="Perfil propio (Estudiante logueado)"
          disabled
        />
      )}
    </>
  )}
</div>


            {/* Resumen */}
            <div className="form-group mb-3">
              <label className="form-label" htmlFor="resumen">
                Resumen
              </label>
              <textarea
                id="resumen"
                className="form-control"
                rows="3"
                value={formData.resumen || ''}
                onChange={handleChange}
              />
            </div>

            {/* Intereses */}
            <div className="form-group mb-3">
              <label className="form-label" htmlFor="intereses">
                Intereses
              </label>
              <textarea
                id="intereses"
                className="form-control"
                rows="2"
                value={formData.intereses || ''}
                onChange={handleChange}
              />
            </div>

            {/* Experiencia */}
            <div className="form-group mb-3">
              <label className="form-label" htmlFor="experiencia">
                Experiencia
              </label>
              <textarea
                id="experiencia"
                className="form-control"
                rows="3"
                value={formData.experiencia || ''}
                onChange={handleChange}
              />
            </div>

            {/* Programa */}
            <div className="form-group mb-3">
              <label className="form-label" htmlFor="programa">
                Programa
              </label>
              <input
                type="text"
                id="programa"
                className="form-control"
                value={formData.programa || ''}
                onChange={handleChange}
              />
            </div>

            {/* Semestre */}
            <div className="form-group mb-3">
              <label className="form-label" htmlFor="semestre">
                Semestre
              </label>
              <input
                type="text"
                id="semestre"
                className="form-control"
                value={formData.semestre || ''}
                onChange={handleChange}
              />
            </div>

           

            {/* Botones */}
            <div className="d-flex gap-3">
              <button type="submit" className="btn btn-primary w-50">
                <i className="fas fa-save me-2"></i> Crear HV
              </button>
              <button
                type="button"
                className="btn btn-success w-50"
                onClick={() => alert('Hoja de vida actualizada')}
              >
                <i className="fas fa-sync me-2"></i> Actualizar HV
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
