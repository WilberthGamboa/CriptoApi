class FiltroMonedas {


  constructor() {

  }

  filtrarMonedas(json) {

    //OBTENEMOS EL TEXTO DEL BOTON POR CADA EVENTO

    const btnBuscardor = document.querySelector('#busqueda');

    btnBuscardor.addEventListener('click', () => {

      const labelBuscadorMoneda = document.querySelector('#textoBuscador');

      convertirObjeto(json);
      // return idMoneda;

    }) //TERMINA EVENT LISTENER
    const convertirObjeto = (json) => {
      json.then(monedas => {
        const arregloDeCriptomonedas = new Array();
        monedas.map(moneda => {
          const { id, symbol, market_data, image } = moneda;
          //limitamos cantidad de decimales

          //     console.log(moneda);

          //.current_price.mxn
          const cripto = new Criptomoneda(symbol, id, market_data.market_cap_rank, market_data.current_price.mxn, image.large);
          // console.log(cripto);
          arregloDeCriptomonedas.push(cripto);

        })

        function filterItems(query) {

          return arregloDeCriptomonedas.filter(function (el) {

            return el.nombre.toLowerCase().indexOf(query.toLowerCase()) > -1;
          })
        }

        const monedaABuscar = document.querySelector('#textoBuscador').value;

        const arregloDeCriptomonedasFiltrado = filterItems(monedaABuscar);
        //  console.log(filterItems(document.querySelector('#textoBuscador').value))

        const dom = new Dom();

        dom.eliminarObjetosDom("#criptomonedas-lista");


        arregloDeCriptomonedasFiltrado.forEach(moneda => {
          dom.crearElementosDom(moneda);
        })



      })
    }




  }


}




//VEAMOS SI DEVOLVEMOS LAS MONEDAS?




