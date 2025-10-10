import React from 'react';

export const Loguin = ({
  usuario,
  setUsuario,
  password,
  setPassword,
  rememberMe,
  setRememberMe,
  handleLogin,
}) => {
  return (
    <div className="bg-gradient-primary min-vh-100 d-flex align-items-center">
      <div className="container">
        {/* Outer Row */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg">
              <div className="card-body p-0">
                <div className="row">
                  {/* Imagen lateral */}
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>

                  {/* Formulario */}
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center mb-4">
                        <h1 className="h4 text-gray-900 font-weight-bold">
                          ¡Bienvenido de nuevo!
                        </h1>
                        <p className="text-muted">Inicia sesión para continuar</p>
                      </div>

                      <form className="user" onSubmit={handleLogin}>
                        {/* Usuario */}
                        <div className="form-group mb-3">
                          <input
                            type="text"
                            className="form-control form-control-user"
                            id="usuarioForm"
                            placeholder="Usuario"
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                            required
                          />
                        </div>

                        {/* Contraseña */}
                        <div className="form-group mb-3">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            id="contraForm"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </div>

                        {/* Recordarme */}
                        <div className="form-group mb-3 d-flex align-items-center">
                          <input
                            type="checkbox"
                            className="custom-control-input me-2"
                            id="customCheck"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                          />
                          <label
                            className="custom-control-label text-muted"
                            htmlFor="customCheck"
                          >
                            Recordarme
                          </label>
                        </div>

                        {/* Botón principal */}
                        <button
                          type="submit"
                          className="btn btn-primary btn-user btn-block"
                        >
                          Iniciar Sesión
                        </button>

                        <hr />

                        {/* Login con redes */}
                        <button
                          type="button"
                          className="btn btn-google btn-user btn-block"
                        >
                          <i className="fab fa-google fa-fw"></i> Iniciar con Google
                        </button>

                        <button
                          type="button"
                          className="btn btn-facebook btn-user btn-block"
                        >
                          <i className="fab fa-facebook-f fa-fw"></i> Iniciar con Facebook
                        </button>
                      </form>

                      <hr />

                      {/* Enlaces inferiores */}
                      <div className="text-center">
                        <a className="small text-decoration-none" href="#">
                          ¿Olvidaste tu contraseña?
                        </a>
                      </div>
                      <div className="text-center mt-2">
                        <a className="small text-decoration-none" href="#">
                          ¡Crea una cuenta!
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};
