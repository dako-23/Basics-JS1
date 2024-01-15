function worldSwimmingRecord (input){

let record = Number(input[0]);
let distance = Number(input[1]);
let oneMeturSeconds = Number(input[2]);

let swimSeconds = distance * oneMeturSeconds;
let delay = Math.floor(distance / 15) * 12.5;
let totalSwimSec = swimSeconds + delay;


if (totalSwimSec < record){
    console.log(`Yes, he succeeded! The new world record is ${totalSwimSec.toFixed(2)} seconds.`);
} else if (totalSwimSec >= record){
    console.log(`No, he failed! He was ${(totalSwimSec - record).toFixed(2)} seconds slower.`);
}

}
worldSwimmingRecord(["55555.67",
"3017",
"5.03"]);




// (totalTime > worldRecord){
//     console.log(`No, he failed! He was ${timeLeft.toFixed(2)} seconds slower.`);