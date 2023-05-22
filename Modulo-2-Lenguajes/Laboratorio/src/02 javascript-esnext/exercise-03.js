console.log("************** CONCAT *********************");

// Apartado A - spread operator

const concatEsnext = (a, b) => [...a, ...b];

console.log(concatEsnext([1, 2, 3], [4, 5, 6]));

// Apartado B - + 2 arrays

const concatMultiple = (...arrays) => {
    let aux= [];

    for (let array of arrays) {
        aux = concatEsnext(aux, array)
    }

    return aux;
}

console.log(concatMultiple(['arr1'], ['arr2'], ['arr3'], ['arr4'], ['arr5'], ['arr6']));