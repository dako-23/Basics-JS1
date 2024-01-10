function suppliesForSchool (input){

let pricePens = 5.80;
let priceMarkers = 7.20;
let pricePreparation = 1.20;

let pens = Number (input[0]);
let markers = Number (input[1]);
let preparation = Number (input[2]);
let discount = Number (input[3]) / 100;

let totalPricePens = pens * pricePens;
let totalPriceMarkers = markers * priceMarkers;
let totalPricePreparation = preparation * pricePreparation;

let totalPrice = totalPriceMarkers + totalPricePens + totalPricePreparation;
let priceWithDiscount = totalPrice - (totalPrice * discount);

console.log(priceWithDiscount);

}
suppliesForSchool (["4","2","5","13"]);
//suppliesForSchool (["2","3","4","25"]);

// Цена на пакетите химикали => 2 * 5.80 = 11.60 лв.
// Цена на пакетите маркери => 3 * 7.20 = 21.60 лв.
// Цена на препарата => 4 * 1.20 = 4.80 лв.
// Цена за всички материали => 11.60 + 21.60 + 4.80 = 38.00 лв.
// 25% = 0.25
// Цена с намаление = 38.00 – (38.00 * 0.25) = 28.50 лв.