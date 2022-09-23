
function sumarLento( numero) {
    
    return new Promise( function(resolve, reject) {
        
        setTimeout( function() {

            resolve(numero + 1);
            // reject('suamr lento fallo');

        }, 800);
    
    });

}

let sumarRapido = (numeor) => {
    
    return new Promise( function(resolve, reject) {
        
        setTimeout( () => {
            
            // resolve(numero + 1);
            reject('Error al sumar rapido');
        
        }, 1000);
    
    });
    
}

Promise.all( [ sumarLento(5), sumarRapido(10) ] )
    .then( respuestas => {
        console.log(respuestas);
    })
    .catch( console.log );
