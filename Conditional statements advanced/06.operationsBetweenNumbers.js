function operationsBetweenNumbers (input){

let n1 = Number(input[0]);
let n2 = Number(input[1]);
let operator = input[2];

let result = 0;
let evenOrOdd = "";

switch(operator){
    case "+":
        result = n1 + n2;

        if(result % 2 === 0){
            evenOrOdd = "even";
        }else{
            evenOrOdd = "odd";
        }

        console.log(`${n1} + ${n2} = ${result} - ${evenOrOdd}`); break;

    case "-":
        result = n1 - n2;

        if(result % 2 === 0){
            evenOrOdd = "even";
        }else{
            evenOrOdd = "odd";
        }

        console.log(`${n1} - ${n2} = ${result} - ${evenOrOdd}`); break;

    case "*":
        result = n1 * n2;

        if(result % 2 === 0){
            evenOrOdd = "even";
        }else{
            evenOrOdd = "odd";
        }

        console.log(`${n1} * ${n2} = ${result} - ${evenOrOdd}`); break;

    case "/":
        if(n2 === 0){
            console.log(`Cannot divide ${n1} by zero`);
        }else{
            result = n1 / n2;
            console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);}
        break;
    
    case "%":
        if(n2 === 0){
            console.log(`Cannot divide ${n1} by zero`);
        }else{
            result = n1 % n2;
            console.log(`${n1} % ${n2} = ${result}`);}
        break;

}

}
//operationsBetweenNumbers(["10","12","+"])
operationsBetweenNumbers(["10","1","-"])
//operationsBetweenNumbers(["7","3","*"])
//operationsBetweenNumbers(["123","12","/"])
//operationsBetweenNumbers(["10","3","%"])
//operationsBetweenNumbers(["112","0","/"])
//operationsBetweenNumbers(["10","0","%"])
