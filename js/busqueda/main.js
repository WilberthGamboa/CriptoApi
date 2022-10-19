const main = () =>{
    const api = new Api();

    const json = api.consultarApi();
    const filtroMonedas = new FiltroMonedas();
    const datosInicio = new DatosInicio();
    
    const eventos = new Eventos();
    eventos.eventoGrilla('#criptomonedas-lista');
    datosInicio.obtenerDatos(json);
    filtroMonedas.filtrarMonedas(json);
}

window.addEventListener('load', () => {
    main();
 });




