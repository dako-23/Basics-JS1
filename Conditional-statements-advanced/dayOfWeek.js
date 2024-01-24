function dayOfWeek(input) {

    let num = Number(input[0])

    switch (num) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5: console.log("Friday"); break;
        case 6: console.log("Saturday"); break;
        case 7: console.log("Sunday"); break;
        default: console.log("Error"); break;
    }
}

dayOfWeek(["3"]);