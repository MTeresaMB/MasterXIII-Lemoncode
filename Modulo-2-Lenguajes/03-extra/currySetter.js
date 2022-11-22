const julia = { name: "Julia", surname: "Álvarez", age: 19 };
const updatedJulia = set(julia, "age", 25);

console.log(updatedJulia); // { name: 'Julia', surname: 'Álvarez', age: 25 }
console.log(julia); // { name: 'Julia', surname: 'Álvarez', age: 19 }
console.log(julia === updatedJulia); // false

// const setName = set(/* ... */);
// const setSurName = set(/* ... */);
// const setAge = set(/* ... */);

// const julia = { name: "Julia", surname: "Álvarez", age: 19 };

// console.log(setName(julia, "Ana")); // { name: 'Ana', surname: 'Álvarez', age: 19 };
// console.log(setSurname(julia, "González")); // { name: 'Julia', surname: 'González', age: 19 };
// console.log(setAge(julia, 25)); // { name: 'Julia', surname: 'Álvarez', age: 25 }