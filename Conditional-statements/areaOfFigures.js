function areaOfFigures (input) {

let figures = input [0];
let x = Number(input[1]);
let y = Number(input[2]);

if (figures === "square") {
    let sum = x * x 
    console.log(sum.toFixed(3));
} else if (figures === "rectangle") {
    let sum = x * y
    console.log(sum.toFixed(3));
} else if (figures === "circle") {
    let sum = Math.PI * Math.pow(x,2)
    console.log(sum.toFixed(3));
} else {
    let sum = x * y / 2
    console.log(sum.toFixed(3));
}
}
areaOfFigures (["square", "5"]);
//areaOfFigures (["rectangle","7","2.5"]);