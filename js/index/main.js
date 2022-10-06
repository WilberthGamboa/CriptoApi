
const main = () => {
    const api = new Api();
    const json = api.consultarApi();
    const datosInicio = new DatosInicio();
    const eventos = new Eventos();
    eventos.eventoGrilla('#criptomonedas-lista');
    datosInicio.obtenerDatos(json);
}

window.addEventListener('load', () => {
   main();
});



