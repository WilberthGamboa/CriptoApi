class Eventos{

    constructor(){

    }


    eventoGrilla(query){
        const nodo = document.querySelector(query);
        nodo.addEventListener('click',(e)=>{
          //  console.log(e.target.h2);
         var x= e.composedPath();
        if(x.length){
            
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