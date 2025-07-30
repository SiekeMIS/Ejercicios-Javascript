// Realizar un programa que conste de una clase llamada Estudiante, que tenga como atributos el nombre y la nota del alumno. Definir 
// los métodos para inicializar sus atributos, imprimirlos y mostrar un mensaje con el resultado de la nota y si ha aprobado o no. (1)
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
// cuando se invoque sobre un objeto creado con “Persona”. (2)
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

// Realizar un programa en el cual se declaren dos valores enteros por teclado utilizando el método __init__. Calcular después la suma, resta, multiplicación y 
// división. Utilizar un método para cada una e imprimir los resultados obtenidos. Llamar a la clase Calculadora.(3)
// class Calculadora {
//     constructor(numero_uno, numero_dos) {
//         this.numero_uno = numero_uno;
//         this.numero_dos = numero_dos;
//     }

//     suma() {
//         const resultado = this.numero_uno + this.numero_dos;
//         console.log(`Resultado de la Suma ${this.numero_uno} + ${this.numero_dos}: ${resultado}`);
//         return resultado;
//     }

//     resta() {
//         const resultado = this.numero_uno - this.numero_dos;
//         console.log(`Resultado de la Resta ${this.numero_uno} - ${this.numero_dos}: ${resultado}`);
//         return resultado;
//     }

//     multiplicacion() {
//         const resultado = this.numero_uno * this.numero_dos;
//         console.log(`Resultado de la Multiplicación ${this.numero_uno} * ${this.numero_dos}: ${resultado}`);
//         return resultado;
//     }

//     division() {
//         if (this.numero_dos === 0) {
//             console.log("Error: No se puede dividir por cero");
//             return undefined;
//         }
//         const resultado = this.numero_uno / this.numero_dos;
//         console.log(`Resultado de la División ${this.numero_uno} / ${this.numero_dos}: ${resultado}`);
//         return resultado;
//     }
// }

// // Ejemplo de Uso:
// const operacion = new Calculadora(3, 2);
// operacion.suma();         // Resultado de la Suma 3 + 2: 5
// operacion.resta();        // Resultado de la Resta 3 - 2: 1
// operacion.multiplicacion(); // Resultado de la Multiplicación 3 * 2: 6
// operacion.division();      // Resultado de la División 3 / 2: 1.5

// Crear una clase “Persona” que sea la clase padre de otra clase “Estudiante”. Por tanto:
// En la clase “Persona” su método __init__() debe de estar preparado para recibir nombre y apellido. Además, esta clase , debe tener un método para mostrar 
// nombre_completo() el cual debe mostrar el nombre acompañado del apellido.
// La otra clase “Estudiante”, debe de poder heredar de “Persona”, y además recibir los argumentos nombre y edad. También la clase “Estudiante”, 
// recibe el valor “carrera”, y además contar con un método mostrar_carrera(). Las dos clases son obligatorias. (4)
// class Persona {
//     constructor(nombre, apellido) {
//         this.nombre = nombre;
//         this.apellido = apellido;
//     }

//     nombre_completo() {
//         console.log(`Nombre completo: ${this.nombre} ${this.apellido}`);
//         return `${this.nombre} ${this.apellido}`;
//     }
// }

// class Estudiante extends Persona {
//     constructor(nombre, apellido, edad, carrera) {
//         super(nombre, apellido);
//         this.edad = edad;
//         this.carrera = carrera;
//     }

//     mostrar_carrera() {
//         console.log(`Carrera: ${this.carrera} Edad: ${this.edad}`);
//         return this.carrera;
//     }
// }

// // Ejemplo de uso
// const estudiante = new Estudiante("Lucas", "Darrouy", 26, "TI");
// estudiante.nombre_completo();  // Nombre completo: Lucas Darrouy
// estudiante.mostrar_carrera();  // Carrera: TI

