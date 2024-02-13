function password(input) {

    let userName = input[0];
    let password = input[1];
    let index = 2;
    let currentWord = input[index];

    while (currentWord !== password) {
        index++;
        currentWord = input[index]

    }
    console.log(`Welcome ${userName}!`);






}
password(["Nakov",
    "1234",
    "Pass",
    "1324",
    "1234"])