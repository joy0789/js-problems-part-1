/**
 * simple logic:
 * year will be leap year if the year is divisible by 4
*/

function isLeapYear(year){
    if(year%4===0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isLeapYear(2052))

/**
 * 1. those year that is not divisible by 100 and if the year is divisible by 4: then it will be a leap year
 * 2.
*/

function isLeapYear2(year){
    if(year%100 !== 0 && year%4 ===0){
        return true
    }
    else if(year %100 === 0 && year % 400 ===0){
        return true
    }
    else{
        return false
    }
}
console.log(isLeapYear2(2021))