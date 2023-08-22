import { loginUsuario } from '../init-firebase';

export const login = () => {
  const viewLogin = document.createElement('div');
  viewLogin.innerHTML = `<div id="signinModal" class="">
    <div class="modal-content">
        <figure ><img class="fondo" src="https://miro.medium.com/v2/resize:fit:1000/1*6zrUW8rgLSPjdMXFQyk9CQ.jpeg">
    </figure>
        <h2 class= "signin">Sign in</h2>
        <div class="signinForm">
            <h3 class="login-email">Email:</h3>
            <input type="email" id="login-email" class="form-control mb-3" placeholder="Email" required/>
            <br>
            <h3 class="logpassword">Password:</h3>
            <input type="password" id="login-password" class="form-control mb-3" placeholder="******" required/>
            <br>
        </div>
                <a href="#/registro" type="button" class="btn">Register</a>
                
            </div>
    </div> `;
  const loginButton = document.createElement('button');
  loginButton.innerText = 'login';
  loginButton.addEventListener('click', () => {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    loginUsuario(email, password).then(() => {
      window.location.href = '#/muro';
      console.log('correcto');
    }).catch((error) => {
      console.log(error);
    });
    console.log('Lista para logear');
  });

  viewLogin.appendChild(loginButton);
  return viewLogin;
};
