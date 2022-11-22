const head = (/* array */) => {}; // Implementation here.
const tail = (/* array */) => {}; // Implementation here.
const init = (/* array */) => {}; // Implementation here.
const last = (/* array */) => {}; // Implementation here.
const concat = (a, b) => {}; // Implementation here.
function clone(source) {
  // Implementation here.
}

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

merge(a, b); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}

function merge(source, target) {
  // Implementation here.
}

function isBookRead(books, titleToSearch) {
  // Implementation here
}

const books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false

class SlotMachine {
  /* ... */
}

const machine1 = new SlotMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"