import React, { useState } from 'react'

import { Loguin } from '../../component/loguin/Loguin'
import { useNavigate } from 'react-router-dom';

const LoguinPage = () => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();


  const handleLogin = (e) => {
  e.preventDefault();

  if (usuario === 'admin' && password === '1234') {
    alert('Inicio de sesión exitoso');
    navigate ('/dashboard'); // o usa navigate('/home');
  } else {
    alert('Usuario o contraseña incorrectos');
  }
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
      />
    </div>
  )
}

export default LoguinPage
