//Genericos <T></T> cualquier dato
function queTipoSoy<T>(argumento: T){
    return argumento
    }
    
    let soyString = queTipoSoy('Hola mundo');
    let soyNumero = queTipoSoy(100);
    let soyArray = queTipoSoy([1,2,3]);
    
    