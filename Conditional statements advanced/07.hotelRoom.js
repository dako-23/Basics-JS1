function hotelRoom(input) {

    let month = input[0];
    let nightCount = Number(input[1]);

    let studioPrice = 0;
    let apartmentPrice = 0;

    switch (month) {
        case "May":
        case "October":
            studioPrice = 50 * nightCount;
            apartmentPrice = 65 * nightCount;
            
            if (nightCount > 7 && nightCount <= 14) {
                studioPrice *= 0.95;
            } else if (nightCount > 14) {
                studioPrice *= 0.70;
                apartmentPrice *= 0.90;
            }
            break;

        case "June":
        case "September":
            studioPrice = 75.20 * nightCount;
            apartmentPrice = 68.70 * nightCount;

            if (nightCount > 14) {
                studioPrice *= 0.80;
                apartmentPrice *= 0.90;
            }
            break;

        case "July":
        case "August":
            studioPrice = 76 * nightCount;
            apartmentPrice = 77 * nightCount;

            if (nightCount > 14) {
                apartmentPrice *= 0.90;
            }
            break;
    }

    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}

hotelRoom(["May", "15"]);