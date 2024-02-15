function cake(input) {

    let width = Number(input[0]);
    let length = Number(input[1]);

    let cakeVolume = width * length;

    let index = 2;
    let command = input[index]
    index++

    while (command !== "STOP") {
        let cake = Number(command)
        cakeVolume -= cake

        if (cakeVolume <= 0) {

            console.log(`No more cake left! You need ${Math.abs(cakeVolume)} pieces more.`
            );
            break;
        }

        command = input[index]
        index++

    }

    if(command === "STOP"){

        console.log(`${cakeVolume} pieces are left.`);
}

} 
// cake(["10", "10", "20", "20", "20", "20", "21"]);
cake (["10",
"2",
"2",
"4",
"6",
"STOP"])