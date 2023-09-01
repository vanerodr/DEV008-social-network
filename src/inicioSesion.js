import logo from "./imagenes/elq.png";

export default () => {
  const viewiniciodeSesion = `
  
    <h2 class="tex-center">Inicio de sesión </h2>
    <figure>
    <img src="${logo}">
    </figure>`;
  const divElem = document.createElement('div');
  divElem.innerHTML = viewiniciodeSesion;
  return divElem;
};
//const nombreRed = document.createElement('h1');
//const textoLabsConnect = document.createTextNode('LabsConnect');

//seleccionar elemento padre

//const container = document.querySelector('padre');
// agregamos Nodos
//container.appendChild(nombreRed);
//nombreRed.appendChild(textoLabsConnect);
//const imagen = document.createElement('img');
//imagen.src = logo;
//container.appendChild(imagen);
