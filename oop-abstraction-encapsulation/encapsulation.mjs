import { Comment } from "../opp-inheritance-polymorphism/polymorphism.mjs";

/*

Encapsulamiento:
La encapsulación es el empaquetamiento de datos y funciones en un componente
(por ejemplo, una clase) y para luego controlar el acceso a ese componente para
hacer un ejecto de “caja negra” fuera del objeto. Debido a esto, un usuario de
esa clase solo necesita conocer su interfaz (es decir, los datos y las funciones
expuestas fuera de la clase), no la implementación oculta.

Cuando hablamos de **encapsulamiento **hablamos de:
  -Esconder métodos y atributos 👻
  -No permitir la alteración de métodos y atributos ❌
  -Encapsulamiento en JavaScript
  -No permitir la alteración de métodos y atributos ❌

Formas de aplicar encapsulamiento en JavaScript
  -Getters y setters 🖐
  -Namespaces 🙂
  -Object.defineProperties 🎈
  -Módulo de ES6 🤝

*/

export class Courses {
  constructor({
    name,
    classes = [],
    isFree = false,
    language = 'spanish',
  }) {
    this._name = name;
    this.classes = classes;
    this.isFree = isFree;
    this.language = language;
  };

  // Implementacion del getter. El getter es un metodo que adquiere el valor de un atributo.
  get name() {
    return this._name;
  };

  // Implementacion del setter. El setter es un metodo que asigna valor a un atributo.
  set name(newName) {
    if (newName === 'Nombre Inapropiado') {
      console.error('Invalid name');
    } else {
      this._name = newName;
    };
  };
};

export class LearningPaths {
  constructor({
    name,
    courses = [],
  }) {
    this.name = name;
    this.courses = courses;
  };

  
};

export class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approveCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approveCourses = approveCourses;
    this.learningPaths = learningPaths;
  };

  postComment(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
    });

    comment.post();
  };
};



// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



function play(id) {
  const url = 'https://platzi.com' + id;
  console.log(`Reproduciendo exitosamente desde ${url}`);
}

function stop(id) {
  const url = 'https://platzi.com' + id;
  console.log(`Pausado exitosamente desde ${url}`);
}

class PlatziClass {
  constructor({
    name,
    videoID,
  }) {
    this.name = name;
    this.videoID = videoID;
  };

  playClass() {
    play(this.videoID);
  };

  pauseClass() {
    stop(this.videoID);
  };
};

export {PlatziClass};