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
});

const jsBasico = new Courses({
  name: 'Curso Básico de Javascript',
  classes: [],
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

const yordy = new Student({
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

const darian = new Student({
  name: 'Darian Then',
  username: 'darythen',
  email: 'darythen@gmail.com',
  instagram: 'darythen',
  learningPaths: [
    dataScienceSchool,
  ],
});
