function journey(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let price = 0;
    let country = "";
    let restType = "";

    switch (season) {
        case "summer":
            if (budget <= 100) {
                price = budget * 0.3;
                restType = "Camp"
                country = "Bulgaria";
            } else if (budget <= 1000) {
                price = budget * 0.4;
                restType = "Camp"
                country = "Balkans"
            } else {
                price = budget * 0.9;
                restType = "Hotel"
                country = "Europe"
            }

            break;

        case "winter":
            if (budget <= 100) {
                price = budget * 0.7;
                restType = "Hotel"
                country = "Bulgaria";
            } else if (budget <= 1000) {
                price = budget * 0.8;
                restType = "Hotel"
                country = "Balkans"
            } else {
                price = budget * 0.9;
                restType = "Hotel"
                country = "Europe"
            }

            break;
    }

    let spendMoney = (budget - budget + 1) * price;

    console.log(`Somewhere in ${country}`);
    console.log(`${restType} - ${spendMoney.toFixed(2)}`);


}
//journey(["50", "summer"])
//journey(["75", "winter"])
//journey(["312", "summer"])
//journey(["678.53", "winter"])
journey(["1500", "summer"])

