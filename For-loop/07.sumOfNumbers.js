function sumOfNumbers(input) {

    let numAsString = input[0];
    let sum = 0;

    for (let index = 0; index < numAsString.length; index++) {

        let singleNum = Number(numAsString[index]);
        sum += singleNum;

    }
    console.log(`The sum of the digits is:${sum}`);

}
sumOfNumbers(["1234"]);