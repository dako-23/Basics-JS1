// ⦁	Premiere – премиерна прожекция, на цена 12.00 лева.
// ⦁	Normal – стандартна прожекция, на цена 7.50 лева.
// ⦁	Discount – прожекция за деца, ученици и студенти на намалена цена от 5.00 лева.

function cinema (input){

let movieType = input[0];
let rows = Number(input[1]);
let cols = Number(input[2]);

let seats = rows * cols;
let profit = 0;

if(movieType === "Premiere") {
    profit = seats * 12;
}else if (movieType === "Normal"){
    profit = seats * 7.50;
}else if (movieType === "Discount"){
    profit = seats * 5.00;
}
console.log(`${profit.toFixed(2)} leva`);



}
cinema(["Premiere","10","12"])