//Funciones
const consultarApi = async () =>{
 
  const url = `https://api.coingecko.com/api/v3/coins`;
    //const url = 'https://api.coingecko.com/api/v3/search?query=';
    
   try {
    const  respuesta =  await fetch(`${url}`);

    if (respuesta.status==200) {
        const json = await respuesta.json();
        console.log(json);
        
      return json;
       
    } 
   } catch (error) {
    
   }

}
/*
const buscarMonedasPrincipales = monedas =>{
    
    monedas.map(moneda => {
       
    
        if (moneda.rank==1) {
            const {id,name,rank,price} = moneda;
         
            
          const cripto = new Criptomoneda (id,name,rank,price);
          criptos=cripto;
             
        }
     
    });
}
*/

