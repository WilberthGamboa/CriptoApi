class Dom{
  constructor(){

  }
  crearElementosDom(moneda){
     //obtenemos la etiqueta main
  //  const main= document.querySelector('#main');

console.log(` la moneda ${moneda}`)
  const divListaCripto = document.querySelector("#criptomonedas-lista");
  
   
  //  const borrar = document.querySelectorAll('.tarjetaCripto');
    
    //Creamos las etiquetas correspondientes
    const div = document.createElement('DIV');
    const h2 = document.createElement('H2');
    const img = document.createElement('IMG');
    const acronimo = document.createElement('P');
    const rank = document.createElement('P');
    const precio = document.createElement('P');

    //Agremos la clase 
    div.classList.add("tarjetaCripto");
    img.classList.add("criptocsvForma")
    //insertamos una dentro de otra
    divListaCripto.appendChild(div);
    div.appendChild(h2);
    div.appendChild(img);
    div.appendChild(acronimo);
    div.appendChild(rank);
    div.appendChild(precio);
    //Insertamos los valores con js
    h2.textContent=`${moneda.nombre}`;
    img.src=`${moneda.logo}`
    acronimo.textContent=`Siglas: ${moneda.acronimo}`;
    rank.textContent=`Rank: ${moneda.rank}`;
    precio.textContent=`Valor MXN: ${moneda.precio}`;

  }
// "#criptomonedas-lista"
 
  eliminarObjetosDom(querySelector){
    const divListaCripto = document.querySelector(querySelector);
    while (divListaCripto.firstChild) {
        divListaCripto.removeChild(divListaCripto.firstChild);
    }

  }

}


