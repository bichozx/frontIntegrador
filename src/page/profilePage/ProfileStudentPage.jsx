import React, { useEffect, useState } from "react";

import { ProfileStudentComplete } from "../../component/profile/ProfileStudentComplete";
import { useProfileStore } from "../../store/useProfileStore";
import { useStudentStore } from "../../store/useStudentStore";

export const ProfileStudentPage = () => {
  const { perfil, fetchPerfil, createProyect, updatePerfil, loading, error } = useProfileStore();
  const { selectedStudentId } = useStudentStore();


  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(null);

  const [showProyectoModal, setShowProyectoModal] = useState(false);
  const [showHabilidadModal, setShowHabilidadModal] = useState(false);
  const [showCertificadoModal, setShowCertificadoModal] = useState(false);

  const [proyectos, setProyectos] = useState([]);
  const [habilidades, setHabilidades] = useState([]);
  const [certificados, setCertificados] = useState([]);

  useEffect(() => {
    if (selectedStudentId) {
      fetchPerfil(selectedStudentId);
    }
  }, [selectedStudentId, fetchPerfil]);

  useEffect(() => {
    if (perfil) {
      setFormData(perfil);
      setProyectos(perfil.proyectosDetalle || []);
      setHabilidades(perfil.habilidades || []);
      setCertificados(perfil.certificados || []);
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
      fetchPerfil(selectedStudentId);
    }
  };

  // 🧠 Guardar proyecto (con conexión al backend)
  const handleSaveProyecto = async (proyecto) => {
    try {
      // perfil.id es el ID del perfil del estudiante actual
      const newProyecto = await createProyect(
        proyecto.titulo,
        proyecto.descripcion,
        proyecto.url,
        proyecto.tecnologia,
        perfil.id // 👈 este es tu perfilEstudianteId real
      );

      // Actualiza el estado local
      const nuevosProyectos = [...proyectos, newProyecto];
      setProyectos(nuevosProyectos);
      setFormData({ ...formData, proyectosDetalle: nuevosProyectos });
      alert("✅ Proyecto guardado correctamente");
    } catch (err) {
      alert("❌ Error al guardar el proyecto", err);
    }
  };

  // Guardar habilidad
  const handleSaveHabilidad = (habilidad) => {
    const nuevasHabilidades = [...habilidades, habilidad];
    setHabilidades(nuevasHabilidades);
    setFormData({ ...formData, habilidades: nuevasHabilidades });
  };

  // Guardar certificado
  const handleSaveCertificado = (certificado) => {
    const nuevosCertificados = [...certificados, certificado];
    setCertificados(nuevosCertificados);
    setFormData({ ...formData, certificados: nuevosCertificados });
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
      handleSaveProyecto={handleSaveProyecto}
      handleSaveHabilidad={handleSaveHabilidad}
      handleSaveCertificado={handleSaveCertificado}
      showProyectoModal={showProyectoModal}
      showHabilidadModal={showHabilidadModal}
      showCertificadoModal={showCertificadoModal}
      setShowProyectoModal={setShowProyectoModal}
      setShowHabilidadModal={setShowHabilidadModal}
      setShowCertificadoModal={setShowCertificadoModal}
      proyectos={proyectos}
      habilidades={habilidades}
      certificados={certificados}
    />
  );
};
