// 1 feet is 12 inch
function inchTofeet(inch){
    let feet = inch/12;
    return feet;
}

// ignore this one
function inchTofeet2(inch){
    let feetFraction = inch/12;
    let feetNumber = parseInt(feetFraction);
    let inchRemaining = inch%12;
    let result = feetNumber+" feet "+inchRemaining+" inch."
    return result;
}
console.log(inchTofeet(75));
console.log(inchTofeet2(75));

function mileToKilometre(mile){
    let kilo = mile * 1.60934;
    return kilo;
}

function kilometreToMile(kilo){
    let mile = kilo * 0.621371;
    return mile;
}