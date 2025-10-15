import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

export const CreateStudent = ({
  formData,
  handleChange,
  handleSubmit,
  loading,
  error,
  success,
}) => {
  const [showAlert, setShowAlert] = useState(false);

  // 👇 Mostrar la alerta y luego ocultarla automáticamente
  useEffect(() => {
    if (success || error) {
      setShowAlert(true);
      const timer = setTimeout(() => setShowAlert(false), 3000); // se oculta en 3s
      return () => clearTimeout(timer);
    }
  }, [success, error]);

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
          {/* ✅ ALERTA Bootstrap 5 animada */}
          {showAlert && (
            <div
              className={`alert ${
                success ? "alert-success" : "alert-danger"
              } alert-dismissible fade show`}
              role="alert"
            >
              {success
                ? "✅ Estudiante creado exitosamente."
                : `❌ ${error || "Ocurrió un error al crear el estudiante."}`}
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowAlert(false)}
              ></button>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Programa */}
            <div className="form-group">
              <label htmlFor="programa" className="form-label">
                Programa
              </label>
              <input
                type="text"
                id="programa"
                className="form-control"
                value={formData.programa}
                onChange={handleChange}
                required
              />
            </div>

            {/* Semestre */}
            <div className="form-group">
              <label htmlFor="semestre" className="form-label">
                Semestre
              </label>
              <input
                type="number"
                id="semestre"
                className="form-control"
                value={formData.semestre}
                onChange={handleChange}
                required
              />
            </div>

            {/* Promedio */}
            <div className="form-group">
              <label htmlFor="promedio" className="form-label">
                Promedio
              </label>
              <input
                type="number"
                id="promedio"
                className="form-control"
                value={formData.promedio}
                onChange={handleChange}
                step="0.1"
                required
              />
            </div>

            {/* Fecha Nacimiento */}
            <div className="form-group">
              <label htmlFor="fechaNacimiento" className="form-label">
                Fecha de Nacimiento
              </label>
              <input
                type="date"
                id="fechaNacimiento"
                className="form-control"
                value={formData.fechaNacimiento}
                onChange={handleChange}
                required
              />
            </div>

            <hr />

            {/* Datos del usuario */}
            <h5>Datos del Usuario</h5>

            <div className="form-group">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                name="usuario.nombre"
                className="form-control"
                value={formData.usuario.nombre}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Correo</label>
              <input
                type="email"
                name="usuario.correo"
                className="form-control"
                value={formData.usuario.correo}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Contraseña</label>
              <input
                type="password"
                name="usuario.password"
                className="form-control"
                value={formData.usuario.password}
                onChange={handleChange}
                required
              />
            </div>

            {/* Botón de envío */}
            <button
              type="submit"
              className="btn btn-primary btn-block mt-3"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Creando...
                </>
              ) : (
                "Crear Estudiante"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
