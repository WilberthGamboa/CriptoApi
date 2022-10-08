const x=localStorage.getItem('moneda');

const  api = new Api();

api.consultarApi(x);

console.log(api.consultarApi(x));