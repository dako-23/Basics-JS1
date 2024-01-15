function time15min (input){

let hours = Number(input[0]);
let minutes = Number(input[1]);
let minutesPlus = minutes + 15

if (minutesPlus >= 60) {
        hours = hours + 1
        minutesPlus = minutesPlus - 60
}
if (hours > 23) {
        hours = 0
}

if (minutesPlus < 10) {
        console.log(`${hours}:0${minutesPlus}`)
    } else {
        console.log(`${hours}:${minutesPlus}`)
}


} 
time15min(["1", "46"]);