import axios from "axios";
// src/store/useStudentStore.js
import { create } from "zustand";

export const useStudentStore = create((set) => ({
  loading: false,
  error: null,
  success: false,
  students: [], 
   selectedStudentId: null, // 👈 Nuevo estado

    setSelectedId: (id) => set({ selectedStudentId: id }),

  makeStudent: async (studentData) => {
    set({ loading: true, error: null, success: false });

    try {
      const response = await axios.post("http://localhost:8080/estudiantes", studentData);
      

      set({
        loading: false,
        success: true,
        error: null,
      });

      console.log("✅ Estudiante creado:", response.data);
      return true; // 👈 Indicamos que se creó correctamente
    } catch (err) {
      console.error("❌ Error al crear estudiante:", err);
      set({
        loading: false,
        success: false,
        error: err.response?.data || "Error al crear estudiante",
      });
      return false; // 👈 Hubo error
    }
  },

   // Listar estudiantes
  fetchStudents: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get("http://localhost:8080/estudiantes");
      
      set({ students: response.data, loading: false });
      
    } catch (err) {
      console.error("❌ Error al listar estudiantes:", err);
      set({
        loading: false,
        error: err.response?.data || "Error al cargar estudiantes",
      });
    }
  },

   // ✏️ Editar estudiante
  updateStudent: async (id, updatedData) => {
    set({ loading: true, error: null, success: false });

    try {
      const response = await axios.put(`http://localhost:8080/estudiantes/${id}`, updatedData);

      // Actualizamos el estudiante dentro del array local
      set((state) => ({
        students: state.students.map((student) =>
          student.id === id ? response.data : student
        ),
        loading: false,
        success: true,
      }));

      console.log("✅ Estudiante actualizado:", response.data);
      return true;
    } catch (err) {
      console.error("❌ Error al actualizar estudiante:", err);
      set({
        loading: false,
        success: false,
        error: err.response?.data || "Error al actualizar estudiante",
      });
      return false;
    }
  },

  // ❌ Eliminar
  deleteStudent: async (id) => {
    set({ loading: true, error: null });
    try {
      await axios.delete(`http://localhost:8080/estudiantes/${id}`);
      set((state) => ({
        students: state.students.filter((s) => s.id !== id),
        loading: false,
      }));
      return true;
    } catch (err) {
      console.error("❌ Error al eliminar estudiante:", err);
      set({
        loading: false,
        error: err.response?.data || "Error al eliminar estudiante",
      });
      return false;
    }
  },
}));
   
