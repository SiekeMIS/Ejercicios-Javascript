// Realizar un programa que conste de una clase llamada Estudiante, que tenga como atributos el nombre y la nota del alumno. Definir 
// los métodos para inicializar sus atributos, imprimirlos y mostrar un mensaje con el resultado de la nota y si ha aprobado o no.

class Estudiante {
    constructor(nombre, nota) {
        this.nombre = nombre;
        this.nota = nota;
    }

    imprimirInformacion() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Nota: ${this.nota}`);
    }

    verificarAprobacion() {
        if (this.nota >= 6) {
            console.log(`${this.nombre} ha aprobado.`);
        } else {
            console.log(`${this.nombre} ha reprobado.`);
        }
    }
}

// Ejemplo de uso
const estudiante1 = new Estudiante("Juan", 8);
estudiante1.imprimirInformacion();
estudiante1.verificarAprobacion();
