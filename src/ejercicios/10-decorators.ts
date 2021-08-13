
function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      reportingURL = "http://www...";
    };
  }
 
  //El decorador recibe el nombre de la funcion
  @reportableClassDecorator
  
class MiSuperClase{
    public miPropiedad: string = 'ABC123';

    imprimir(){
        console.log('Hola');
    }

}

console.log(MiSuperClase);


const miClase = new MiSuperClase();

console.log(miClase.miPropiedad);