//Funciones
class Api {
  constructor() {

  }

  //METODOS
  
  consultarApi = async (query) => {

    let url = `https://api.coingecko.com/api/v3/coins`;
   

    if(query!=null){
      console.log('hola');

      url = `https://api.coingecko.com/api/v3/coins/${query}`;
      
     //url = 'https://api.coingecko.com/api/v3/search?query='+query;

    }
    //const url = 'https://api.coingecko.com/api/v3/search?query=';

    try {
      const respuesta = await fetch(`${url}`);

      if (respuesta.status == 200) {
        const json = await respuesta.json();
        console.log(json);

        return json;

      }
    } catch (error) {

    }

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

