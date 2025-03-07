const { fifaData } = require('./fifa.js')

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/

//(a) Home Team name for 2014 world cup final

const data2014 = fifaData.filter(item => item.Year === 2014 && item.Stage === "Final");
console.log(data2014[0]["Home Team Name"]);


//(b) Away Team name for 2014 world cup final
console.log(data2014[0]["Home Team Goals"]);
//(c) Home Team goals for 2014 world cup final
console.log(data2014[0]["Away Team Name"]);
//(d) Away Team goals for 2014 world cup final
console.log(data2014[0]["Away Team Goals"]);
//(e) Winner of 2014 world cup final */

const winner2014 = () => {
    const a = data2014[0]["Home Team Goals"];
    const b = data2014[0]["Away Team Goals"];
    const a_name = data2014[0]["Home Team Name"];
    const b_name = data2014[0]["Away Team Name"];
    if (a > b) {
        return a_name;
    } else {
        return b_name;
    }
};

console.log(winner2014());

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/

function getFinals(data) {
   return data.filter(item => item.Stage === 'Final');
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(array,getFinals) {
    const years = [];
    const newArray = getFinals(array);
    newArray.forEach(item => years.push(item.Year));
    return years;
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 

function getWinners(array,callback) {
    const winners = [];
    const finals = callback(array);
    const result = (num1,num2,name1,name2) => {
        if(num1>num2){
            return name1;
        } else {
            return name2;
        }
    };
    finals.forEach(item => winners.push(result(item["Home Team Goals"],item["Away Team Goals"],item["Home Team Name"],item["Away Team Name"])));
    return winners;
}


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getFinals from task 2
3. Receive a callback function getYears from task 3
4. Receive a callback function getWinners from task 4
5. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */

function getWinnersByYear(array, getFinals, getYears, getWinners) {
    const empty = [];
    const finals = getFinals(array);
    const years = getYears(finals);
    const winners = getWinners(years);
    for (let i = 0; i < winners.length; i++) {
        empty.push(`In ${years[i]}, ${winners[i]} won the world cup!`);
    }
    return empty;

}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

function getAverageGoals(data) {
    const scores = [];
    data.forEach(item => {
        scores.push(item["Home Team Goals"]);
        scores.push(item["Away Team Goals"]);
    });
    const sum = scores.reduce((num1,num2) => num1+num2);
    return (sum / (scores.length / 2)).toFixed(2);
}




/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
foo();
module.exports = {
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
