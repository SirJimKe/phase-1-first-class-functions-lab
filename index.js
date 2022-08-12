const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(){
    let firstTwoDrivers = [...drivers.slice(0, 2)];
    return firstTwoDrivers;
}

returnFirstTwoDrivers();


const returnLastTwoDrivers = function(){
    let lastTwoDrivers = [...drivers.slice(2,4)];
    return lastTwoDrivers;
}

returnLastTwoDrivers();


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(a){
    return function multiplier (x){
        return  x * a;
    }
}

createFareMultiplier();


const fareDoubler = function(fare){
    return createFareMultiplier(fare)(2); 
}

const fareTripler = function(fare){
    return createFareMultiplier(fare)(3); 
}

function selectDifferentDrivers(drivers, fn) {
    return fn(drivers);
}

