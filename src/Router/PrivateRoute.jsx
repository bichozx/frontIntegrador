// import { Navigate } from "react-router-dom";
// import React from "react";
// import { useAuthStore } from "../store/useAuthStore";

// export const PrivateRoute = ({ children }) => {
//   const { token } = useAuthStore();


//   if (!token && !localStorage.getItem("token")) {
//     return <Navigate to="/" replace />;
//   }

 
//   return children;
// };

// src/routes/PrivateRoute.jsx
import React, { useEffect, useState } from "react";

import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export const PrivateRoute = ({ children }) => {
  const { token, setToken } = useAuthStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula carga inicial (por ejemplo, cuando recargas la página)
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
    }

    // Espera breve para mostrar el loader
    const timeout = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timeout);
  }, [setToken]);

  // Mostrar loader mientras verifica sesión
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
        <div className="spinner-border text-primary" style={{ width: "4rem", height: "4rem" }} role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  // Si no hay token, redirige al login
  if (!token) {
    return <Navigate to="/" replace />;
  }

  // Si hay token, renderiza el contenido protegido
  return children;
};
