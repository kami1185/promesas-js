// Ejemplo 1: Obtener un Usuario y luego sus Publicaciones

// En este ejemplo, primero obtendremos los datos de un usuario y, una vez que tengamos la información
// del usuario (especialmente su ID), realizaremos otra petición para obtener las publicaciones de ese 
// usuario.

const BASE_URL = 'https://jsonplaceholder.typicode.com';

function obtenerUsuario(userId) {
  console.log(`Intentando obtener usuario con ID: ${userId}...`);
  return fetch(`${BASE_URL}/users/${userId}`)
    .then(response => {
      if (!response.ok) {
        // Si la respuesta HTTP no es exitosa (ej. 404), lanzamos un error
        throw new Error(`Error al obtener usuario: ${response.status}`);
      }
      return response.json(); // Parseamos la respuesta como JSON
    });
}

function obtenerPublicacionesDeUsuario(userId) {
  console.log(`Intentando obtener publicaciones del usuario con ID: ${userId}...`);
  return fetch(`${BASE_URL}/posts?userId=${userId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error al obtener publicaciones: ${response.status}`);
      }
      return response.json();
    });
}

const userId = 1; // Intentaremos obtener el usuario con ID 1

console.log("Iniciando secuencia de peticiones...");

obtenerUsuario(userId)
  .then(usuario => {
    console.log("Usuario obtenido:", usuario.name);
    // Una vez que tenemos el usuario, encadenamos otra promesa para obtener sus publicaciones
    return obtenerPublicacionesDeUsuario(usuario.id);
  })
  .then(publicaciones => {
    console.log(`Publicaciones encontradas para ${publicaciones.length} artículos.`);
    // Aquí puedes procesar las publicaciones
    publicaciones.forEach(post => console.log(`- ${post.title}`));
  })
  .catch(error => {
    // Este catch maneja cualquier error en la cadena de promesas
    console.error("Ocurrió un error en la secuencia:", error.message);
  })
  .finally(() => {
    console.log("Secuencia de peticiones finalizada.");
  });

console.log("Código después de iniciar la secuencia (se ejecuta inmediatamente).");