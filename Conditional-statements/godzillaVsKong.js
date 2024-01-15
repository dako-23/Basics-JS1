function godzillaVsKong (input){

let budget = Number(input[0]);
let actorCount = Number(input[1]);
let clothingPricePerActor = Number(input[2]);

let decor = budget * 0.10;
let totalPriceClothing = actorCount * clothingPricePerActor;

if (actorCount > 150){
    let discount = 0.10 * totalPriceClothing;
    totalPriceClothing = totalPriceClothing - discount;  
}
let finalMoviePrice = totalPriceClothing + decor;

if (finalMoviePrice <= budget){
    let moneyLeft = budget - finalMoviePrice;
    console.log(`Action!
    Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
} else {
    let moneyNeeded = finalMoviePrice - budget;
    console.log(`Not enough money!
    Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
}

}
godzillaVsKong(["9587.88","222","55.68"]);
