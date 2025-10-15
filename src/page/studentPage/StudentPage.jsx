import React, { useState } from "react";

import { CreateStudent } from "../../component/student/CreateStudent";
import { useStudentStore } from "../../store/useStudentStore";

export const StudentPage = () => {
  const { makeStudent, loading, error, success } = useStudentStore();

  const [formData, setFormData] = useState({
    programa: "",
    semestre: "",
    promedio: "",
    fechaNacimiento: "",
    usuario: {
      nombre: "",
      correo: "",
      password: "",
      rol: "Estudiante",
      estado: "Activo",
    },
  });

  const handleChange = (e) => {
    const { id, value, name } = e.target;

    if (name?.startsWith("usuario.")) {
      const field = name.split(".")[1];
      setFormData({
        ...formData,
        usuario: { ...formData.usuario, [field]: value },
      });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const created = await makeStudent(formData);

    if (created) {
      // ✅ Limpiar el formulario si se creó con éxito
      setFormData({
        programa: "",
        semestre: "",
        promedio: "",
        fechaNacimiento: "",
        usuario: {
          nombre: "",
          correo: "",
          password: "",
          rol: "Estudiante",
          estado: "Activo",
        },
      });

      // Opcional: alerta Bootstrap
      alert("✅ Estudiante creado exitosamente");
    }
  };

  return (
    <CreateStudent
      formData={formData}
      loading={loading}
      error={error}
      success={success}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};
