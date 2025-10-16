// src/store/useProfileStore.js
import axios from "axios";
import { create } from "zustand";

export const useProfileStore = create((set) => ({
  perfil: null,
  loading: false,
  error: null,
  estudiantesSinPerfil: [],

  // Obtener perfil de estudiante (por ID)
  fetchPerfil: async (estudianteId) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`http://localhost:8080/perfiles/estudiante/${estudianteId}`);
      set({ perfil: response.data, loading: false });
    } catch (err) {
      console.error("❌ Error al obtener perfil:", err);
      set({
        loading: false,
        error: err.response?.data || "Error al obtener el perfil",
      });
    }
  },

  // Obtener estudiantes sin perfil (para administrador)
  noPerfilStudent: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`http://localhost:8080/perfiles/sin-perfil`);
      set({ estudiantesSinPerfil: response.data, loading: false });
    } catch (err) {
      console.error("❌ Error al obtener estudiantes sin perfil:", err);
      set({
        loading: false,
        error: err.response?.data || "Error al obtener estudiantes sin perfil",
      });
    }
  },

  // Crear perfil (admin o estudiante)
  createPerfil: async (perfilData) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.post(`http://localhost:8080/perfiles`, perfilData);
      set({ perfil: response.data, loading: false });
      return response.data;
    } catch (err) {
      console.error("❌ Error al crear perfil:", err);
      set({
        loading: false,
        error: err.response?.data || "Error al crear perfil",
      });
      return null;
    }
  },

  // Actualizar perfil
  updatePerfil: async (id, perfilData) => {
    set({ loading: true, error: null });
    try {
      await axios.put(`http://localhost:8080/perfiles/${id}`, perfilData);
      set({ loading: false });
      return true;
    } catch (err) {
      console.error("❌ Error al actualizar perfil:", err);
      set({ loading: false, error: "Error al actualizar perfil" });
      return false;
    }
  },

   

   createProyect: async (titulo, descripcion, url, tecnologia, perfilEstudianteId) => {
    set({ loading: true, error: null });
    try {
      const { data } = await axios.post("http://localhost:8080/proyectos", {
        titulo,
        descripcion,
        url,
        tecnologia,
        perfilEstudianteId, // 👈 importante
      });

      set({ loading: false });
      return data; // 👈 devuelve el proyecto creado
    } catch (err) {
      console.error("❌ Error al crear proyecto:", err);
      set({ error: "Error al crear el proyecto", loading: false });
      throw err;
    }
  },
}));
