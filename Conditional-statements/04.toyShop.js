function toyShop (input){

    let puzzle = 2.60;
    let doll = 3;
    let bear = 4.10;
    let mignon = 8.20;
    let truck = 2;

    let vacationPrice = Number(input[0]);
    let puzzleQty = Number(input[1]);
    let dollQty = Number(input[2]);
    let bearQty = Number(input[3]);
    let mignonQty = Number(input[4]);
    let truckQty = Number(input[5]);

    let totalSumForToys = (puzzleQty * puzzle) + (dollQty * doll) + (bearQty * bear) + (mignonQty * mignon) + (truckQty * truck);
    let totalToysQty = puzzleQty + dollQty + bearQty + mignonQty + truckQty;

    if (totalToysQty >= 50) {
        let discount = 0.25 * totalSumForToys;
        totalSumForToys = totalSumForToys - discount;
    }
    let rentMoney = 0.10 * totalSumForToys;
    totalSumForToys = totalSumForToys - rentMoney;

    
    if (totalSumForToys >= vacationPrice){
        let moneyLeft = totalSumForToys - vacationPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let moneyNeeded = vacationPrice - totalSumForToys
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }

}
toyShop (["320","8","2","5","5","1"])
toyShop //(["40.8","20","25","30","50","10"])