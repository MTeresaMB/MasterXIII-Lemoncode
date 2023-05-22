console.log("************** SWAP *********************");

let exampleA = "A";
let exampleB = "B";

[exampleB,exampleA] = [exampleA,exampleB]

console.log(exampleA === "B" && exampleB === "A" ? "You did it!" : "Keep trying!");
