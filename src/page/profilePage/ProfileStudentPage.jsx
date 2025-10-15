import React, { useEffect, useState } from "react";

import { ProfileStudentComplete } from '../../component/profile/ProfileStudentComplete';
import { useProfileStore } from "../../store/useProfileStore";
import { useStudentStore } from '../../store/useStudentStore';

export const ProfileStudentPage = () => {
  const { perfil, fetchPerfil, updatePerfil, loading, error } = useProfileStore();
  
 const {selectedStudentId} =useStudentStore()
 
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(null);
 
const  estudianteId  = selectedStudentId 
 

  useEffect(() => {
    if (estudianteId) {
      
      fetchPerfil(estudianteId);
    } else {
      console.warn("⚠️ No hay estudianteId disponible aún.");
    }
  }, [estudianteId, fetchPerfil]);

  useEffect(() => {
    if (perfil) {
      
      setFormData(perfil);
    }
  }, [perfil]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

 

  const handleGuardar = async () => {
    const ok = await updatePerfil(formData.id, formData);
    if (ok) {
      alert("✅ Perfil actualizado correctamente");
      setEditMode(false);
      fetchPerfil(estudianteId);
    }
  };

  if (loading) return <div className="text-center mt-4">Cargando perfil...</div>;
  if (error) return <div className="text-danger text-center mt-4">{error}</div>;
  if (!formData) return null;

  return (
    <ProfileStudentComplete
      perfil={formData}
      editMode={editMode}
      setEditMode={setEditMode}
      handleChange={handleChange}
      handleGuardar={handleGuardar}
    />
  );
};
