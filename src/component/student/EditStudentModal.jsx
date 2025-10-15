// src/component/student/EditStudentModal.jsx
import React, { useState } from "react";

export const EditStudentModal = ({ student, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    programa: student.programa || "",
    semestre: student.semestre || "",
    promedio: student.promedio || "",
    usuario: {
      nombre: student.usuario?.nombre || "",
      correo: student.usuario?.correo || "",
      password: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("usuario.")) {
      const key = name.split(".")[1];
      setFormData({
        ...formData,
        usuario: { ...formData.usuario, [key]: value },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(student.id, formData);
  };

  return (
    <div
      className="modal fade show"
      style={{
        display: "block",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-0 shadow-lg rounded-3">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">Editar Estudiante</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  name="usuario.nombre"
                  value={formData.usuario.nombre}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Correo</label>
                <input
                  type="email"
                  className="form-control"
                  name="usuario.correo"
                  value={formData.usuario.correo}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Programa</label>
                <input
                  type="text"
                  className="form-control"
                  name="programa"
                  value={formData.programa}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Semestre</label>
                <input
                  type="number"
                  className="form-control"
                  name="semestre"
                  value={formData.semestre}
                  onChange={handleChange}
                  min="1"
                  max="12"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Promedio</label>
                <input
                  type="number"
                  step="0.01"
                  className="form-control"
                  name="promedio"
                  value={formData.promedio}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Cancelar
              </button>
              <button type="submit" className="btn btn-success">
                Guardar Cambios
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
