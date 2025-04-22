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


// ******************************************* PROMISES:ALL *******************************************


// Definimos un array con las URLs de los endpoints a los que queremos hacer fetch
    const urls = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/comments'
  ];
  
  // Creamos un array de promesas, donde cada promesa es el resultado de una llamada a fetch
//   const promises = urls.map(url =>
//     fetch(url)
//       .then(response => {
//         // Verificamos si la respuesta fue exitosa (status 2xx)
//         if (!response.ok) {
//           throw new Error(`Error en la petición a ${url}: ${response.statusText}`);
//         }
//         // Parseamos la respuesta como JSON
//         return response.json();
//       })
//       .catch(error => {
//         console.error(`Hubo un error al obtener datos de ${url}:`, error);
//         // Relanzamos el error o retornamos algo que indique el fallo si es necesario
//         throw error;
//       })
//   );
  
//   // Usamos Promise.all para esperar a que todas las promesas se resuelvan
//   Promise.all(promises)
//     .then(data => {
//       // 'data' es un array que contiene los resultados de cada promesa en el mismo orden que las URLs
//       const posts = data[0];
//       const users = data[1];
//       const comments = data[2];
  
//       console.log('Datos de Posts:', posts);
//       console.log('Datos de Usuarios:', users);
//       console.log('Datos de Comentarios:', comments);
  
//       // Aquí puedes trabajar con los datos obtenidos de las tres peticiones
//       // Por ejemplo, podrías actualizar la UI, combinar los datos, etc.
//     })
//     .catch(error => {
//       // Este catch se ejecutará si alguna de las promesas en Promise.all falla
//       console.error('Al menos una de las peticiones falló:', error);
//     });
  
//   console.log('Este mensaje aparece antes que los resultados de fetch porque las peticiones son asíncronas.');

