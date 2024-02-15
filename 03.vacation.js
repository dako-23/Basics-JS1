function vacantion(input) {

    let moneyNeed = Number(input[0])
    let moneyHave = Number(input[1])

    let spendingDays = 0;
    let totalDays = 0;
    let index = 2
    while (true) {
        let currentAction = input[index]
        index++
        let currentAmount = Number(input[index])
        index++

        totalDays++

        if (currentAction == "spend") {
            spendingDays++
            moneyHave -= currentAmount
            if (moneyHave < 0) {
                moneyHave = 0;
            }
        } else if (currentAction == "save") {
            moneyHave += currentAmount
            spendingDays = 0
        }

        if (spendingDays == 5) {
            console.log(`You can't save the money.`)
            console.log(`${totalDays}`)
            break;

        }

        if (moneyHave >= moneyNeed) {
            console.log(`You saved the money for ${totalDays} days.`)
            break;
        }

    }




}
// vacantion(["250",
//     "150",
//     "spend",
//     "50",
//     "spend",
//     "50",
//     "save",
//     "100",
//     "save",
//     "100"])
vacantion (["2000",
"1000",
"spend",
"1200",
"save",
"2000"])
