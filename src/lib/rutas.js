import {login} from '../vistas/login.js';
import {registro} from '../vistas/registro.js';
import {muro, muroComportamiento} from '../vistas/muro.js';

export const changeView = (route) => {
  const root = document.getElementById("root");
  root.innerHTML = '';
  switch (route) {
    case '#/':
    {
      return root.appendChild(login());
    }
    case '#/muro':
    {
      root.appendChild(muro());
      muroComportamiento();
      return;
    }
    case '#/registro':
    { return root.appendChild(registro()); }
    default:
      break;
  }
  console.log(route);
};

//export { changeView };