// Realizar un programa que conste de una clase llamada Estudiante, que tenga como atributos el nombre y la nota del alumno. Definir 
// los métodos para inicializar sus atributos, imprimirlos y mostrar un mensaje con el resultado de la nota y si ha aprobado o no.
// class Estudiante {
//     constructor(nombre, nota) {
//         this.nombre = nombre;
//         this.nota = nota;
//     }

//     imprimirInformacion() {
//         console.log(`Nombre: ${this.nombre}`);
//         console.log(`Nota: ${this.nota}`);
//     }

//     verificarAprobacion() {
//         if (this.nota >= 6) {
//             console.log(`${this.nombre} ha aprobado.`);
//         } else {
//             console.log(`${this.nombre} ha reprobado.`);
//         }
//     }
// }

// // Ejemplo de uso
// const estudiante1 = new Estudiante("Juan", 8);
// estudiante1.imprimirInformacion();
// estudiante1.verificarAprobacion();

// Crea una clase “Persona”. Con atributos nombre y edad. Además, hay que crear un método “cumpleaños”, que aumente en 1 la edad de la persona
// cuando se invoque sobre un objeto creado con “Persona”.
// Tendríamos que lograr ejecutar el siguiente código con la clase creada:
// class Persona {
//     constructor(nombre, edad) {
//         this.nombre = nombre;
//         this.edad = edad;
//     }

//     cumpleanos() {
//         this.edad += 1;
//         console.log(`Feliz cumpleaños ${this.nombre}! Ahora tienes ${this.edad} años.`);
//     }
// }

// // Ejemplo de uso
// const persona1 = new Persona("Ana", 25);
// persona1.cumpleanos(); // Salida: Feliz cumpleaños Ana! Ahora tienes 26 años.