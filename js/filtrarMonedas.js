const btnBuscardor = document.querySelector('#busqueda');

btnBuscardor.addEventListener('click', ()=>{
    const labelBuscadorMoneda = document.querySelector('#textoBuscador');
    const idMoneda = labelBuscadorMoneda.value;
    const json = consultarApi(idMoneda);
    buscarMoneda(json)
    //console.log(json);

})

const buscarMoneda = json =>{
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
         x.forEach(moneda => {
            const div = document.createElement('P');
            div.textContent=`${moneda.nombre}`
            prueba.appendChild(div);
         })
          
        
       
    })
}

