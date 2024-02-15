function moving(input) {

    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);

    let totalVolume = width * length * height;
    let neededVolume = 0;

    let index = 3;
    let command = input[index]
    index++

    while (command !== "Done") {
        let volume = Number(command)
        neededVolume += volume

        if (totalVolume < neededVolume){
            console.log(`No more free space! You need ${neededVolume - totalVolume} Cubic meters more.`
            );
            break;
        }
        command = input[index]
        index++

    }

    if(command === "Done"){
       console.log(`${totalVolume - neededVolume} Cubic meters left.`);
    }

}
//moving(["10", "10", "2", "20", "20", "20", "20", "122"])
moving(["10", "1","2","4", "6","Done"])