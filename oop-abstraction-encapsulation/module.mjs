import { PlatziClass } from "./encapsulation.mjs";

/*

Módulos de ECMAScript 6:

Si bien podemos encapsular atributos y propiedades también podemos encapsular archivos enteros.
Al encapsular archivos enteros podemos restringir y controlar el acceso tanto de variables
como funciones o el contenido en sí que tenga dicho módulo.

Para ser utilizados en un sitio web es necesario poder contar con un servidor web y también
que sea soportado por el navegador del usuario

El uso de dichos módulos nos permite usar

import {variable} from “./modulo.js”
export variable

*/

const class67 = new PlatziClass({
  name: 'JavaScript: orientado a objetos, basado en prototipos',
  videoID: '45785384',
});

class67.playClass();
class67.pauseClass();