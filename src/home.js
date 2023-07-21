/* eslint-disable semi */
export default () => {
  const viewHome = `
    <h2 class="text-center">Bienvenido a LabsConnect</h2>
    <figure class="text-center">
        <img clas="image" src="https://www.google.com/search?q=laboratoria+bootcamp+imagenes&tbm=isch&ved=2ahUKEwje3PTwspuAAxVIFN4AHeleAwEQ2-cCegQIABAA&oq=Laboratoria+boo&gs_lcp=CgNpbWcQARgAMgQIIxAnMgQIIxAnMgcIABAYEIAEMgcIABAYEIAEOgUIABCABDoICAAQgAQQsQM6CggAEIoFELEDEEM6CwgAEIAEELEDEIMBOgcIABCKBRBDOgcIIxDqAhAnOggIABCxAxCDAToECAAQAzoGCAAQCBAeOgkIABAYEIAEEApQrxBY_G9g2n5oAXAAeACAAeoCiAHBIZIBCDAuMjEuNC4xmAEAoAEBqgELZ3dzLXdpei1pbWewAQrAAQE&sclient=img&ei=_yq4ZJ7hLsio-LYP6b2NCA&bih=467&biw=1155&rlz=1C5CHFA_enMX897MX897#imgrc=TvsX2bcq3KAzqM"></img>
    </figure>`;
  const divElem = document.createElement('div');
  divElem.innerHTML = viewHome;
  return divElem;
}
