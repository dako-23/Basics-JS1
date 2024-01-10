function painting (input){

let priceNylon = 1.50;
let pricePaint = 14.50;
let priceThinnerPaint = 5.00;
let pricePlasticBag = 0.40;

let extraNylon = 2; 
let craftsManOneHour = 0.30;

let nylon = Number(input[0]);
let paint = Number(input[1]);
let thinnerPaint = Number(input[2]);
let craftsMan = Number(input[3]);

let extraPaint = (paint * 10) / 100;

let finalPriceNylon = (nylon + extraNylon) * priceNylon;
let finalPricePaint = (paint + extraPaint) * pricePaint;
let finalPriceThinnerPaint = thinnerPaint * priceThinnerPaint;
let totalPriceMaterials = finalPriceNylon + finalPricePaint + finalPriceThinnerPaint + pricePlasticBag;

let totalPriceCraftsMan = (totalPriceMaterials*craftsManOneHour) * craftsMan;
let totalPrice = totalPriceMaterials + totalPriceCraftsMan;

console.log(totalPrice);

}
painting(["10","11","4","8"]);

// Сума за найлон: (10 + 2) * 1.50 = 18 лв.
// Сума за боя: (11 + 10%) * 14.50 = 175.45 лв.
// Сума за разредител: 4 * 5.00 = 20.00 лв.
// Сума за торбички: 0.40 лв.
// Обща сума за материали: 18 + 175.45 + 20.00 + 0.40 = 213.85 лв.
// Сума за майстори: (213.85 * 30%) * 8 = 513.24 лв.
// Крайна сума: 213.85 + 513.24 = 727.09 лв