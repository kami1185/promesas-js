const BASE_URL = 'https://jsonplaceholder.typicode.com';

// Función async para obtener un usuario
async function obtenerUsuarioPorId(userId) {
  console.log(`Intentando obtener usuario con ID: ${userId} (usando async/await)...`);
  try {
    const response = await fetch(`${BASE_URL}/users/${userId}`);

    // === Manejo de errores basado en el estado HTTP ===
    if (!response.ok) {
      // Lanzar un error si el estado no es 2xx
      if (response.status === 404) {
        throw new Error(`Error: Usuario con ID ${userId} no encontrado (Estado: ${response.status})`);
      } else {
        throw new Error(`Error en la petición: Estado ${response.status}`);
      }
    }

    // Si la respuesta es OK, parsear el cuerpo como JSON (esto también es asíncrono)
    const userData = await response.json();

    console.log(`Usuario ${userId} obtenido exitosamente.`);
    return userData; // Devolvemos los datos del usuario
    
  } catch (error) {
    // Este catch maneja errores de red O los errores lanzados manualmente arriba
    console.error("Ocurrió un error en obtenerUsuarioPorId:", error.message);
    throw error; // Re-lanzamos el error para que el llamador también lo maneje si es necesario
  }
}

// --- Uso de la función async ---

console.log("--- Petición Exitosa ---");
obtenerUsuarioPorId(1) // Intentamos obtener el usuario con ID 1
  .then(usuario => {
    console.log("Datos del usuario:", usuario);
  })
  .catch(error => {
    // Este catch solo se ejecutará si la función async lanza un error
    console.log("Manejo del error en el llamador después de re-lanzar.");
  });

console.log("\n--- Petición con Error (Usuario no encontrado) ---");
obtenerUsuarioPorId(999) // Intentamos obtener un usuario que no existe
  .then(usuario => {
    console.log("Datos del usuario (esto no debería imprimirse):", usuario);
  })
  .catch(error => {
     // Este catch capturará el error lanzado dentro de la función async
    console.log("Manejo del error en el llamador para usuario no encontrado.");
  });

console.log("\nEste mensaje aparece ANTES de que terminen las operaciones asíncronas.");