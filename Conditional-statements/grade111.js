function grade111 (input){

let grade = Number (input[0]);

if (grade > 2.00 && grade <= 2.49) {
    console.log("Poor!");
} else if (grade > 2.49 && grade <= 3.49) {
    console.log("Average!");
} else if (grade > 3.49 && grade <= 4.49) {
    console.log("Good!");
} else if (grade > 4.49 && grade <= 5.49) {
    console.log("Very Good");
} else if (grade > 5.49) {
    console.log("Excellent!");
}
}
grade111 ([3.50]);