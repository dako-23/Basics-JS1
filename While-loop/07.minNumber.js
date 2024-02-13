function minNumber(input) {

    let index = 0;
    let currentRow = input[index]
    let maxNumber = Number.MAX_VALUE

    while (currentRow !== "Stop") {
        let rowAsNumber = Number(currentRow)

        if (rowAsNumber < maxNumber) {
            maxNumber = rowAsNumber
        }
        index++
        currentRow = input[index]

    }
    console.log(maxNumber);


}
minNumber(["100", "99", "80", "70", "Stop"]);