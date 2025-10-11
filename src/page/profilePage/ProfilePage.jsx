import React, { useState } from 'react'

import { Profile } from '../../component/profile/Profile';

export const ProfilePage = () => {
  // Estado inicial del perfil (luego se conectará con la API)
  const [perfil, setPerfil] = useState({
    nombre: "Admin",
    apellido: "Sistema",
    email: "admin@sistema.edu",
    telefono: "+57 300 123 4567",
    direccion: "Calle 123 #45-67",
    ciudad: "Bogotá",
    pais: "Colombia",
    rol: "Administrador",
    fechaRegistro: "Ene 2024",
  });

  const [editMode, setEditMode] = useState(false);
  const [modoOscuro, setModoOscuro] = useState(false);
  const [notificaciones, setNotificaciones] = useState(true);
  const [idioma, setIdioma] = useState("es");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setPerfil((prev) => ({ ...prev, [id.replace("input-", "")]: value }));
  };

  const handleGuardar = () => {
    console.log("Datos guardados:", perfil);
    setEditMode(false);
  };
  return (
    <div>
      <Profile
        editMode={editMode}
        modoOscuro={modoOscuro}
        setModoOscuro={setModoOscuro}
        notificaciones={notificaciones}
        idioma={idioma}
        setIdioma={setIdioma}
        setNotificaciones={setNotificaciones}
        handleChange={handleChange}
        handleGuardar={handleGuardar}

      />
    </div>
  )
}
