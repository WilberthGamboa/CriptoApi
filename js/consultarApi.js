
const consultarApi = async () =>{
    const url = 'https://api.nomics.com/v1/currencies/ticker?key=b8a0912f26a8ad8214f54bc0a67e9b0df272530';
    
   try {
    const  respuesta =  await fetch(`${url}`);

    if (respuesta.status==200) {
        const json = await respuesta.json();
        return json;   
    } 
   } catch (error) {
    
   }

}

const json = consultarApi();



