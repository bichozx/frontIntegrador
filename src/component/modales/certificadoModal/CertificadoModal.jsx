// src/component/modales/certificadoModal/CertificadoModal.jsx
import React, { useState } from "react";

export const CertificadoModal = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    institucion: "",
    fecha: "",
    urlArchivo: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setFormData({ nombre: "", institucion: "", fecha: "", urlArchivo: "" });
    onClose();
  };

  return (
    <div
      className="modal fade show"
      style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-0 shadow-lg rounded-3">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">Agregar Certificado</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  className="form-control"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Institución</label>
                <input
                  type="text"
                  id="institucion"
                  className="form-control"
                  value={formData.institucion}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Fecha</label>
                <input
                  type="date"
                  id="fecha"
                  className="form-control"
                  value={formData.fecha}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">URL/Archivo (opcional)</label>
                <input
                  type="text"
                  id="urlArchivo"
                  className="form-control"
                  value={formData.urlArchivo}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Cancelar
              </button>
              <button type="submit" className="btn btn-success">
                Guardar Certificado
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
