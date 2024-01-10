function vacationBooksList (input){

    let totalPages = Number (input[0]);
    let pagesPerHour = Number (input[1]);
    let days = Number (input[2]);
    
    let sum = totalPages / pagesPerHour;
    let hoursPerDays = sum / days;
    
    console.log(hoursPerDays);

}
vacationBooksList (["432","15","4"]);
//vacationBooksList (["212","20","2"]);