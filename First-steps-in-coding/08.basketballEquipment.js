function basketballEquipment (input){

let basketballTraining = Number(input[0]);

let sneakers = (basketballTraining * 60) / 100;
let tshirt = (sneakers * 80) / 100;
let ball = 1/4 * tshirt;
let accesories = 1/5 * ball;

let totalPrice = sneakers + tshirt + ball + accesories + basketballTraining;

console.log(totalPrice);

}
basketballEquipment(["365"]);