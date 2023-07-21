import { components } from '../view/index.js';

const changeView = (route) => {
    const container = document.getElementById("container");
  switch (route) {
    case '#/Home':
         { return container.appendChild(components.home()); }
    case '#/iniciodeSesion':
    { return container.appendChild(components.iniciodeSesion()); }
    default:
      break;
  }
  console.log(route);
};

export { changeView };
