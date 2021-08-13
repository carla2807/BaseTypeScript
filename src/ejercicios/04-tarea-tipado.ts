//Dentro de la interface anidamos calle,ciudad,pais, el metodo que es de tipo string
interface superHeroe{
    nombre:string,
    edad:number,
    direccion:Direccion //direccion es un objeto, requiero crear otra interface llamada Direccion
    mostrarDireccion: () => string;
}

interface Direccion{
    
        calle:string;
        ciudad:string;
        pais:string;
    
}

const superHeroe:superHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion:{ //Este es el objeto direccion que se encuentra dentro de la constante
        calle:'Main St',
        pais:'USA',
        ciudad: 'NY'
    },

    mostrarDireccion(){
       return this.nombre + ',' + this.direccion.ciudad + ',' + this.direccion.pais;
    }
}

//direccion es una constante
const direccion = superHeroe.mostrarDireccion();
console.log(direccion); 


