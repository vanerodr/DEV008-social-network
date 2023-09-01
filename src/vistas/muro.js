import { crearPublicacion } from '../init-firebase';
import { juntarPublis } from '../init-firebase';
//import { eliminarPublicacion } from '../init-firebase';

export const muro = () => {
  const viewMuro = document.createElement('div');
  viewMuro.innerHTML = `
  <figure ><img class="fondoMuro" src="https://miro.medium.com/v2/resize:fit:1000/1*6zrUW8rgLSPjdMXFQyk9CQ.jpeg">
  <h2 class= "<tituloRed">LabsConnect</h2>
  <div class="container p-4">

    <div class="row">
      <div class="col-md-6">
      </div>
        <div class="card">
          <div class="card-body">
            <form id="publicaciones">
              <div class="form-group">
               <select id="actividad">
               <label for="lang">Actividad</label>
                <option value="Enseñar">Enseñar</option>
                <option value="Aprender" selected>Aprender</option>
               </select>
              </div>
              <div class="form-group">
                <textarea
                  type="text" id="descripcion" 
                  rows="3" 
                  class="form-control" 
                  placeholder="crear coneccion"
                  />
                </textarea>
              </div>
              <button type="submit" class="btnMuro" id="btnForma"> Publicar
             
            </form>
          </div>
        </div>
        <br><br><br><br>
        <div class="col-md-6" id="contenedorPublicaciones"></div>
      </div>
    </div>
  </div>`;

  return viewMuro;
};
export function muroComportamiento() {
  const btnForma = document.getElementById('btnForma');
  const contenedorPublicaciones = document.getElementById('contenedorPublicaciones');
  document.getElementById('Actividad');

  const $select = document.querySelector('#Actividad');
  const opcionCambiar = () => {
    console.log('Cambio');

    $select.addEventListener('change', opcionCambiar);
  };
  btnForma.addEventListener('click', (e) => {
    e.preventDefault();
    const actividad = document.getElementById('actividad').value;
    const descripcion = document.getElementById('descripcion').value;
    console.log(actividad, descripcion);
    crearPublicacion(actividad, descripcion).then(() => {
      console.log('correcto');
    }).catch((error) => {
      console.log(error);
    });
    console.log('Lista para conectar');
  });
    // eslint-disable-next-line no-shadow
    //eliminarPublicacion.addEventListener('click', (e) => {
      //e.preventDefault();
      //eliminarPublicacion(actividad, descripcion).then(() => {
        //console.log('50%');
      //}).catch(() => {
        //console.log('error');
      //});
      //console.log('100%');
    //});
  juntarPublis().then((publis) => {
    console.log('correcto');
    publis.forEach((doc) => {
      const actividadPublicacion = document.createElement('div');
      actividadPublicacion.classList.add('div');
      contenedorPublicaciones.appendChild(actividadPublicacion);
      const publi = document.createElement('p');
      publi.classList.add('publi');
      publi.textContent = doc.data().publicacion;
      actividadPublicacion.appendChild(publi);
      const actividad = document.createElement('p');
      actividad.classList.add('actividad');
      actividad.textContent = doc.data().actividad;
      actividadPublicacion.appendChild(actividad);
      /*const eliminarBoton = document.createElement('eliminarBoton');
      eliminarBoton.classList.add('eliminarBoton');
      contenedorPublicaciones.appendChild(eliminarBoton);
      console.log(doc.id, ' => ', doc.data());
    */});
  }).catch((error) => {
    console.log(error);
  });
  console.log('muestra mis publicaciones');
}
