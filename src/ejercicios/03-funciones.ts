//Creo funcion sumar, los tipos de datos son numeros
//Me retorna 30
function sumar (a: number, b: number): number{
    return a + b;
    }
    
    const resultado = sumar (10,20);
    
    
    // Creo funcion flecha, le paso argumentos a y b y los dos tipo number para que la salida sea numero, porque caso contrario seria any
    
    const sumarFlecha = (a: number,b:number) => {
    return a + b
    }
    
    console.log(resultado);
    
    //Creo funcion multiplicar,primero van los parametros principales, despues los opcionales y por ultimo los que tienen valor por defecto
    function multiplicar (numero:number ,otroNumero?:number, base: number = 2): number{
    return numero * base;
    }
    
    //const resultadoMultiplicar = multiplicar(5,0,10)
    
    //console.log(resultadoMultiplicar)
    
    //Defino interface
     interface PersonajeLOR{
         nombre:string;
         puntosVida:number;
         mostrarHp: () => void;
    
     }
    
    function curar(personaje: PersonajeLOR,curarX:number): void{
       personaje.puntosVida +=curarX
       console.log(personaje)
    }
    
    //Me creo constante
    const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    puntosVida:50,
    mostrarHp(){
        console.log('Puntos de vida',this.puntosVida)
    }
    
    }
    //Llamo a la funcion curar
    curar(nuevoPersonaje,20)