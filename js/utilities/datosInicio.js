class DatosInicio{
  constructor(){

  }

   obtenerDatos = json => {

    json.then(monedas => {
      const arregloDeCriptomonedas = new Array();
  
      monedas.map(moneda => {
        //console.log(`${moneda.market_data.current_price.mxn}`)
  
        if (moneda.market_data.market_cap_rank <= 10) {
  
          const { id, symbol, market_data, image } = moneda;
  
          //limitamos cantidad de decimales
  
          //     console.log(moneda);
  
          //.current_price.mxn
  
          const cripto = new Criptomoneda(symbol, id, market_data.market_cap_rank, market_data.current_price.mxn, image.large);
          // console.log(cripto);
          arregloDeCriptomonedas.push(cripto);
  
  
        }
        
      });
  
      agregarDatosDom(arregloDeCriptomonedas);
    })

    const agregarDatosDom = arregloDeCriptomonedas => {
      const dom = new Dom();
      arregloDeCriptomonedas.forEach(moneda => {
    
        dom.crearElementosDom(moneda);
    
      });
    
    }


  }

}

