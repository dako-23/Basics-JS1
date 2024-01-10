function fishTank(input){

let lenght = Number(input[0]);
let widht = Number (input[1]);
let height = Number (input[2]);
let occupiedSpace = Number (input[3]) / 100;

let sizeTank = lenght * widht * height;
let volumeTank = sizeTank * 0.001;
let needLiters = volumeTank * (1 - 0.17)

console.log(needLiters);

}
fishTank(["85","75","47","17"]);
// обем на аквариумa: 85 * 75 * 47 = 299625 см3
// обем в литри: 299625 * 0.001 или  299625 / 1000 => 299.625 литра
// заето пространство: 17% = 0.17
// нужни литри: 299.625 * (1 - 0.17) = 248.68875 литра