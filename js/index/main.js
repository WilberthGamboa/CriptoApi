
const main = () => {
    const api = new Api();
    const json = api.consultarApi();
    obtenerDatos(json);
}
main();


