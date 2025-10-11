import React from 'react'

export const CreateFamiliar = ({
  handleSubmit,
  formData,
  handleChange

}) => {
  return (
    <>
 <div className="container-fluid">
        
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Crear Familiar</h1>
          <a
            href="/family-list"
            className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          >
            <i className="fas fa-list fa-sm text-white-50"></i> Listado
          </a>
        </div>

       
        <div className="row">
          <div className="col-8">
            <form id="form-familiar" onSubmit={handleSubmit}>
              {/* Estudiante */}
              <div className="form-group">
                <label className="form-label" htmlFor="estudiante">
                  Estudiante
                </label>
                <select
                  id="estudiante"
                  className="form-control"
                  value={formData}
                  onChange={handleChange}
                  required
                >
                  <option value="">Seleccionar Estudiante</option>
                  <option value="1">Alan Brito</option>
                  <option value="2">Zoyla Vaca</option>
                </select>
              </div>

              {/* Información del Familiar */}
              <div className="form-group row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                  <label className="form-label" htmlFor="nombre">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    className="form-control"
                    value={formData}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-sm-6">
                  <label className="form-label" htmlFor="apellido">
                    Apellido
                  </label>
                  <input
                    type="text"
                    id="apellido"
                    className="form-control"
                    value={formData}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                  <label className="form-label" htmlFor="parentesco">
                    Parentesco
                  </label>
                  <select
                    id="parentesco"
                    className="form-control"
                    value={formData}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Seleccionar Parentesco</option>
                    <option value="Madre">Madre</option>
                    <option value="Padre">Padre</option>
                    <option value="Hermano/a">Hermano/a</option>
                    <option value="Abuelo/a">Abuelo/a</option>
                    <option value="Tío/a">Tío/a</option>
                    <option value="Primo/a">Primo/a</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
                <div className="col-sm-6">
                  <label className="form-label" htmlFor="ocupacion">
                    Ocupación
                  </label>
                  <input
                    type="text"
                    id="ocupacion"
                    className="form-control"
                    value={formData}
                    onChange={handleChange}
                  />
                </div>
              </div>

              
              <div className="form-group row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                  <label className="form-label" htmlFor="telefono">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    className="form-control"
                    value={formData}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-sm-6">
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    value={formData}
                    onChange={handleChange}
                  />
                </div>
              </div>

              
              <div className="form-group">
                <label className="form-label" htmlFor="direccion">
                  Dirección
                </label>
                <input
                  type="text"
                  id="direccion"
                  className="form-control"
                  value={formData}
                  onChange={handleChange}
                />
              </div>

             
              <div className="form-group row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="acudiente"
                      checked={formData}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="acudiente">
                      Es acudiente
                    </label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="emergencia"
                      checked={formData}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="emergencia">
                      Contacto de emergencia
                    </label>
                  </div>
                </div>
              </div>

             
              <div className="form-group">
                <label className="form-label" htmlFor="observaciones">
                  Observaciones
                </label>
                <textarea
                  className="form-control"
                  id="observaciones"
                  rows="4"
                  placeholder="Información adicional sobre el familiar"
                  value={formData}
                  onChange={handleChange}
                ></textarea>
              </div>

              
              <button
                type="submit"
                className="btn btn-primary btn-block mb-4 shadow-sm"
              >
                <i className="fas fa-save me-2"></i> Crear Familiar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

