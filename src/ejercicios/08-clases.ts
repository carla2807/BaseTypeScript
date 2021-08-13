//2° creo Clase que llama a Heroe, cree metodo imprimirNombre 
class PersonaNormal{
    constructor(
    public nombre: string, 
    public direccion: string){

    }
}
class Heroe extends PersonaNormal{
    

    //Estoy asignandole a la clase cada una de sus propiedades en base a sus argumentos
    //super() llama al constructor de PersonaNormal
    constructor(
    public alterEgo:string,
    public edad:number,
    public nombreReal: string
    ){
       super(nombreReal, 'New York USA');
       
    }

}
// 1° Creo el objeto, es decir lo instancio
const Iroman = new Heroe('Ironman',45,'Tony');
console.log(Iroman);
