function petShop (input){

let dogFoodPrice = 2.50;
let catFoodPrice = 4;

let numberOfDogFood = Number (input[0]);
let numberOfCatFood = Number (input[1]);

let totalPrice = (numberOfDogFood * dogFoodPrice) + (numberOfCatFood * catFoodPrice);

console.log(`${totalPrice} lv.`);
}
petShop(["13","9"]);
//petShop(["5","4"]);