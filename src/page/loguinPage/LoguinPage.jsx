import React, { useState } from 'react';

import { Loguin } from '../../component/loguin/Loguin';
import { useAuthStore } from '../../store/useAuthStore';
import { useNavigate } from 'react-router-dom';

const LoguinPage = () => {
  const [usuario, setUsuario] = useState('');

  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const { loginService, loading, error } = useAuthStore();
 

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await loginService(usuario, password);
      navigate('/dashboard');
    } catch {
      alert('Correo o contraseña incorrectos');
    }

    // try {
    //   const data = await authService(usuario, password);
    //   console.log("✅ Login exitoso:", data);

    //   setToken(data.token);
    //   setRol(data.rol);
    //   setUsuario(data.usuario);

    //   // Guardar el token para sesiones persistentes
    //   if (rememberMe) localStorage.setItem("token", data.token);

    //   navigate("/dashboard");
    // } catch (err) {
    //   alert(err.message || "Correo o contraseña incorrectos");
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div>
      <Loguin
        usuario={usuario}
        setUsuario={setUsuario}
        password={password}
        setPassword={setPassword}
        rememberMe={rememberMe}
        setRememberMe={setRememberMe}
        handleLogin={handleLogin}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default LoguinPage;
