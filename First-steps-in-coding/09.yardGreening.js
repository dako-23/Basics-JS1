function yardGreening (input){

let pricePerM2 = 7.61;
let discount = 0.18;
let greeningArea = Number (input[0]);

let totalPrice = greeningArea * pricePerM2;
let totalDiscount = totalPrice * discount;
let finalPrice = totalPrice - totalDiscount;

console.log(`The final price is: ${finalPrice} lv.`);
console.log(`The discount is: ${totalDiscount} lv.`);


}
yardGreening(["550"]);