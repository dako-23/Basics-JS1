function lunchBreak(input){

let movieName = input[0];
let episodeTime = Number(input[1]);
let breakTime = Number(input[2]);
    
let lunchTime = breakTime * 1/8;
let restTime = breakTime * 1/4;
let timeLeft = breakTime - restTime - lunchTime;

    
if (timeLeft >= episodeTime){
        console.log(`You have enough time to watch ${movieName} and left with ${Math.ceil(timeLeft - episodeTime)} minutes free time.`);
} else {
        console.log(`You don't have enough time to watch ${movieName}, you need ${Math.ceil(episodeTime - timeLeft)} more minutes.`);
}
    
}
//lunchBreak(["Teen Wolf","48","60"]);
lunchBreak(["Game of Thrones","60","96"]);

