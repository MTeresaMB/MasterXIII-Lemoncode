console.log("************** DEEP ACCESS *********************");

// Apartado A

{
  const myObject = {
    a: 1,
    b: {
      c: null,
      d: {
        e: 3,
        f: {
          g: "bingo",
        }
      }
    }
  };

  const deepGet = (object, ...propertyPath) => {
    if(propertyPath.length === 0) return object;
    return propertyPath.reduce((property, key) => {
      return (property && property[key] !== undefined) ? property[key] : undefined;
    }, object);
  };

  console.log(deepGet(myObject, "x")); // undefined
  console.log(deepGet(myObject, "a")); // 1
  console.log(deepGet(myObject, "b")); // { c: null, d: {....}}
  console.log(deepGet(myObject, "b", "c")); // null
  console.log(deepGet(myObject, "b", "d", "f", "g")); // bingo
  console.log(deepGet(myObject));  // {a: 1, b: {...}}
}

{
  const myObject = {};

  const deepSet = (propertyValue, object, ...propertyPath) => {
    if(propertyPath.length === 0) return object;
    
    let objectPath = object;
    for(let i = 0; i < propertyPath.length - 1; i++) {
      if (objectPath[propertyPath[i]] === undefined) objectPath[propertyPath[i]] = {};
      
      objectPath[propertyPath[i]][propertyPath[i + 1]] = undefined;
      objectPath = objectPath[propertyPath[i]];
    }
    
    objectPath[propertyPath[propertyPath.length - 1]] = propertyValue;
    return object;
  };

  deepSet(1, myObject, "a", "b");
  console.log(JSON.stringify(myObject));  // {a: { b: 1}}
  deepSet(2, myObject, "a", "c");
  console.log(JSON.stringify(myObject));  // {a: { b: 1, c: 2}}
  deepSet(3, myObject, "a");
  console.log(JSON.stringify(myObject));  // {a: 3}
  deepSet(4, myObject);
  console.log(JSON.stringify(myObject));  // Do nothing // {a: 3}
}