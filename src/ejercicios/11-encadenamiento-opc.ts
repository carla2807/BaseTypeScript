//Me creo interface Pasajero, luego dos objetos uno pasajero1 y otro pasajero2
interface Pasajero{
    nombre:string;
    hijos?: string [];


}

const pasajero1:Pasajero = {
nombre: 'Fernando'

}

const pasajero2: Pasajero ={
nombre: 'Melisa',
hijos: ['Natalia','Gabriel']
}

//Podemos preguntar cuantos hijos tiene el pasajero,pasajero.hijos?.length Si existen los hijos, continua con lo siguiente
function ImprimeHijos(pasajero:Pasajero): void{
const cuantosHijos = pasajero.hijos?.length || 0;
console.log(cuantosHijos)
}

ImprimeHijos(pasajero1);