//DESESTRUCTURACION DE OBJETOS-INICIO
interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalle
}

interface Detalle{
autor: string;
año: number;
}

const reproductor: Reproductor = {
volumen: 90,
segundo: 36,
cancion: 'Mess',
detalles: { //objeto detalles
    autor: 'Ed Sheeran',
    año: 2015
}

}
//Desestructuracion de un objeto es con llaves, toma el objeto reproductor y me interesan las propiedades que defino adentro
//Creo constante, entre las llaves llamo a las propiedades y le asigno const reproductor
const{volumen,segundo,cancion,detalles} = reproductor
//Desestructuracion de los detalles el autor
const{autor} = detalles;

//console.log('El volumen actual de:', volumen);
//console.log('El segundo actual de:', segundo);
//console.log('El cancion actual de:', cancion);
//console.log('El autor actual de:', autor);

//DESESTRUCTURACION DE OBJETOS-FIN

//DESESTRUCTURACION DE ARRAYS
//Desestructuracion de arreglo es con [] corchetes
//Creo constante dbz, es un arreglo de string
const dbz: string [] = ['Goku', 'Vegeta','Trunks']
const[p1,p2,p3] = dbz;
console.log('Personaje 1:',p1);
console.log('Personaje 2:',p2);
console.log('Personaje 3:',p2);


