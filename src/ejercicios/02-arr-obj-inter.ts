//Creo arreglo tipo string
let habilidades = ['Bash','Counter','Healing'];


//Para trabajar con objetos puedo definir las interfaces, aca se llama Personaje
//puebloNatal? con signo de interrogacion porque es opcional
interface Personaje{
nombre: string;
hp: number;
habilidades: string [];
puebloNatal?: string

}

//Creo arreglo de objetos, llamo a la interfaz Personaje creada arriba
const personaje: Personaje = {
    nombre: 'strider',
    hp: 100,
    habilidades: ['Bash','Counter','Healing']
    
}

//Declaro y asigno string.Lllamo dentro de la interfaz
personaje.puebloNatal = 'Pueblo Paleta'

console.table(personaje);