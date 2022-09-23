
function retornaTrue() {
    return true;
}


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
        
        setTimeout( () => resolve(numero + 1), 300);
    
    });
    
}

let cosas = [ sumarLento(5), sumarRapido(10), true, 'hola mundo', retornaTrue()];

Promise.all([ sumarRapido(10), sumarLento(10) ])
    .then(respuestas => {
        console.log(respuestas);
    });

// sumarRapido( 10 ).then( console.log );
// sumarLento( 5 ).then( console.log );