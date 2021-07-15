let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly =  false;
let runnerAge = 24;
if (registeredEarly && runnerAge > 18){
raceNumber += 1000
}
if(registeredEarly && runnerAge > 18) {
console.log(`You will race at 9:30 a.m, your race number is ${raceNumber}`);
} else if( !registeredEarly && runnerAge > 18) {
console.log(`You will race at 11:00 a.m, your race number is ${raceNumber}`)
} else if(runnerAge < 18){
console.log(`You will race at 12:30 p.m, your race number is ${raceNumber}`)
} else {'You need to see the registration desk'}