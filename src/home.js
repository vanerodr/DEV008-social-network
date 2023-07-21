/* eslint-disable semi */
export default () => {
  const viewHome = `
    <header>
    <h1>LabsConnect</h1>
    <nav>
      <ul>
        <li>
          <a href="#/">LabsConnect</a>
        </li>
        <li>
          <a href="#/iniciodeSesion">Inicio de Sesión</a>
        </li>
        <li>
          <a href="#/crearcuenta">Crear cuenta</a>
        </li>
        <li>
          <a href="#/Muro">Muro</a>
        </li>
      </ul>
    </nav>
  </header>
  <section>
  <h2>Start by creating your account</h2>
        <label for="nombre">Full name</label>
        <input type="text" id="nombre">
        <label for="correo">Email</label>
        <input type="email" id="correo">
        <label for="contrasena">Password</label>
        <input type="password" id="contrasena">
        <label for="confirmar">Confirm password</label>
        <input type="password" id="confirmar">
        <button type="submit">Sign Up</button>
  </section>


  `;

    
  const divElem = document.createElement('div');
  divElem.innerHTML = viewHome;
  return divElem;
}
