// import api from '../service/api/api';
// import { create } from 'zustand';

// export const useAuthStore = create((set) => ({
//   rol: null,
//   token: null,
//   loading: false,
//   error: null,
//   setUser: (user) => set({ user }),
//   setToken: (token) => set({ token }),

//   // 🔐 Iniciar sesión
//   loginService: async (correo, password) => {
//     set({ loading: true, error: null });
//     try {
//       const { data } = await api.post('/auth/login', { correo, password });
//       console.log('🚀 ~ data:', data);

//       // Guardar token y usuario
//       localStorage.setItem('token', data.token);
//       set({ rol: data.rol, token: data.token, loading: false });

//       return data;
//     } catch (err) {
//       set({ error: 'Credenciales incorrectas', loading: false });
//       throw err;
//     }
//   },

//   // 🚪 Cerrar sesión
//    logout: async () => {
//     set({ loading: true });

//     try {
//       // Si más adelante agregas un endpoint de logout:
//       // await api.post('/auth/logout');

//       await new Promise((resolve) => setTimeout(resolve, 6000)); // Simula tiempo de espera
//       localStorage.removeItem("token");

//       set({
//         user: null,
//         rol: null,
//         token: null,
//         loading: false,
//         error: null,
//       });
//     } catch (error) {
//       console.error("❌ Error al cerrar sesión:", error);
//       set({ loading: false, error: "Error al cerrar sesión" });
//     }
//   },
// }));

// import api from '../service/api/api';
// import { create } from 'zustand';

// export const useAuthStore = create((set) => ({
//   rol: null,
//   token: null,
//   user: null,
//   loading: false,
//   error: null,

//   setUser: (user) => set({ user }),
//   setToken: (token) => set({ token }),
 

//   // 🔐 Iniciar sesión
//   loginService: async (correo, password) => {
//     set({ loading: true, error: null });
//     try {
//       const { data } = await api.post('/auth/login', { correo, password });
//       localStorage.setItem('token', data.token);
//       set({ rol: data.rol, token: data.token, user: data.user, loading: false });
//       return data;
//     } catch (err) {
//       set({ error: 'Credenciales incorrectas', loading: false });
//       throw err;
//     }
//   },

//   // 🚪 Cerrar sesión con control de loader y redirección
//  // 🚪 Cerrar sesión
//   logout: async (navigate) => {
//     set({ loading: true });
//     try {
//       const token = localStorage.getItem('token');
//       if (token) {
//         await api.post('/auth/logout', {}, { 
//           headers: { Authorization: `Bearer ${token}` } 
//         });
//       }

//       localStorage.removeItem('token');
//       set({ user: null, rol: null, token: null, loading: false, error: null });

//       navigate('/');
//     } catch (error) {
//       console.error('❌ Error al cerrar sesión:', error);
//       set({ loading: false, error: 'Error al cerrar sesión' });
//     }
//   },
// }));

// src/store/useAuthStore.js
import api from '../service/api/api';
import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  rol: localStorage.getItem('rol') || null,
  token: localStorage.getItem('token') || null,
  estudianteId: localStorage.getItem('idEstudiante') || null, // 👈 lee del localStorage
  user: null,
  loading: false,
  error: null,

  setUser: (user) => set({ user }),
  setToken: (token) => set({ token }),

  // 🔐 Iniciar sesión
  loginService: async (correo, password) => {
    set({ loading: true, error: null });
    try {
      const { data } = await api.post('/auth/login', { correo, password });
      console.log('🚀 ~ Login response:', data);

      // Guardar token y rol en localStorage
      localStorage.setItem('token', data.token);
      localStorage.setItem('rol', data.role);
      if (data.estudianteId) {
        localStorage.setItem('idEstudiante', data.estudianteId);
      }

      // Actualizar el store
      set({
        rol: data.role,
        token: data.token,
        estudianteId: data.estudianteId || null,
        user: data.user || null,
        loading: false,
      });

      return data;
    } catch (err) {
      console.error('❌ Error en login:', err);
      set({ error: 'Credenciales incorrectas', loading: false });
      throw err;
    }
  },

  // 🚪 Cerrar sesión
  logout: async (navigate) => {
    set({ loading: true });
    try {
      const token = localStorage.getItem('token');
      if (token) {
        await api.post(
          '/auth/logout',
          {},
          { headers: { Authorization: `Bearer ${token}` } }
        );
      }

      // 🔄 Limpiar localStorage y store
      localStorage.removeItem('token');
      localStorage.removeItem('rol');
      localStorage.removeItem('idEstudiante');

      set({
        user: null,
        rol: null,
        token: null,
        estudianteId: null,
        loading: false,
        error: null,
      });

      if (navigate) navigate('/');
    } catch (error) {
      console.error('❌ Error al cerrar sesión:', error);
      set({ loading: false, error: 'Error al cerrar sesión' });
    }
  },
}));

  
