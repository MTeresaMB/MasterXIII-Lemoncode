console.log("************** DELIVERABLE 04 *********************");


function isBookRead2(books : Books[], titleToSearch: string) {
  let bookByTitle = books.some(book => book.title === titleToSearch 
    && book.isRead);
  return bookByTitle;
}

interface Books {
  title : string;
  isRead: boolean;
}
const library : Books[] = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

console.log(isBookRead2(library, "Devastación")); // true
console.log(isBookRead2(library, "Canción de hielo y fuego")); // false
console.log(isBookRead2(library, "Los Pilares de la Tierra")); // false