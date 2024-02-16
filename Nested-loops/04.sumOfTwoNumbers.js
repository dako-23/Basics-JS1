function sumOfTwoNumbers(input) {

    let startInterval = Number(input[0]);
    let endInterval = Number(input[1]);
    let magicNumber = Number(input[2]);

    let combinations = 0;
    let totalCombinations = 0;

    for (let x = startInterval; x <= endInterval; x++) {

        for (let y = startInterval; y <= endInterval; y++) {

            let sum = x + y;
            combinations++

            if (sum === magicNumber) {
                console.log(`Combination N:${combinations} (${x} + ${y} = ${magicNumber})`);
                return;
            } else {
                totalCombinations++
            }
        }
    }
    console.log(`${totalCombinations} combinations - neither equals ${magicNumber}`);

}
sumOfTwoNumbers(["23","24","20"]);
//sumOfTwoNumbers(["1", "10", "5"]);