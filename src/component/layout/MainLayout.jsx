import { Footer } from "./Footer";
import { MenuSideBar } from "./MenuSideBar";
import { Outlet } from "react-router-dom";
import React from "react";

export const MainLayout = () => {
  return (
    <div className="d-flex min-vh-100">
      {/* Sidebar */}
      <MenuSideBar />

      {/* Contenedor principal */}
      <div className="d-flex flex-column flex-grow-1 bg-light">
        {/* Contenido dinámico */}
        <main className="flex-grow-1 p-4">
          <Outlet />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};
