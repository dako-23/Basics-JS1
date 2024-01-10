function depositCalculator (input) {

    let depositedSum = Number (input[0]);
    let depositedPeriod = Number (input[1]);
    let annualInterestPercent = Number (input[2]);
    
    let annualInterestDecimal = annualInterestPercent / 100;
    
    let sum = depositedSum + depositedPeriod * ((depositedSum * annualInterestDecimal) / 12);
    
    console.log(sum);
    
    }
    depositCalculator (["2350","6 ","7 "]);
    //depositCalculator (["200 ","3 ","5.7 "]);