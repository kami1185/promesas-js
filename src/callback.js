  
// Callback functions are functions that are passed as arguments to other functions.

    function simpleCalculation(a, b, callback) {
        const result = a + b;
        callback(result);
    }

    simpleCalculation(5, 3, function (result) {
        console.log(`The result is: ${result}`);
    });

    
// ***********************************************************************************************************
    
    // function procesarElementos(arr, callback) {
    //     console.log("Iniciando procesamiento de elementos...");
    //     for (let i = 0; i < arr.length; i++) {
    //     // Llama a la función callback para cada elemento
    //     callback(arr[i], i, arr);
    //     }
    //     console.log("Procesamiento finalizado.");
    // }
    
    // function mostrarElemento(elemento, indice, arrayCompleto) {
    //     console.log(`Elemento en índice ${indice}: ${elemento}`);
    // }
    
    // const numeros = [1, 2, 3, 4, 5];
    
    // // Llamamos a procesarElementos y le pasamos el array y la función mostrarElemento como callback
    // procesarElementos(numeros, mostrarElemento);

    // Explicación paso a paso:

    // 1. procesarElementos(arr, callback): Definimos una función llamada procesarElementos 
    // que acepta dos argumentos: arr (un array) y callback (una función).

    // 2. console.log("Iniciando procesamiento de elementos...");: Se imprime un mensaje indicando el inicio del proceso.

    // 3. for (let i = 0; i < arr.length; i++) { ... }: Se inicia un bucle que iterará sobre cada elemento del array arr.

    // 4. callback(arr[i], i, arr);: Dentro del bucle, en cada iteración, se llama a la función que fue pasada como
    // argumento callback. Se le pasan tres argumentos: el elemento actual (arr[i]), su índice (i), y el array completo (arr).
    
    // 5. mostrarElemento(elemento, indice, arrayCompleto): Definimos la función mostrarElemento. 
    // Esta es la función que actuará como callback. Recibe los argumentos que le pasa procesarElementos.
    
    // 6. console.log(Elemento en índice ${indice}: ${elemento});: Dentro de mostrarElemento,
    // se imprime información sobre el elemento actual y su índice.

    // 7. const numeros = [1, 2, 3, 4, 5];: Creamos un array de ejemplo.
    
    // 8. procesarElementos(numeros, mostrarElemento);: Aquí es donde llamamos a procesarElementos. 
    // Le pasamos el array numeros y la función mostrarElemento. La función mostrarElemento no se 
    // ejecuta en este momento, solo se pasa como una referencia.

    // 9. Ejecución del bucle en procesarElementos: La función procesarElementos comienza a ejecutarse. 
    // Por cada elemento en numeros, llama a mostrarElemento, pasando el elemento, su índice y el array.

    // 10. Salida: La consola mostrará:
    // Iniciando procesamiento de elementos...
    // Elemento en índice 0: 1
    // Elemento en índice 1: 2
    // Elemento en índice 2: 3
    // Elemento en índice 3: 4
    // Elemento en índice 4: 5
    // Procesamiento finalizado.

// *******************************************************************************************************

    // Callback Asíncrona (usando setTimeout)
    // Este ejemplo ilustra cómo las callbacks se utilizan para ejecutar código después de una operación que
    // toma tiempo en completarse, sin bloquear la ejecución del programa.

    // function realizarTareaAsincrona(callback) {
    //     console.log("Iniciando tarea asíncrona...");
    //     // Simula una operación que toma tiempo (por ejemplo, una petición de red)
    //     setTimeout(function() {
    //         console.log("Tarea asíncrona completada.");
    //         const resultado = "Datos obtenidos después de la espera.";
    //         // Llama a la función callback con el resultado
    //         callback(resultado);
    //     }, 2000); // Espera 2 segundos
    // }

    // function manejarResultado(datos) {
    //     console.log("Manejando el resultado:");
    //     console.log(datos);
    // }

    // console.log("Antes de llamar a la tarea asíncrona.");

    // // Llamamos a realizarTareaAsincrona y le pasamos la función manejarResultado como callback
    // realizarTareaAsincrona(manejarResultado);

    // console.log("Después de llamar a la tarea asíncrona.");
    // console.log("Esto se ejecuta inmediatamente, sin esperar la tarea.");


// *******************************************************************************************************


    // let result = [];

    // function raisedSquareCallback(value, callback){
    //     setTimeout(()=>{
    //         result = [...result,'Async task completed!'];
    //         // recibe un valor y la funcion a ejecutar, la multiplicacion y seria la callback a resolver:
    //         callback(value, value*value);
    //     },0 | Math.random() * 2000)
    // }


    // // enviamos el valor a calcular y una funcion anonima en la cual el callback nos devuelve el valor 
    // // y el resultado del valor elevado al cuadrado, y recibimos esos argumentos en la funcion anonima
    // raisedSquareCallback(0,(value,res)=> {
    //     result = [...result,'Init Callback'];
    //     result = [...result,`${value} * ${value} = ${res}`];
    //     // se puede invocar nuevamente la Callback, ESTO FORMA UN CALLBACK HELL QUE SE DEBE EVITAR
    //     raisedSquareCallback(1,(value,res)=> {
    //         result = [...result,`${value} * ${value} = ${res}`];
    //         raisedSquareCallback(2,(value,res)=> {
    //             result = [...result,`${value} * ${value} = ${res}`];
    //             console.log('RESULT:::::::::::::::',result);
    //         })
    //     })
    // })
