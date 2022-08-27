const obtenerDatos = json =>{
    
    json.then(monedas =>{
        const arregloDeCriptomonedas = new Array();
      //  console.table(monedas);
        monedas.map(moneda => {
            

            if (moneda.rank<=10) {
                const {id,name,rank,price} = moneda;
             
                
              const cripto = new Criptomoneda(id,name,rank,price);
            
            arregloDeCriptomonedas.push(cripto);
            
                 
            }
        });
        
        agregarDatosDom(arregloDeCriptomonedas);
    })

}

const agregarDatosDom = arregloDeCriptomonedas => {
   
   arregloDeCriptomonedas.forEach(moneda => {
  
    crearElementosDom(moneda);
  
   });  

}

const crearElementosDom = (moneda) =>{
    //obtenemos la etiqueta main
  const main= document.querySelector('.main');
    //Creamos las etiquetas correspondientes
    const div = document.createElement('DIV');
    const h2 = document.createElement('H2');
    const acronimo = document.createElement('P');
    const rank = document.createElement('P');
    const precio = document.createElement('P');

    //Agremos la clase 
    div.classList.add("tarjetaCripto");
    //insertamos una dentro de otra
    main.appendChild(div);
    div.appendChild(h2);
    div.appendChild(acronimo);
    div.appendChild(rank);
    div.appendChild(precio);
    //Insertamos los valores con js
    h2.textContent=`${moneda.nombre}`;
    acronimo.textContent=`Acronimo: ${moneda.acronimo}`;
    rank.textContent=`Rank: ${moneda.rank}`;
    precio.textContent=`Valor USD: ${moneda.precio}`;
}
