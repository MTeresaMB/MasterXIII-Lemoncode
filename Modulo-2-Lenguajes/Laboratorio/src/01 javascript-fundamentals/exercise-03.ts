console.log("****** EXCERCISE 3 - Check Arguments ******");

const checkResults = (input: unknown) => input === undefined ? "Unknown" : input === null ? "" : input;

console.log(checkResults("hola"));
console.log(checkResults(undefined));
console.log(checkResults(null));

