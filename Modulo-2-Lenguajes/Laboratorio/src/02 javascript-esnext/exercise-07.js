console.log("************** REMINDER *********************");

class Reminder {
  constructor(text) {
    this.text = text;
  }

  remindMe(delay) {
    setTimeout(() => { 
      console.log(`Your reminder after ${delay} seconds is: ${this.text}`); // undefined
    }, delay * 1000);
  }
}

let example = new Reminder("hello world");
console.log(example)
example.remindMe(4); 

// Lo que pasa es que setTimeout saca del contexto de la instancia el metodo que estamos usando remindMe, y al intentar
// ejecutar el ${this.text} sale undefined porque esta intentando ejecutarlo desde el ambito global y éste no esta 
// Lo he arreglado cambiando la funcion por una funcion anonima y arrow
