// src/component/modales/habilidadModal/HabilidadModal.jsx
import React, { useState } from "react";

export const HabilidadModal = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    nivel: "",
    tipo: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setFormData({ nombre: "", nivel: "", tipo: "" });
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
            <h5 className="modal-title">Agregar Habilidad</h5>
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
                <label className="form-label">Nivel</label>
                <input
                  type="text"
                  id="nivel"
                  className="form-control"
                  value={formData.nivel}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Tipo</label>
                <select
                  id="tipo"
                  className="form-control"
                  value={formData.tipo}
                  onChange={handleChange}
                  required
                >
                  <option value="">Seleccionar tipo</option>
                  <option value="Técnica">Técnica</option>
                  <option value="Blanda">Blanda</option>
                </select>
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Cancelar
              </button>
              <button type="submit" className="btn btn-success">
                Guardar Habilidad
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
