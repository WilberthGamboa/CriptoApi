const main = () =>{
    const api = new Api();
    const json = api.consultarApi();
    const filtroMonedas = new FiltroMonedas();
    filtroMonedas.filtrarMonedas(json);
}

main();


