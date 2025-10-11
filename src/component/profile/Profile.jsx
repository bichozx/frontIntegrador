import { FaArrowLeft, FaCalendarAlt, FaCamera, FaEdit, FaEnvelope, FaMapMarkerAlt, FaPhone, FaSave, FaTimes } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import React from 'react';
import profileImg from "../../assets/img/undraw_profile.svg"

export const Profile = ({
 
  perfil,
  editMode,
  setEditMode,
  handleChange,
  handleGuardar,
  notificaciones,
  modoOscuro,
  setNotificaciones,
  setModoOscuro,
  idioma,
  setIdioma
}) => {
  return (
    <div id="wrapper" className={`min-h-screen flex flex-col bg-gray-50`}>
      <div id="content-wrapper" className="flex flex-col w-full">
        <div id="content">
          <div className="container-fluid px-4 py-4">
            {/* Encabezado */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Perfil de Usuario</h1>
              <Link to="/dashboard" className="btn btn-sm btn-primary shadow-sm">
                <FaArrowLeft className="mr-2" /> Volver al Inicio
              </Link>
            </div>

            <div className="row">
              {/* Columna Izquierda */}
              <div className="col-lg-4 col-xl-3">
                <div className="card shadow mb-4 text-center p-3">
                  <div className="position-relative d-inline-block">
                    <img
                      src={profileImg}
                      alt="Foto de perfil"
                      className="img-fluid rounded-circle mb-3"
                      style={{
                        width: '150px',
                        height: '150px',
                        objectFit: 'cover',
                      }}
                    />
                    <button
                      className="btn btn-primary btn-sm position-absolute bottom-0 end-0 rounded-circle"
                      style={{ width: '40px', height: '40px' }}
                      onClick={() =>
                        document.getElementById('foto-perfil').click()
                      }
                    >
                      <FaCamera />
                    </button>
                    <input
                      type="file"
                      id="foto-perfil"
                      className="d-none"
                      accept="image/*"
                    />
                  </div>

                  <h4 className="font-weight-bold">
                    {perfil} {perfil}
                  </h4>
                  <p className="text-muted mb-1">{perfil}</p>
                  <p className="text-muted mb-3">{perfil}</p>

                  <div className="small text-gray-600">
                    <FaCalendarAlt className="mr-1" /> Miembro desde:{' '}
                    {perfil}
                  </div>
                </div>

                {/* Información de contacto */}
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Información de Contacto
                    </h6>
                  </div>
                  <div className="card-body">
                    <div className="mb-3">
                      <strong>
                        <FaEnvelope className="mr-2" /> Email
                      </strong>
                      <p className="text-muted mb-0">{perfil}</p>
                    </div>
                    <div className="mb-3">
                      <strong>
                        <FaPhone className="mr-2" /> Teléfono
                      </strong>
                      <p className="text-muted mb-0">{perfil}</p>
                    </div>
                    <div>
                      <strong>
                        <FaMapMarkerAlt className="mr-2" /> Ubicación
                      </strong>
                      <p className="text-muted mb-0">
                        {perfil}, {perfil}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Columna Derecha */}
              <div className="col-lg-8 col-xl-9">
                {/* Información personal */}
                <div className="card shadow mb-4">
                  <div className="card-header py-3 d-flex justify-content-between align-items-center">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Información Personal
                    </h6>
                    {!editMode && (
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => setEditMode(true)}
                      >
                        <FaEdit className="mr-1" /> Editar
                      </button>
                    )}
                  </div>

                  <div className="card-body">
                    <form>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Nombres</label>
                          <input
                            type="text"
                            id="input-nombre"
                            value={perfil}
                            className="form-control"
                            disabled={!editMode}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Apellidos</label>
                          <input
                            type="text"
                            id="input-apellido"
                            value={perfil}
                            className="form-control"
                            disabled={!editMode}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Email</label>
                          <input
                            type="email"
                            id="input-email"
                            value={perfil}
                            className="form-control"
                            disabled={!editMode}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Teléfono</label>
                          <input
                            type="tel"
                            id="input-telefono"
                            value={perfil}
                            className="form-control"
                            disabled={!editMode}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Dirección</label>
                        <textarea
                          id="input-direccion"
                          rows="2"
                          value={perfil}
                          className="form-control"
                          disabled={!editMode}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Ciudad</label>
                          <input
                            type="text"
                            id="input-ciudad"
                            value={perfil}
                            className="form-control"
                            disabled={!editMode}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="form-label">País</label>
                          <input
                            type="text"
                            id="input-pais"
                            value={perfil}
                            className="form-control"
                            disabled={!editMode}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      {editMode && (
                        <div className="flex gap-2">
                          <button
                            type="button"
                            className="btn btn-success"
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
                    </form>
                  </div>
                </div>

                {/* Preferencias */}
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Preferencias del Sistema
                    </h6>
                  </div>
                  <div className="card-body">
                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="notificaciones-email"
                        checked={notificaciones}
                        onChange={() => setNotificaciones(!notificaciones)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="notificaciones-email"
                      >
                        Recibir notificaciones por email
                      </label>
                    </div>

                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="modo-oscuro"
                        checked={modoOscuro}
                        onChange={() => setModoOscuro(!modoOscuro)}
                      />
                      <label className="form-check-label" htmlFor="modo-oscuro">
                        Activar modo oscuro
                      </label>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Idioma preferido</label>
                      <select
                        className="form-control"
                        id="select-idioma"
                        value={idioma}
                        onChange={(e) => setIdioma(e.target.value)}
                      >
                        <option value="es">Español</option>
                        <option value="en">English</option>
                        <option value="pt">Português</option>
                      </select>
                    </div>

                    <button type="button" className="btn btn-primary mt-3">
                      <FaSave className="mr-2" /> Guardar Preferencias
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};
