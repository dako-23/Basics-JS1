function examResult(input) {
    examHour = Number(input[0]);
    examMinute = Number(input[1]);
    arrivalHour = Number(input[2]);
    arrivalMinute = Number(input[3]);

    let examTime = examHour * 60 + examMinute;
    let arrivalTime = arrivalHour * 60 + arrivalMinute;

    if (arrivalTime > examTime) {
        console.log("Late");
        let minutesLate = arrivalTime - examTime;
        if (minutesLate < 60) {
            console.log(`${minutesLate} minutes after the start`);
        } else {
            let hours = Math.floor(minutesLate / 60);
            let minutes = minutesLate % 60;
            console.log(`${hours}:${minutes < 10 ? "0" : ""}${minutes} hours after the start`);
        }
    } else if (arrivalTime >= examTime - 30) {
        console.log("On time");
        let minutesEarly = examTime - arrivalTime;
        if (minutesEarly > 0) {
            console.log(`${minutesEarly} minutes before the start`);
        }
    } else {
        console.log("Early");
        let minutesEarly = examTime - arrivalTime;
        if (minutesEarly < 60) {
            console.log(`${minutesEarly} minutes before the start`);
        } else {
            let hours = Math.floor(minutesEarly / 60);
            let minutes = minutesEarly % 60;
            console.log(`${hours}:${minutes < 10 ? "0" : ""}${minutes} hours before the start`);
        }
    }
}
examResult("9", "30", "9", "50");