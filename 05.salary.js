function salary(input) {

    let tabsCoun = Number(input[0]);
    let salary = input[1];

    for (let i = 2; i < input.length; i++) {
        let website = input[i];
        if (website === "Facebook") {
            salary -= 150;
        } else if (website === "Instagram") {
            salary -= 100;
        } else if (website === "Reddit") {
            salary -= 50;
        }

    }
    if (salary <= 0){
        console.log("You have lost your salary.");
        return;
    }
console.log(salary);

}
//salary(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"])
salary(["3","500","Github.com","Stackoverflow.com","softuni.bg"])