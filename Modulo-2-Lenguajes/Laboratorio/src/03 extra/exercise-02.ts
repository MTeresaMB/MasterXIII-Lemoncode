console.log("************** CURRY SETTER *********************");


const set = (user, key, value) =>{
  let newUser = {...user };
  newUser[key] = value;
  return newUser;
}

const julia = { name: "Julia", surname: "Álvarez", age: 19 };
const updatedJulia = set(julia, "age", 25);


console.log(updatedJulia); // { name: 'Julia', surname: 'Álvarez', age: 25 }
console.log(julia); // { name: 'Julia', surname: 'Álvarez', age: 19 }
console.log(julia === updatedJulia); // false


