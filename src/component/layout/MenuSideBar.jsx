import { Link } from "react-router-dom";
import React from "react";

export const MenuSideBar = () => {
  return (
    <ul
      className="navbar-nav bg-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* Brand */}
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="/dashboard"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-graduation-cap"></i>
        </div>
        <div className="sidebar-brand-text mx-3">Sistema Educativo</div>
      </Link>

      <hr className="sidebar-divider my-0" />

      {/* Dashboard */}
      <li className="nav-item">
        <Link className="nav-link" to="dashboard">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>
      </li>

      <hr className="sidebar-divider" />

      {/* Sección de módulos */}
      <div className="sidebar-heading">Módulos Educativos</div>

      {/* Ingreso y registro */}
      <li className="nav-item">
        <button
          className="nav-link collapsed w-100 text-start"
          data-bs-toggle="collapse"
          data-bs-target="#collapseIngreso"
          aria-expanded="false"
          aria-controls="collapseIngreso"
        >
          <i className="fas fa-fw fa-user-plus me-2"></i>
          Ingreso y registro
        </button>
        <div id="collapseIngreso" className="collapse" data-bs-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            
            <Link className="collapse-item" to="/student-list">
              Ver Estudiantes
            </Link>
            <Link className="collapse-item" to="/create-student">
              Crear Estudiante
            </Link>
          </div>
        </div>
      </li>

      {/* Historial */}
      <li className="nav-item">
        <button
          className="nav-link collapsed w-100 text-start"
          data-bs-toggle="collapse"
          data-bs-target="#collapseHistorial"
          aria-expanded="false"
          aria-controls="collapseHistorial"
        >
          <i className="fas fa-fw fa-history me-2"></i>
          Hy estudiantil
        </button>
        <div id="collapseHistorial" className="collapse" data-bs-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            
            <Link className="collapse-item" to="/profile-list">
              Ver Historial
            </Link>
            <Link className="collapse-item" to="/create-Profile">
              Crear Registro
            </Link>
          </div>
        </div>
      </li>

      {/* Módulo Familiar */}
      <li className="nav-item">
        <button
          className="nav-link collapsed w-100 text-start"
          data-bs-toggle="collapse"
          data-bs-target="#collapseFamiliar"
          aria-expanded="false"
          aria-controls="collapseFamiliar"
        >
          <i className="fas fa-fw fa-users me-2"></i>
          Módulo Familiar
        </button>
        <div id="collapseFamiliar" className="collapse" data-bs-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            
            <Link className="collapse-item" to="/family-list">
              Ver Familiares
            </Link>
            <Link className="collapse-item" to="/create-family">
              Crear Familiar
            </Link>
          </div>
        </div>
      </li>

      {/* Notas */}
      <li className="nav-item">
        <button
          className="nav-link collapsed w-100 text-start"
          data-bs-toggle="collapse"
          data-bs-target="#collapseNotas"
          aria-expanded="false"
          aria-controls="collapseNotas"
        >
          <i className="fas fa-fw fa-clipboard-list me-2"></i>
          Seguimiento de notas
        </button>
        <div id="collapseNotas" className="collapse" data-bs-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            
            <Link className="collapse-item" to="/note-list">
              Ver Notas
            </Link>
            <Link className="collapse-item" to="/create-note">
              Registrar Nota
            </Link>
          </div>
        </div>
      </li>

      {/* Asistencias */}
      <li className="nav-item">
        <button
          className="nav-link collapsed w-100 text-start"
          data-bs-toggle="collapse"
          data-bs-target="#collapseAsistencias"
          aria-expanded="false"
          aria-controls="collapseAsistencias"
        >
          <i className="fas fa-fw fa-calendar-check me-2"></i>
          Asistencias
        </button>
        <div id="collapseAsistencias" className="collapse" data-bs-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            
            <Link className="collapse-item" to="/assistance-list">
              Ver Asistencias
            </Link>
            <Link className="collapse-item" to="/create-assistance">
              Registrar Asistencia
            </Link>
          </div>
        </div>
      </li>

      {/* Bienestar */}
      <li className="nav-item">
        <button
          className="nav-link collapsed w-100 text-start"
          data-bs-toggle="collapse"
          data-bs-target="#collapseBienestar"
          aria-expanded="false"
          aria-controls="collapseBienestar"
        >
          <i className="fas fa-fw fa-heart me-2"></i>
          Bienestar Estudiantil
        </button>
        <div id="collapseBienestar" className="collapse" data-bs-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            
            <Link className="collapse-item" to="/welfare-list">
              Ver Registros
            </Link>
            <Link className="collapse-item" to="/create-welfare">
              Crear Registro
            </Link>
          </div>
        </div>
      </li>

      {/* Estadísticas */}
      <li className="nav-item">
        <button
          className="nav-link collapsed w-100 text-start"
          data-bs-toggle="collapse"
          data-bs-target="#collapseEstadisticas"
          aria-expanded="false"
          aria-controls="collapseEstadisticas"
        >
          <i className="fas fa-fw fa-chart-bar me-2"></i>
          Estadísticas
        </button>
        <div id="collapseEstadisticas" className="collapse" data-bs-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            
            <Link className="collapse-item" to="/statistics">
              Ver Reportes
            </Link>
          </div>
        </div>
      </li>

      <hr className="sidebar-divider" />

      {/* Toggler */}
      <div className="text-center d-none d-md-inline">
        <button
          className="rounded-circle border-0"
          id="sidebarToggle"
          onClick={() =>
            document.querySelector(".sidebar")?.classList.toggle("toggled")
          }
        ></button>
      </div>
    </ul>
  );
};

