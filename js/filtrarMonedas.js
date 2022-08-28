const btnBuscardor = document.querySelector('#busqueda');

btnBuscardor.addEventListener('click', ()=>{
    const labelBuscadorMoneda = document.querySelector('#textoBuscador');
    const idMoneda = labelBuscadorMoneda.value;
    const json = consultarApi(idMoneda);
    console.log(json);
})