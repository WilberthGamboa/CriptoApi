
const main = () => {
    const api = new Api();
    const json = api.consultarApi();
    const datosInicio = new DatosInicio();
    datosInicio.obtenerDatos(json);
}

window.addEventListener('load', () => {
   main();
});



