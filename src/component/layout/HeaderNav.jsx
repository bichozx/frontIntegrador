// import { FaBars, FaSearch, FaSignOutAlt, FaUser } from 'react-icons/fa';

// import React from 'react'
// import profileImg from "../../assets/img/undraw_profile.svg"
// import { useAuthStore } from '../../store/useAuthStore';
// import { useNavigate } from 'react-router-dom';

// export const HeaderNav = () => {
//   const navigate = useNavigate()
//   const {logout, loading  } =useAuthStore()

//     const handleLogout = async () => {
//     // 🔐 Aquí más adelante conectarás con la API o limpiarás el token del usuario
//     await logout();
//     navigate('/');
//     console.log("Cerrar sesión");
//   };

//   return (
//      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
//       {/* Sidebar Toggle (Topbar) */}
//       <button
//         id="sidebarToggleTop"
//         className="btn btn-link d-md-none rounded-circle mr-3"
//       >
//         <FaBars />
//       </button>

//       {/* Topbar Search */}
//       <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
//         <div className="input-group">
//           <input
//             type="text"
//             className="form-control bg-light border-0 small"
//             placeholder="Buscar..."
//             aria-label="Search"
//           />
//           <div className="input-group-append">
//             <button className="btn btn-primary" type="button">
//               <FaSearch size={12} />
//             </button>
//           </div>
//         </div>
//       </form>

//       {/* Topbar Navbar */}
//       <ul className="navbar-nav ml-auto">
//         {/* User Information */}
//         <li className="nav-item dropdown no-arrow">
//           <a
//             className="nav-link dropdown-toggle"
//             href="#"
//             id="userDropdown"
//             role="button"
//             data-bs-toggle="dropdown"
//             aria-haspopup="true"
//             aria-expanded="false"
//           >
//             <span className="mr-2 d-none d-lg-inline text-gray-600 small">
//               Admin Sistema
//             </span>
//             <img
//               className="img-profile rounded-circle"
//               src={profileImg}
//               alt="Perfil"
//               width="40"
//               height="40"
//             />
//           </a>

//           {/* Dropdown - User Information */}
//           <div
//             className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
//             aria-labelledby="userDropdown"
//           >
//             <a className="dropdown-item" href="/profile">
//               <FaUser className="fa-sm fa-fw mr-2 text-gray-400" />
//               Perfil
//             </a>
//             <div className="dropdown-divider"></div>
//               <button
//   type="button"
//   className="dropdown-item position-relative d-flex align-items-center gap-2 text-gray-700 px-3 py-2"
//   onClick={handleLogout}
//   disabled={loading}
// >
//   {loading ? (
//     <>
//       <span
//         className="spinner-border spinner-border-sm me-2"
//         role="status"
//         aria-hidden="true"
//       ></span>
//       Cerrar Sesión...
//     </>
//   ) : (
//     <>
//       <FaSignOutAlt className="fa-sm fa-fw text-gray-400 me-2" />
//       Cerrar Sesión
//     </>
//   )}
// </button>

//           </div>
//         </li>
//       </ul>
//     </nav>
//   )
// }

import { FaBars, FaSearch, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

import React from 'react';
import profileImg from '../../assets/img/undraw_profile.svg';
import { useAuthStore } from '../../store/useAuthStore';

export const HeaderNav = () => {
  const navigate = useNavigate();
  const { logout, loading } = useAuthStore();

  const handleLogout = async () => {
    await logout(navigate);
  };

  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 shadow">
      {/* Sidebar Toggle */}
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
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="button">
              <FaSearch size={12} />
            </button>
          </div>
        </div>
      </form>

      {/* User Information */}
      <ul className="navbar-nav ml-auto">
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

          <div
            className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
            aria-labelledby="userDropdown"
          >
            <Link className="dropdown-item" to="/profile">
              <FaUser className="fa-sm fa-fw mr-2 text-gray-400" />
              Perfil
            </Link>
            <div className="dropdown-divider"></div>

            <Link
              type="button"
              className="dropdown-item d-flex align-items-center"
              onClick={handleLogout}
              disabled={loading}
            >
              {loading ? (
                <>
                  <div
                    className="spinner-border spinner-border-sm text-primary me-2"
                    role="status"
                  >
                    <span className="visually-hidden">Cargando...</span>
                  </div>
                  <FaSignOutAlt className="me-2 text-gray-400" />
                  Cerrar Sesión...
                </>
              ) : (
                <>
                  <FaSignOutAlt className="me-2 text-gray-400" />
                  Cerrar Sesión
                </>
              )}
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};
