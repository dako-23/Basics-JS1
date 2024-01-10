function radianToDegrees (input) {

let radians = Number (input[0]);
let degrees = radians * 180 / Math.PI;

console.log(degrees);

}
radianToDegrees(["6.2832"]);
//radianToDegrees(["3.1416"]);