//Exportar interface
export interface Producto{
    desc:string;
    precio:number;
}

const telefono: Producto = {
     desc:'Nokia A1',
     precio: 150

}

const tablet: Producto ={
    desc:'Ipad AIR',
    precio: 350
}

//Creo funcion, le paso como argumento productos que llama a Producto
//Creo variable let total,que va a ir cambiando, la iniciliazo en 0 y lo recorro con foreach
//Incremento el valor de total,productos lo guardo
//Desestructuracion de argumento {precio}

export function CalculaISV(productos: Producto[]): [number,number]{ //La funcion regresa arreglo que tiene 2 numeros
let total = 0;
productos.forEach( ({precio})  =>{
total += precio;

})
return [total,total * 0.15];
}

//Creo arreglo articulos
const articulos =[telefono,tablet];

//Desestructuracion de arreglo
const [total,isv] = CalculaISV(articulos)
console.log(total);
console.log(isv);