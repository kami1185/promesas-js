function simularOperacionExitosa() {
    return new Promise(function(resolve, reject) {
      console.log("Iniciando operación exitosa...");
      // Simula un retraso de 2 segundos
      setTimeout(function() {
        const datos = { mensaje: "Operación completada con éxito!" };
        console.log("Operación exitosa finalizada.");
        // Llamamos a resolve para indicar que la promesa se ha cumplido
        resolve(datos);
      }, 2000);
    });
  }
  
  
  // Llamamos a la función que devuelve la promesa
  simularOperacionExitosa()
    .then(function(resultado) {
      // Esta función se ejecuta cuando la promesa se resuelve
      console.log("Promesa cumplida. Resultado:");
      console.log(resultado.mensaje);
    })
    .catch(function(error) {
      // Esta función se ejecuta si la promesa es rechazada (no sucederá en este ejemplo)
      console.error("Promesa rechazada. Error:");
      console.error(error);
    });
  
  console.log("Después de llamar a la promesa.");
  console.log("Este código se ejecuta inmediatamente, sin esperar la promesa.");

//   Explicación paso a paso:

// 1.function simularOperacionExitosa() { ... }: Definimos una función que simulará una operación asíncrona. 
// Esta función devuelve un nuevo objeto Promise.

// 2. return new Promise(function(resolve, reject) { ... });: Creamos una nueva promesa usando el constructor Promise.
// El constructor recibe una función ejecutora con dos argumentos: resolve y reject. Estas son funciones proporcionadas por JavaScript para cambiar el estado de la promesa.
// console.log("Iniciando operación exitosa...");: Mensaje que se imprime inmediatamente al crear la promesa.
// setTimeout(function() { ... }, 2000);: Usamos setTimeout para simular una operación asíncrona que tarda 2 segundos.
// console.log("Operación exitosa finalizada.");: Este mensaje se imprime después del retraso de 2 segundos.
// const datos = { mensaje: "Operación completada con éxito!" };: Creamos algunos datos que representarán el resultado de la operación.
// resolve(datos);: Este es el paso clave que cambia el estado de la promesa a fulfilled. Llamamos a la función resolve y le pasamos los datos como el valor resultante de la promesa.
// console.log("Antes de llamar a la promesa.");: Mensaje que se imprime antes de invocar la función que devuelve la promesa.
// simularOperacionExitosa(): Llamamos a la función. Esto crea y devuelve la promesa, y el código dentro de la función ejecutora comienza a ejecutarse (incluyendo el setTimeout).
// .then(function(resultado) { ... }): Adjuntamos un manejador .then() a la promesa devuelta por simularOperacionExitosa(). La función pasada a .then() se ejecutará solo cuando la promesa se resuelva (fulfilled). El argumento resultado de esta función es el valor que se pasó a resolve() (en este caso, el objeto datos).
// .catch(function(error) { ... }): Adjuntamos un manejador .catch(). Esta función se ejecutaría si la promesa fuera rechazada, pero en este ejemplo, la promesa siempre se resuelve.
// console.log("Después de llamar a la promesa."); console.log("Este código se ejecuta inmediatamente, sin esperar la promesa.");: Estos mensajes se imprimen inmediatamente después de llamar a simularOperacionExitosa(), demostrando que la llamada a la función no bloquea la ejecución del código principal.
// Después de 2 segundos: El setTimeout se completa, se imprime "Operación exitosa finalizada.", se llama a resolve(datos), lo que cambia el estado de la promesa a fulfilled y activa la ejecución de la función dentro del .then().

// Salida final:
// Antes de llamar a la promesa.
// Iniciando operación exitosa...
// Después de llamar a la promesa.
// Este código se ejecuta inmediatamente, sin esperar la promesa.
// Operación exitosa finalizada.
// Promesa cumplida. Resultado:
// Operación completada con éxito!

// **********************************************************************************************************

// Ejemplo 2: Promesa que se Rechaza (Rejected)
// Este ejemplo muestra cómo crear una promesa que falla y cómo manejar el error utilizando .catch().

    // Función que simula una operación asíncrona que falla
    function simularOperacionConError() {
    return new Promise(function(resolve, reject) {
        console.log("Iniciando operación con error...");
        // Simula un retraso de 1 segundo
        setTimeout(function() {
        const error = new Error("Algo salió mal durante la operación.");
        console.log("Operación con error finalizada.");
        // Llamamos a reject para indicar que la promesa ha sido rechazada
        reject(error);
        }, 1000);
    });
    }

    console.log("Antes de llamar a la promesa con error.");

    // Llamamos a la función que devuelve la promesa
    simularOperacionConError()
    .then(function(resultado) {
        // Esta función se ejecuta si la promesa se resuelve (no sucederá en este ejemplo)
        console.log("Promesa cumplida (inesperado). Resultado:", resultado);
    })
    .catch(function(error) {
        // Esta función se ejecuta cuando la promesa es rechazada
        console.error("Promesa rechazada. Error:");
        console.error(error.message);
    });

    console.log("Después de llamar a la promesa con error.");
    console.log("Este código también se ejecuta inmediatamente.");