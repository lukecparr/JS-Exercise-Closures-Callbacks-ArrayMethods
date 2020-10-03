// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
 */
function processFirstItem(stringList, callback) {
	return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * Counter1 returns a function so it can be used and reused to create multiple counters. counter2 will return a total that will be added to each time the function is called. (Also, counterMaker is missing the 'return' before 'count++'. Seems like a typo.)
 
 * 2. Which of the two uses a closure? How can you tell?
 * counter2 uses a closure because it has to reach outside its own scope to provide "closure" for the variable 'count'.
 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * counter1 is useful when you want to create new counters that will each start at 0 when called. counter2 is useful if you want to keep a running total of something, since the 'count' variable will be added to each time the function is called.
*/

// counter1 code
function counterMaker() {
	let count = 0;
	return function counter() {
		count++;
	}
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
	return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning() {
	
	//generate then return a random whole number between 0 and 2
	const inningScore = Math.floor(Math.random() * 3);
	return inningScore;
}

console.log("inning() output: ", inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/

function finalScore(func, num) {
	
	//declare an array to hold the final scores
	const final = {
		home: 0,
		away: 0,
	};
	
	//for each inning, generate a score and add that to the total score for that team
	for (num; num > 0; num--) {
		final.home += func();
		final.away += func();
	};
	
	//return the final object with total scores
	return final;
}

console.log("finalScrore(inning, 9) output: ", finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */


//The instruction above to pass in `getInningScore` doesn't make sense to me. That's not a function in this doc and we weren't askde to create it. I assumed it was some kind of mistake when updating the project. When invocing `scoreboard` below I passed in my `finalScore` function instead, but did not invoce it within the function as it's not needed.
function scoreboard(cbFinal, cbInning, num) {
	console.log("scoreboard(finalScore, inning, 9) output: ", )
	//declare an object to hold final scores
	const final = {
		home: 0,
		away: 0,
	};

	// for each inning, generate a random score for each team
	for (let i = 0; i < num; i++) {
		home = cbInning();
		away = cbInning();

		//console.log the scores with iterpolation
		console.log(`Inning ${i+1}: ${away} - ${home}`)

		//add the inning scores to the totals
		final.home += home;
		final.away += away;
	}
	
	//console.log the final scores
	console.log(`Final Score: ${final.away} - ${final.home}`)
	
	
	//I included this just as an example. I could call the finalScore function that I passed in to scoreboard, but if I did it would generate a whole NEW set of inning scores and totals rather than working off of what was created in this function.
	//console.log(cbFinal(cbInning, num))
}

scoreboard(finalScore, inning, 9)











