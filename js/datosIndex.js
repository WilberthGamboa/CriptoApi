const obtenerDatos = json =>{
    
    json.then(monedas =>{
        const arregloDeCriptomonedas = new Array();
        
        monedas.map(moneda => {
            

            if (moneda.rank<11) {
                const {id,name,rank,price} = moneda;
             
                
              let cripto = new Criptomoneda(id,name,rank,price);
             
            arregloDeCriptomonedas.push(cripto);
            
                 
            }
        });
        agregarDatosDom(arregloDeCriptomonedas)     
    })

}

const agregarDatosDom = arregloDeCriptomonedas => {
   
   arregloDeCriptomonedas.forEach(moneda => {
    const div = document.createElement('DIV');
    console.log(moneda);
    div.textContent = moneda.nombre+ moneda.acronimo+moneda.rank+moneda.precio;
    
    const body= document.querySelector('BODY');
    body.appendChild(div);
    
   });
    



}
