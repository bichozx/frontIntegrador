import { Link } from 'react-router-dom';
import React from 'react'

export const CreateStudent = ({
  formData,
  handleChange, 
  handleSubmit
}) => {
   return (
    <div className="container-fluid">
      
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Crear Estudiante</h1>
        <Link
          to="/student-list"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-list fa-sm text-white-50"></i> Listado
        </Link>
      </div>

      
      <div className="row">
        <div className="col-lg-8">
          <form onSubmit={handleSubmit}>
            {/* Nombre y Apellido */}
            <div className="form-group row">
              <div className="col-sm-6 mb-3 mb-sm-0">
                <label htmlFor="nombre" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  className="form-control"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-sm-6">
                <label htmlFor="apellido" className="form-label">
                  Apellido
                </label>
                <input
                  type="text"
                  id="apellido"
                  className="form-control"
                  value={formData.apellido}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            
            <div className="form-group">
              <label htmlFor="celular" className="form-label">
                Celular
              </label>
              <input
                type="tel"
                id="celular"
                className="form-control"
                value={formData.celular}
                onChange={handleChange}
                required
              />
            </div>

            
            <div className="form-group">
              <label htmlFor="grado" className="form-label">
                Grado
              </label>
              <select
                id="grado"
                className="form-control"
                value={formData.grado}
                onChange={handleChange}
                required
              >
                <option value="">Seleccionar Grado</option>
                <option value="1°">1° Primaria</option>
                <option value="2°">2° Primaria</option>
                <option value="3°">3° Primaria</option>
                <option value="4°">4° Primaria</option>
                <option value="5°">5° Primaria</option>
                <option value="6°">6° Primaria</option>
                <option value="7°">7° Secundaria</option>
                <option value="8°">8° Secundaria</option>
                <option value="9°">9° Secundaria</option>
                <option value="10°">10° Secundaria</option>
                <option value="11°">11° Secundaria</option>
              </select>
            </div>

            
            <div className="form-group row">
              <div className="col-sm-6 mb-3 mb-sm-0">
                <label htmlFor="direccionPrincipal" className="form-label">
                  Dirección Principal
                </label>
                <input
                  type="text"
                  id="direccionPrincipal"
                  className="form-control"
                  value={formData.direccionPrincipal}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-sm-6">
                <label htmlFor="direccionSecundaria" className="form-label">
                  Dirección Secundaria
                </label>
                <input
                  type="text"
                  id="direccionSecundaria"
                  className="form-control"
                  value={formData.direccionSecundaria}
                  onChange={handleChange}
                />
              </div>
            </div>

            
            <div className="form-group">
              <label htmlFor="infoAcademica" className="form-label">
                Información Académica
              </label>
              <textarea
                id="infoAcademica"
                className="form-control"
                rows="4"
                value={formData.infoAcademica}
                onChange={handleChange}
              ></textarea>
            </div>

            
            <button type="submit" className="btn btn-primary btn-block mb-3">
              Crear Estudiante
            </button>
            <button
              type="button"
              className="btn btn-success btn-block mb-4 d-none"
            >
              Actualizar Estudiante
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
