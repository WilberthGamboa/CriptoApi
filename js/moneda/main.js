const x =localStorage.getItem('moneda');

const  api = new Api();

 api.consultarApi(x);

/*.then( moneda =>{
    console.log(moneda);
})
console.log(api.consultarApi(x));
*/