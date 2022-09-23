




let usuario = {
    nombre: 'Fernando',
    edad: 32
};

fetch( 'https://regres.in/api', {
    method: 'POST', // PUT
    boby: JSON.stringify( usuario ),
    headers: {
        'Content-Type': 'application/json'
    }
})
.then( resp => resp.json() )
.then( console.log )
.catch( error => {
    console.log('Error en la peticion');
    console.log(error);
});
