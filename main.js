/*

  - Prototipo Object: Es el objeto de donde deriva todo.
  - Objecto Literal: Aunque sean hardcoding son instancias del prototipo Object.
  - Instancias de Prototipos: son objetos que nacen al instanciar prototipos que nosotros definimos con la palabra reservada "new".
  -  Arrays: son instancias del prototipo Array

*/ 


// Objeto literal que es instancia del objeto __proto__ 
const yordy = {
  name: 'Yordy',
  age: 26,
  approvedCourses: [
    'Curso Básico de Javascript',
    'Curso Introducción a React.Js'
  ],

  example: function (argument) {
    // ... 
  },

  approveNewCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
}

// Mutando las propiedades del objeto
// yordy.coursesApproved.push('Curso Profesional de Git y GitHub');
yordy.name = 'Yordy Leonardo Almonte Ruiz'; 
yordy.age += 1;

function Student(name, age, approvedCourses) {
  this.name = name;
  this.age = age;
  this.approvedCourses = approvedCourses;

  this.example = function (argument) {
    // ...
  }
}

Student.prototype.approveNewCourse = function (newCourse) {
  this.approvedCourses.push(newCourse);
}

const farrachel = new Student(
  'Rafael Cabrera',
  21,
  [
    'Curso Definitivo de HTML y CSS',
    'Curso de Frontend Developer',
    'Curso de Responsive Design: Maquetación Mobile First',
  ],
);