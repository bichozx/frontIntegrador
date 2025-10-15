// src/component/student/ProyectoModal.jsx
import React, { useState } from "react";

export const ProyectoModal = ({ proyecto = {}, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    titulo: proyecto.titulo || "",
    descripcion: proyecto.descripcion || "",
    url: proyecto.url || "",
    tecnologias: proyecto.tecnologias || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div
      className="modal fade show"
      style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-0 shadow-lg rounded-3">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">
              {proyecto.id ? "Editar Proyecto" : "Agregar Proyecto"}
            </h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Título</label>
                <input
                  type="text"
                  className="form-control"
                  name="titulo"
                  value={formData.titulo}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Descripción</label>
                <textarea
                  className="form-control"
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={handleChange}
                  rows="3"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">URL (opcional)</label>
                <input
                  type="text"
                  className="form-control"
                  name="url"
                  value={formData.url}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Tecnologías (separadas por coma)</label>
                <input
                  type="text"
                  className="form-control"
                  name="tecnologias"
                  value={formData.tecnologias}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Cancelar
              </button>
              <button type="submit" className="btn btn-success">
                {proyecto.id ? "Guardar Cambios" : "Agregar Proyecto"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
