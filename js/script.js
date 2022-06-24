async function perrito() { //async=asincrona, hay que esperar a que de respuesta porque se extrae la informacion de otro lugar y que vaya con despacio
    var response = await fetch("https://dog.ceo/api/breeds/image/random"); // fetch se encarga de ir por la respuesta que estamos tratando de buscar en la url que esta en parentesis
    var responseJson = await response.json(); // aqui de la respuesta de la peticion solo extrae el json
    var img = responseJson.message; //se obtiene del reponseJson el message, que es lo que queremos desplegar
    var contenedorPerrito = document.querySelector('.contenedorPerrito'); //con esto seleccionamos el lugar donde queremos almacenar la imagen a extraer
    contenedorPerrito.innerHTML = "<img src='" +img+ "' alt='perrito' />";//innerhtml agrega al codigo lo que aqui vamos a colocar como texto. se coloca img para que me coloque el url de la imagen que quiero traer
} //await es para indicar que espere mientras da respuesta