import React, { useEffect, useState } from 'react';

import { CreateHVStudent } from '../../component/student/CreateHVStudent';
import { useAuthStore } from '../../store/useAuthStore';
import { useProfileStore } from '../../store/useProfileStore';

export const StudentProfile = () => {
  const [formData, setFormData] = useState({
    estudiante: '',
    institucionAnterior: '',
    anioGraduacion: '',
    promedioAnterior: '',
    conductaAnterior: '',
    logros: '',
    actividades: '',
    observaciones: '',
  });

  const { noPerfilStudent, estudiantesSinPerfil, loading } = useProfileStore();
  const { rol, estudianteId } = useAuthStore();
  



  useEffect(() => {
    noPerfilStudent();
  }, [noPerfilStudent]);

  useEffect(() => {
    if (rol === 'Estudiante' && estudianteId) {
      setFormData((prev) => ({ ...prev, estudiante: estudianteId }));
    }
  }, [rol, estudianteId]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    let dataToSend = { ...formData };

    // 🔹 Si el usuario es estudiante, ya tenemos el ID en el store
    if (rol === 'Estudiante') {
      dataToSend.estudiante = estudianteId;
    }

    // 🔹 Si es administrador, el ID viene del selector (ya guardado en formData)
    else if (rol === 'Administrador') {
      if (!formData.estudiante) {
        alert('Por favor selecciona un estudiante antes de crear el perfil');
        return;
      }
    }

    console.log('📤 Datos enviados al backend:', dataToSend);

    try {
      // Aquí iría la llamada al backend:
      // await createProfile(dataToSend)
      alert('✅ Hoja de vida creada correctamente');
    } catch (error) {
      console.error('❌ Error al crear perfil:', error);
      alert('Ocurrió un error al crear la hoja de vida');
    }
  };

 

  return (
    <>
      <CreateHVStudent
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        loading={loading}
        formData={formData}
        rol={rol}
        estudiantesSinPerfil={estudiantesSinPerfil}
       
      />
    </>
  );
};
