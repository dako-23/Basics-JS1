function shopping (input){

let budget = Number(input[0]);
let gpuCount = Number(input[1]);
let cpuCount = Number(input[2]);
let ramCount = Number(input[3]);

let gpuSum = gpuCount * 250;
let cpuSum = gpuSum * 0.35;
let ramSum = gpuSum * 0.10;
let finalPriceCpu = cpuCount * cpuSum;
let finalPriceRam = ramCount * ramSum;
let totalSum = finalPriceCpu + finalPriceRam + gpuSum;

if (gpuCount > cpuCount){
   let discount = totalSum * 0.15;
   totalSum = totalSum - discount; 
}

if (totalSum <= budget){
    console.log(`You have ${(budget - totalSum).toFixed(2)} leva left!`);
} else {
    console.log(`Not enough money! You need ${(totalSum - budget).toFixed(2)} leva more!`);
}


}
//shopping (["920.45","3","1","1"])
shopping (["900","2","1","3"])