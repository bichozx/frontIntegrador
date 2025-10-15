import { CertificadoModal } from '../modales/certificadoModal/CertificadoModal';
import { HabilidadModal } from '../modales/habilidadModal/HabilidadModal';
import { Link } from 'react-router-dom';
import { ProyectoModal } from '../modales/proyectoModal/ProyectoModal';

export const CreateHVStudent = ({ 
  handleSubmit, 
  handleChange,
  handleSaveProyecto,
  handleSaveHabilidad,
  handleSaveCertificado,
  showProyectoModal,
  showHabilidadModal,
  showCertificadoModal,
  setShowProyectoModal,
  setShowHabilidadModal,
  setShowCertificadoModal,
  formData }) => {
  console.log('🚀 ~ CreateHVStudent ~ formData:', formData)

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
              <label className="form-label" htmlFor="estudiante">Estudiante</label>
              <select
                id="estudiante"
                className="form-control"
                required
                value={formData.estudiante || ''}
                onChange={handleChange}
              >
                <option value="">Seleccionar Estudiante</option>
                <option value="1">Alan Brito</option>
                <option value="2">Zoyla Vaca</option>
              </select>
            </div>

            {/* Resumen */}
            <div className="form-group mb-3">
              <label className="form-label" htmlFor="resumen">Resumen</label>
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
              <label className="form-label" htmlFor="intereses">Intereses</label>
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
              <label className="form-label" htmlFor="experiencia">Experiencia</label>
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
              <label className="form-label" htmlFor="programa">Programa</label>
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
              <label className="form-label" htmlFor="semestre">Semestre</label>
              <input
                type="text"
                id="semestre"
                className="form-control"
                value={formData.semestre || ''}
                onChange={handleChange}
              />
            </div>

            {/* Proyectos */}
            {/* <div className="form-group mb-3">
              <label className="form-label">Proyectos</label>
              <button
                type="button"
                className="btn btn-sm btn-primary ms-2 mb-2"
                onClick={() => setShowProyectoModal(true)}
              >
                + Agregar Proyecto
              </button>
              <ul className="list-group">
                {proyectos.map((p, i) => (
                  <li key={i} className="list-group-item">
                    <strong>{p.titulo}</strong> - {p.descripcion}
                  </li>
                ))}
              </ul>
            </div> */}

            {/* Habilidades */}
            {/* <div className="form-group mb-3">
              <label className="form-label">Habilidades</label>
              <button
                type="button"
                className="btn btn-sm btn-primary ms-2 mb-2"
                onClick={() => setShowHabilidadModal(true)}
              >
                + Agregar Habilidad
              </button>
              <ul className="list-group">
                {habilidades.map((h, i) => (
                  <li key={i} className="list-group-item">
                    <strong>{h.nombre}</strong> - {h.nivel} ({h.tipo})
                  </li>
                ))}
              </ul>
            </div> */}

            {/* Certificados */}
            {/* <div className="form-group mb-3">
              <label className="form-label">Certificados</label>
              <button
                type="button"
                className="btn btn-sm btn-primary ms-2 mb-2"
                onClick={() => setShowCertificadoModal(true)}
              >
                + Agregar Certificado
              </button>
              <ul className="list-group">
                {certificados.map((c, i) => (
                  <li key={i} className="list-group-item">
                    <strong>{c.nombre}</strong> - {c.institucion} ({c.fecha})
                  </li>
                ))}
              </ul>
            </div> */}

            {/* Botones */}
            {/* <div className="d-flex gap-3">
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
            </div> */}
          </form>
        </div>

        {/* Modales */}
        {showProyectoModal && (
          <ProyectoModal onClose={() => setShowProyectoModal(false)} onSave={handleSaveProyecto} />
        )}
        {showHabilidadModal && (
          <HabilidadModal onClose={() => setShowHabilidadModal(false)} onSave={handleSaveHabilidad} />
        )}
        {showCertificadoModal && (
          <CertificadoModal onClose={() => setShowCertificadoModal(false)} onSave={handleSaveCertificado} />
        )}
      </div>
    </div>
  );
};
