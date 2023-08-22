import {changeView} from './lib/rutas.js';
import {login} from './vistas/login.js';
//const root = document.getElementById("root");

const init = () => {
  document.getElementById("root").appendChild(login());
  window.addEventListener('hashchange', () => {
    changeView(window.location.hash);
  });
};

window.addEventListener('load', init);
