class Criptomoneda {
    
    constructor (acronimo,nombre,rank,precio){
       
        //acronimo,nombre,rank,precio
        this._acronimo = acronimo;
        this._nombre = nombre;
        this._rank = rank;
        this._precio = precio;
       
         
    }
  

    get acronimo(){
        return this._acronimo;
    }
    get nombre(){
        return this._nombre;
    }
    get rank(){
        return this._rank;
    }
    get precio(){
        return this._precio;
    }

 

    
}