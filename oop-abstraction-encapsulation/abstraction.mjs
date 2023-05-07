import { Courses } from "./encapsulation.mjs";
import { LearningPaths } from "./encapsulation.mjs";
import { FreeStudent } from "../opp-inheritance-polymorphism/inheritance.mjs";
import { BasicStudent } from "../opp-inheritance-polymorphism/inheritance.mjs";
import { ExpertStudent } from "../opp-inheritance-polymorphism/inheritance.mjs";
import { Teacher } from "../opp-inheritance-polymorphism/inheritance.mjs";
import { Comment } from "../opp-inheritance-polymorphism/polymorphism.mjs";

/*

Es la forma de abstraer los datos esenciales de un objeto, para (con el fin de) crear su molde,
su Clase, su Prototipo. Abstraer hace referencia a la forma de separar o aislar los datos, rasgos,
cualidades, propiedades o características esenciales, para que se puedan crear y formar instancias
de dicho molde, o sea, la clase. Crear el prototipo es el objetivo de la abstracción, pues cada elemento
u objeto, debe poderse abstraer para que podamos reutilizar el código, o sea crear instancias de esta clase.

Ventajas de uso:
  -Evitamos codigo duplicado, es decir, reusamos codigo.
  -Podemos crear múltiples instancias con una sola abstracción.
  -Al encapsular datos, los estamos protegiendo
  -Evitamos código a bajo nivel.
  -Podemos cambiar implementaciones en la clase, sin perjudicar su funcionamiento.

*/


const programaciónBasica = new Courses({
  name: 'Curso de Programacion Basica',
  classes: [],
  isFree: true,
});

const jsBasico = new Courses({
  name: 'Curso Básico de Javascript',
  classes: [],
  language: 'english',
})

const webDevSchool = new LearningPaths({
  name: 'Escuela de Desarrollo Web',
  courses: [
    programaciónBasica,
    'Curso Definitivo de HTML y CSS',
    jsBasico,
  ],
});

const softwareIngSchool = new LearningPaths({
  name: 'Escuela de Desarrollo de Software',
  courses: [
    programaciónBasica,
    'Curso de Fundamentos de Bases de Datos',
    'Curso de Introduccion a Mongo DB'
  ],
});

const dataScienceSchool = new LearningPaths({
  name: 'Escuela de Data Science',
  courses: [
    programaciónBasica,
    'Curso de Power BI',
    'Curso de Dataviz',
  ],
});

const videoGameSchool = new LearningPaths({
  name: 'Escuela de Desarrollo de Video Juegos',
  courses: [
    programaciónBasica,
    'Curso de Unreal Engine',
    'Curso de Unity',
  ],
});

const yordy = new ExpertStudent({
  name: 'Yordy Leonardo Almonte Ruiz',
  username: 'yordyr06_',
  email: 'yoalmonte.dev@outlook.com',
  twitter: 'yordyr06',
  instagram: 'yordyr06_',
  learningPaths: [
    webDevSchool,
    softwareIngSchool,
  ],
});

const darian = new FreeStudent({
  name: 'Darian Then',
  username: 'darythen',
  email: 'darythen@gmail.com',
  instagram: 'darythen',
  learningPaths: [
    dataScienceSchool,
  ],
});

const farrachel = new BasicStudent({
  name: 'Rafael Alejandro Cabrera',
  username: 'farrachel',
  email: 'alanbrito@outlook.com',
  twitter: 'farrachel',
  instagram: 'farrachel',
  learningPaths: [
    webDevSchool,
  ],
})

const freddy = new Teacher({
  name: 'Freddy Vega',
  username: 'freddier',
  email: 'f@gep.com',
  instagram:'freddiervega',
});

darian.approveCourse(jsBasico);
farrachel.approveCourse(jsBasico);
yordy.approveCourse(programaciónBasica);

yordy.postComment('klok uwu');