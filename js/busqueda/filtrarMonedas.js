
//VEAMOS SI DEVOLVEMOS LAS MONEDAS?


const filtrarMonedas = json =>{
  //OBTENEMOS EL TEXTO DEL BOTON POR CADA EVENTO

  const btnBuscardor = document.querySelector('#busqueda');

  const monedaBuscar = btnBuscardor.addEventListener('click', ()=>{

  const labelBuscadorMoneda = document.querySelector('#textoBuscador');
  const idMoneda = labelBuscadorMoneda.value;
  buscarMoneda(json,idMoneda);
 // return idMoneda;
    
}) //TERMINA EVENT LISTENER
 

}

const buscarMoneda = (json,monedaBuscar) =>{
    json.then(monedas=>{
        const arregloDeCriptomonedas = new Array();
        
        monedas.map(moneda=>{

            const {id,symbol,market_data,image} = moneda;

    
                
            //limitamos cantidad de decimales
            
     //     console.log(moneda);
           
            //.current_price.mxn
    
          const cripto = new Criptomoneda(symbol,id,market_data.market_cap_rank,market_data.current_price.mxn,image.large);
       // console.log(cripto);
       
         arregloDeCriptomonedas.push(cripto);
            
        })
        
        
        function filterItems(query) {
            
            return arregloDeCriptomonedas.filter(function(el) {
                
                return el.nombre.toLowerCase().indexOf(query.toLowerCase()) > -1;
            })
          }
          const x = filterItems(document.querySelector('#textoBuscador').value);
        //  console.log(filterItems(document.querySelector('#textoBuscador').value))
          
          const prueba = document.querySelector('#prueba');
          eliminarObjetosDom();
         x.forEach(moneda => {
            crearElementosDom(moneda);
         })
          
        
       
    })
}

