import { Courses } from "../oop-abstraction-encapsulation/encapsulation.mjs";
import { LearningPaths } from "../oop-abstraction-encapsulation/encapsulation.mjs";
import { FreeStudent } from "./inheritance.mjs";
import { BasicStudent } from "./inheritance.mjs";
import { ExpertStudent } from "./inheritance.mjs";

/*

¿QUÉ ES EL POLIMORFISMO?
Es como la herencia reloaded. Es como ‘La Herencia 2.0’. Es un pilar de la OOP.
Lo que es importante es lo que se puede hacer con este: Permite a nuestras subclases
cambiar o anular los comportamientos de los métodos y atributos del prototipo madre,
de la clase madre. Aunque herede las propiedades, el polimorfismo permite cambiar su comportamiento.
·

Tipos:
  - Polimorfismo de Sobrecarga: ocurre cuando existen métodos con el mismo nombre y
    funcionalidad similar en clases totalmente independientes entre ellas.
  - Polimorfismo Paramétrico: El polimorfismo paramétrico es la capacidad para definir
    varias funciones utilizando el mismo nombre, pero usando parámetros diferentes (nombre y/o tipo).
  - Polimorfismo de Inclusión (JS): La habilidad para redefinir por completo el método
    de una superclase en una subclase.

*/

export class Comment {
  constructor({
    content,
    studentName,
    studentRole = 'Student',
  }) {
    this.content = content;
    this.studentName = studentName;
    this.studentRole = studentRole;
    this.likes = 0;
  };

  post() {
    console.log(`${this.studentName} (${this.studentRole})`);
    console.log(`${this.likes} likes`);
    console.log(`${this.content}`);
  };
};