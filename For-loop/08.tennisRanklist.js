function tennisRanklist(input) {

    let tournamentCount = Number(input[0]);
    let initialPoints = Number(input[1]);

    let seasonPoints = 0;
    let winCount = 0;
    for (let i = 2; i < tournamentCount + 2; i++) {
        let result = input[i];

        if (result === "W") {
            seasonPoints += 2000;
            winCount++;
        } else if (result === "F") {
            seasonPoints += 1200;
        } else if (result === "SF") {
            seasonPoints += 720;
        }

    }
    let percent = (winCount / tournamentCount) * 100;
    console.log(`Final points: ${seasonPoints + initialPoints}`);
    console.log(`Average points: ${Math.floor(seasonPoints / tournamentCount)}`);
    console.log(`${percent.toFixed(2)}%`);


}
tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"])