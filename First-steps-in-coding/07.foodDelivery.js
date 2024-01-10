function foodDelivery (input){

let priceChickenMenu = 10.35;
let priceFishMenu = 12.40;
let priceVeggieMenu = 8.15;
let DeliveryPrice = 2.50;

let chickenMenuQty = Number(input[0]);
let fishMenuQty = Number(input[1]);
let veggieMenuQty = Number(input[2]);

let totalChickenPriceMenu = priceChickenMenu * chickenMenuQty;
let totalFishPriceMenu = priceFishMenu * fishMenuQty;
let totalVeggiePriceMenu = priceVeggieMenu * veggieMenuQty;

let totalPriceMenu = totalChickenPriceMenu + totalFishPriceMenu + totalVeggiePriceMenu;
let dessertPrice = (totalPriceMenu * 20) / 100;

totalOrderPrice = totalPriceMenu + dessertPrice + DeliveryPrice;

console.log(totalOrderPrice);

}
foodDelivery(["2","4","3"]);

// Цена за пилешките менюта: 2 броя * 10.35  = 20.70
// Цена за менютата с риба: 4 броя * 12.40 = 49.60
// Цена за вегетарианските менюта: 3 броя * 8.15 = 24.45
// Обща цена на менютата: 20.70 + 49.60 + 24.45 = 94.75
// Цена на десерта: 20% от 94.75 = 18.95
// Цена на доставка: 2.50 (по условие)
// Обща цена на поръчката: 94.75 + 18.95 + 2.50 = 116.20