import {
  FaArrowLeft,
  FaCertificate,
  FaEdit,
  FaProjectDiagram,
  FaSave,
  FaStar,
  FaTimes,
} from "react-icons/fa";

import { Link } from 'react-router-dom';
import React from 'react';
import profileImg from '../../assets/img/undraw_profile.svg';

export const ProfileStudentComplete = ({
  perfil,
  editMode,
  setEditMode,
  handleChange,
  handleGuardar,
}) => {
  
  return (
    <div className="container-fluid px-4 py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3 text-gray-800">Perfil del Estudiante</h1>
        <Link to="/dashboard" className="btn btn-sm btn-primary shadow-sm">
          <FaArrowLeft className="mr-2" /> Volver
        </Link>
      </div>

      {/* Card principal */}
      <div className="card shadow mb-4 p-4">
        <div className="d-flex align-items-center">
          <img
            src={profileImg}
            alt="Foto de perfil"
            className="rounded-circle mr-3"
            style={{ width: '120px', height: '120px' }}
          />
          <div>
            <h4 className="font-weight-bold mb-0">
              Estudiante {perfil.nombre}
            </h4>
            <p className="text-muted mb-1">{perfil.resumen}</p>
            <p className="small text-gray-600">{perfil.experiencia}</p>
          </div>
        </div>
      </div>

      {/* Información personal */}
      <div className="card shadow mb-4 p-4">
        <div className="d-flex justify-content-between">
          <h6 className="font-weight-bold text-primary mb-3">
            Información Personal
          </h6>
          {!editMode && (
            <button
              className="btn btn-sm btn-primary"
              onClick={() => setEditMode(true)}
            >
              <FaEdit className="mr-1" /> Editar
            </button>
          )}
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label>Resumen</label>
            <textarea
              id="resumen"
              className="form-control"
              value={perfil.resumen || ''}
              disabled={!editMode}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label>Intereses</label>
            <textarea
              id="intereses"
              className="form-control"
              value={perfil.intereses || ''}
              disabled={!editMode}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-3">
          <label>Experiencia</label>
          <textarea
            id="experiencia"
            className="form-control"
            value={perfil.experiencia || ''}
            disabled={!editMode}
            onChange={handleChange}
          />
        </div>

        {editMode && (
          <div>
            <button
              type="button"
              className="btn btn-success me-2"
              onClick={handleGuardar}
            >
              <FaSave className="mr-1" /> Guardar Cambios
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setEditMode(false)}
            >
              <FaTimes className="mr-1" /> Cancelar
            </button>
          </div>
        )}
      </div>

      {/* Habilidades */}
      <div className="card shadow mb-4 p-4">
        <h6 className="font-weight-bold text-primary mb-3">
          <FaStar className="mr-2" /> Habilidades
        </h6>
        <ul>
          {perfil.habilidades?.map((h) => (
            <li key={h.id}>{h.nombre}</li>
          ))}
        </ul>
      </div>

      {/* Proyectos */}
      <div className="card shadow mb-4 p-4">
        <h6 className="font-weight-bold text-primary mb-3">
          <FaProjectDiagram className="mr-2" /> Proyectos
        </h6>
        <ul>
          {perfil.proyectosDetalle?.map((p) => (
            <li key={p.id}>
              <strong>{p.titulo}</strong> – {p.descripcion}
            </li>
          ))}
        </ul>
      </div>

      {/* Certificados */}
      <div className="card shadow mb-4 p-4">
        <h6 className="font-weight-bold text-primary mb-3">
          <FaCertificate className="mr-2" /> Certificados
        </h6>
        <ul>
          {perfil.certificados?.map((c) => (
            <li key={c.id}>
              <strong>{c.nombre}</strong> ({c.institucion})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
