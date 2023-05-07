import { Student } from "../oop-abstraction-encapsulation/encapsulation.mjs";

/*

La herencia nos permite crear clases madres, moldes generales o super prototipos
para crear nuevos prototipos a partir de ellos.

En el nuevo prototipo se puede heredar desde la clase madre todos los atributos
y métodos que allí definimos. La palabra reservada para lograr esto es extends.

*/

export class FreeStudent extends Student {
  constructor(props) {
    super(props)
  };

  approveCourse(newCurse) {
    if (newCurse.isFree) {
      this.approveCourses.push(newCurse);
    } else {
      console.warn(`Lo sentimos ${this.name}, solo puedes tomar cursos abiertos`)
    };
  };
};

export class BasicStudent extends Student {
  constructor(props) {
    super(props)
  };

  approveCourse(newCurse) {
    if (newCurse.language !== 'spanish') {
      console.warn(`Lo sentimos ${this.name}, solo puedes tomar cursos en español`)
    } else {
      this.approveCourses.push(newCurse);
    };
  };
};

export class ExpertStudent extends Student {
  constructor(props) {
    super(props)
  };

  approveCourse(newCurse) {
    this.approveCourses.push(newCurse);
  };
};

export class Teacher extends Student {
  constructor(props) {
    super(props)
  };

  approveCourse(newCurse) {
    this.approveCourses.push(newCurse);
  };

  postComment(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
      studentRole: 'Teacher',
    });

    comment.post();
  };
}