import React, { useState } from 'react';

import { CreateHVStudent } from '../../component/student/CreateHVStudent';

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

  const [showProyectoModal, setShowProyectoModal] = useState(false);
  const [showHabilidadModal, setShowHabilidadModal] = useState(false);
  const [showCertificadoModal, setShowCertificadoModal] = useState(false);

  const [proyectos, setProyectos] = useState(formData.proyectos || []);
  const [habilidades, setHabilidades] = useState(
    formData.habilidadesList || []
  );
  const [certificados, setCertificados] = useState(
    formData.certificadosList || []
  );

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
    alert('Hoja de vida creada correctamente ✅');
  };

  // Guardar proyecto
  const handleSaveProyecto = (proyecto) => {
    const nuevosProyectos = [...proyectos, proyecto];
    setProyectos(nuevosProyectos);
    handleChange({ target: { id: 'proyectos', value: nuevosProyectos } });
    setShowProyectoModal(false);
  };

  // Guardar habilidad
  const handleSaveHabilidad = (habilidad) => {
    const nuevasHabilidades = [...habilidades, habilidad];
    setHabilidades(nuevasHabilidades);
    handleChange({
      target: { id: 'habilidadesList', value: nuevasHabilidades },
    });
    setShowHabilidadModal(false);
  };

  // Guardar certificado
  const handleSaveCertificado = (certificado) => {
    const nuevosCertificados = [...certificados, certificado];
    setCertificados(nuevosCertificados);
    handleChange({
      target: { id: 'certificadosList', value: nuevosCertificados },
    });
    setShowCertificadoModal(false);
  };

  return (
    <>
      <CreateHVStudent
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleSaveProyecto={handleSaveProyecto}
        handleSaveHabilidad={handleSaveHabilidad}
        handleSaveCertificado={handleSaveCertificado}
        showProyectoModal={showProyectoModal}
        showHabilidadModal={showHabilidadModal}
        showCertificadoModal={showCertificadoModal}
      />
    </>
  );
};
