


fetch('no-encontrado.html')
    .then( resp => resp.json() )
    .then(html => {

        let body = document.querySelector('body');
        body.innerHTML = html;
    })
    .catch(error => {
        console.log('Error en la peticion');
        console.log(error);
    });
