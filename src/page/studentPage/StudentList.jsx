// src/pages/student/StudentList.jsx
import React, { useEffect, useState } from "react";

import { EditStudentModal } from "../../component/student/EditStudentModal";
import { TableStudent } from "../../component/student/TableStudent";
import { useNavigate } from 'react-router-dom';
import { useStudentStore } from "../../store/useStudentStore";

export const StudentList = () => {
   const {
    students,
    fetchStudents,
    updateStudent,
    deleteStudent,
    loading,
    error,
    setSelectedId, // 👈 función del store
  } = useStudentStore();
  
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  const handleEdit = (student) => {
    setSelectedStudent(student);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedStudent(null);
    setShowModal(false);
  };

  const handleSave = async (id, updatedData) => {
    const ok = await updateStudent(id, updatedData);
    if (ok) {
      alert("✅ Estudiante actualizado con éxito");
      handleCloseModal();
      fetchStudents(); // 🔁 refresca lista
    }
  };

  const handleView = (student) => {
    
    // Aquí pones la ruta a la que quieres ir
     setSelectedId(student.id); 
     
    navigate('/profile-student');
  };

    const handleDelete = async (id) => {
    const confirmed = window.confirm("¿Estás seguro de eliminar este estudiante?");
    if (!confirmed) return;

    const ok = await deleteStudent(id);
    if (ok) alert("🗑️ Estudiante eliminado correctamente");
    fetchStudents();
  };

  if (loading) return <div className="text-center mt-4">Cargando estudiantes...</div>;
  if (error) return <div className="text-center text-danger mt-4">{error}</div>;

  return (
    <>
      <TableStudent
        students={students}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleView={handleView}
      />

      {showModal && selectedStudent && (
        <EditStudentModal
          student={selectedStudent}
          onClose={handleCloseModal}
          onSave={handleSave}
        />
      )}
    </>
  );
};
