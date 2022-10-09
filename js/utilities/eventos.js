class Eventos{

    constructor(){

    }


    eventoGrilla(query){
        const nodo = document.querySelector(query);
        nodo.addEventListener('click',(e)=>{
          //  console.log(e.target.h2);
         const path= e.composedPath();

      //   console.log(x);
      //   console.log(e.target.tagName);

        if(e.target.tagName=='IMG'){
            console.log(path[1].firstChild.textContent);
            const moneda = path[1].firstChild.textContent;

            localStorage.setItem('moneda', moneda);
            window.open('../../html/moneda.html')
//localStorage.getItem('moneda');
        }
        

            /*
           console.log(e.path);
           var x = e.path[1]; //div.tarjetaCripto
           console.log(x);
           // console.log(e.currentTarget);
           */
        })
    }

}