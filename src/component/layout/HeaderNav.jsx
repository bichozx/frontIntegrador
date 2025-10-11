import { FaBars, FaSearch, FaSignOutAlt, FaUser } from 'react-icons/fa';

import React from 'react'
import profileImg from "../../assets/img/undraw_profile.svg"
import { useNavigate } from 'react-router-dom';

export const HeaderNav = () => {
  const navigate = useNavigate()
  //   const handleLogout = () => {
  //   // 🔐 Aquí más adelante conectarás con la API o limpiarás el token del usuario
  //   console.log("Cerrar sesión");
  // };
  return (
     <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      {/* Sidebar Toggle (Topbar) */}
      <button
        id="sidebarToggleTop"
        className="btn btn-link d-md-none rounded-circle mr-3"
      >
        <FaBars />
      </button>

      {/* Topbar Search */}
      <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
        <div className="input-group">
          <input
            type="text"
            className="form-control bg-light border-0 small"
            placeholder="Buscar..."
            aria-label="Search"
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="button">
              <FaSearch size={12} />
            </button>
          </div>
        </div>
      </form>

      {/* Topbar Navbar */}
      <ul className="navbar-nav ml-auto">
        {/* User Information */}
        <li className="nav-item dropdown no-arrow">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="userDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">
              Admin Sistema
            </span>
            <img
              className="img-profile rounded-circle"
              src={profileImg}
              alt="Perfil"
              width="40"
              height="40"
            />
          </a>

          {/* Dropdown - User Information */}
          <div
            className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
            aria-labelledby="userDropdown"
          >
            <a className="dropdown-item" href="/profile">
              <FaUser className="fa-sm fa-fw mr-2 text-gray-400" />
              Perfil
            </a>
            <div className="dropdown-divider"></div>
            <button
              type="button"
              className="dropdown-item"
              onClick={() => navigate("/")}
            >
              <FaSignOutAlt className="fa-sm fa-fw mr-2 text-gray-400" />
              Cerrar Sesión
            </button>
          </div>
        </li>
      </ul>
    </nav>
  )
}
