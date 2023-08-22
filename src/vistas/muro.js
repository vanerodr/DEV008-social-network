import { crearPublicacion } from '../init-firebase';

export const muro = () => {
  const viewMuro = document.createElement('div');
  viewMuro.innerHTML = `
  <div class="container p-4">
    <div class="row">
      <div class="col-md-6">
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
      </div>
    </div>
  </div>`;

  return viewMuro;
};
export function muroComportamiento() {
  const btnForma = document.getElementById('btnForma');
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
};