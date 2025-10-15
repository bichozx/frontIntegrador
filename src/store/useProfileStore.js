// src/store/useProfileStore.js
import axios from "axios";
import { create } from "zustand";

export const useProfileStore = create((set) => ({
  perfil: null,
  loading: false,
  error: null,

  fetchPerfil: async (estudianteId) => {
    
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`http://localhost:8080/perfil-estudiante/${estudianteId}`);
      set({ perfil: response.data, loading: false });
    } catch (err) {
      console.error("❌ Error al obtener perfil:", err);
      set({
        loading: false,
        error: err.response?.data || "Error al obtener el perfil",
      });
    }
  },

  updatePerfil: async (id, perfilData) => {
    set({ loading: true, error: null });
    try {
      await axios.put(`http://localhost:8080/perfil-estudiante/${id}`, perfilData);
      set({ loading: false });
      return true;
    } catch (err) {
      console.error("❌ Error al actualizar perfil:", err);
      set({ loading: false, error: "Error al actualizar perfil" });
      return false;
    }
  },
}));
