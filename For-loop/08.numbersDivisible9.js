function numbersDivisible(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);

    let sum = 0;

    for (let num = start; num <= end; num++) {

        if (num % 9 === 0) {

            sum += num;
        }
    }
    console.log(`The sum: ${sum}`);

    for (let num = start; num <= end; num++) {

        if (num % 9 === 0) {

            console.log(num);
        }

    }


}
numbersDivisible(["100", "200"]);