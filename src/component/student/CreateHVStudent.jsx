import { Link } from 'react-router-dom';
import React from 'react';

export const CreateHVStudent = ({
  handleSubmit,
  handleChange,
  formData
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
            
            <div className="form-group mb-3">
              <label className="form-label" htmlFor="estudiante">
                Estudiante
              </label>
              <select
                id="estudiante"
                className="form-control"
                required
                value={formData.estudiante}
                onChange={handleChange}
              >
                <option value="">Seleccionar Estudiante</option>
                <option value="1">Alan Brito</option>
                <option value="2">Zoyla Vaca</option>
              </select>
            </div>

            
            <div className="form-group mb-3">
              <label className="form-label" htmlFor="institucionAnterior">
                Institución Anterior
              </label>
              <input
                type="text"
                id="institucionAnterior"
                className="form-control"
                required
                value={formData.institucionAnterior}
                onChange={handleChange}
              />
            </div>

            
            <div className="form-group row">
              <div className="col-sm-6 mb-3 mb-sm-0">
                <label className="form-label" htmlFor="anioGraduacion">
                  Año de Graduación
                </label>
                <input
                  type="number"
                  id="anioGraduacion"
                  className="form-control"
                  min="2000"
                  max="2030"
                  required
                  value={formData.anioGraduacion}
                  onChange={handleChange}
                />
              </div>
              <div className="col-sm-6">
                <label className="form-label" htmlFor="promedioAnterior">
                  Promedio Anterior
                </label>
                <input
                  type="number"
                  id="promedioAnterior"
                  className="form-control"
                  step="0.1"
                  min="0"
                  max="5"
                  required
                  value={formData.promedioAnterior}
                  onChange={handleChange}
                />
              </div>
            </div>

            
            <div className="form-group mb-3">
              <label className="form-label" htmlFor="conductaAnterior">
                Conducta Anterior
              </label>
              <select
                id="conductaAnterior"
                className="form-control"
                required
                value={formData.conductaAnterior}
                onChange={handleChange}
              >
                <option value="">Seleccionar Conducta</option>
                <option value="Excelente">Excelente</option>
                <option value="Buena">Buena</option>
                <option value="Regular">Regular</option>
                <option value="Mala">Mala</option>
              </select>
            </div>

            
            <div className="form-group mb-3">
              <label className="form-label" htmlFor="logros">
                Logros y Reconocimientos
              </label>
              <textarea
                className="form-control"
                id="logros"
                rows="3"
                placeholder="Ingrese los logros académicos, deportivos, culturales, etc."
                value={formData.logros}
                onChange={handleChange}
              ></textarea>
            </div>

            
            <div className="form-group mb-3">
              <label className="form-label" htmlFor="actividades">
                Actividades Extracurriculares
              </label>
              <textarea
                className="form-control"
                id="actividades"
                rows="3"
                placeholder="Ingrese actividades deportivas, culturales, voluntariado, etc."
                value={formData.actividades}
                onChange={handleChange}
              ></textarea>
            </div>

            
            <div className="form-group mb-4">
              <label className="form-label" htmlFor="observaciones">
                Observaciones
              </label>
              <textarea
                className="form-control"
                id="observaciones"
                rows="4"
                placeholder="Observaciones adicionales sobre el historial del estudiante"
                value={formData.observaciones}
                onChange={handleChange}
              ></textarea>
            </div>

            
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
