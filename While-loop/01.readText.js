function readText(input) {

    // let index = 0;
    // let word = input[index];

    // while (word !== "Stop") {
    //     console.log(word);
    //     index++
    //     word = input[index];
    // }

    for (let index = 0; index < input.length; index++){
       let word = input[index];
        if(word === "Stop"){
            break;
        
        }
        console.log(word);
    }
    


}
readText(["Nakov",
    "SoftUni",
    "Sofia",
    "Bulgaria",
    "SomeText",
    "Stop",
    "AfterStop",
    "Europe",
    "HelloWorld"])