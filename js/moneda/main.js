const obtenerDatos    = json => {

    json.then(monedas => {
      const arregloDeCriptomonedas = new Array();
  
   
        //console.log(`${moneda.market_data.current_price.mxn}`)
  
      
  
          const { id, symbol, market_data, image } = monedas;
  
          //limitamos cantidad de decimales
  
          //     console.log(moneda);
  
          //.current_price.mxn
  
          const cripto = new Criptomoneda(symbol, id, market_data.market_cap_rank, market_data.current_price.mxn, image.large);
           console.log(cripto);
       
  
          
           const dom = new Dom();

    dom.crearElementosDom(cripto);
        
  
  
     
    })
 

    /*

    const agregarDatosDom = arregloDeCriptomonedas => {
      const dom = new Dom();
      arregloDeCriptomonedas.forEach(moneda => {
    
        dom.crearElementosDom(moneda);
    
      });
    
    }
*/

  }




const main = () =>{
    const monedaLocalStorage =localStorage.getItem('moneda');
    const  api = new Api();
    const json = api.consultarApi(monedaLocalStorage);

    const cripto = obtenerDatos(json);

    console.log(` la cripto ${cripto}`)
   
   



    
}

main();




/*.then( moneda =>{
    console.log(moneda);
})
console.log(api.consultarApi(x));
*/