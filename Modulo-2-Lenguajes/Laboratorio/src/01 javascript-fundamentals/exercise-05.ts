console.log("****** EXCERCISE 5 - Deep Equal ******");
//Apartado A

var user = { name: "María", age: 30 };
var clonedUser = { name: "María", age: 30 };

console.log(user === clonedUser); // false

function isEqual(a: {}, b: {}) {
  //primera solucion
  // return JSON.stringify(a) === JSON.stringify(b);

  //segunda solucion : comprueba tanto keys como values para devolver true
  // const objA_key = Object.keys(a);
  // const objB_key = Object.keys(b);
  // if (objA_key.length !== objB_key.length) return false;
  // for(let i of objA_key){
  //   if(a[i] !== b[i]){
  //     return false;
  //   }
  // }
  // return true;

  //tercera solucion : solo comprueba las keys para devolver true
  if(a.hasOwnProperty("name") === b.hasOwnProperty("name") 
    && a.hasOwnProperty("age") === b.hasOwnProperty("age")) {
      return true;
  }else{
    return false;
  }
}

console.log(isEqual(user, clonedUser)); // true
