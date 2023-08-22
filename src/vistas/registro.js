import { registrarUsuario } from '../init-firebase';

export const registro = () => {
  const viewRegistro = document.createElement('div');
  viewRegistro.innerHTML = `
<div id="signupModal" class="">
    <div class="modal-content">
    <figure ><img class="fondoreg" src="https://miro.medium.com/v2/resize:fit:1000/1*6zrUW8rgLSPjdMXFQyk9CQ.jpeg">
    </figure>
      <h2 class= "registro">Registro</h2>
      <div class="registerForm">
        <label for="signup-email">Email:</label>
        <input type="email" id="signup-email" class="form-control mb-3" placeholder="Email" required/>

        <label for="signup-password">Password:</label>
        <input type="password" id="signup-password" class="form-control mb-3" placeholder="******" required/>
      </div>
        <a href="#/login" type="button" class="btn-submit">Login</a>
      </form>
    </div>
  </div> `;
  const registerButton = document.createElement('button');
  registerButton.innerText = 'registro';
  registerButton.addEventListener('click', () => {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    registrarUsuario(email, password).then(() => {
      console.log('correcto');
    }).catch((error) => {
      console.log(error);
    });
    console.log('Lista para registrar');
  });
  viewRegistro.appendChild(registerButton);
  return viewRegistro;
};
