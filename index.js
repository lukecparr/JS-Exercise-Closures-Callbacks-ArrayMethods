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
 * Counter1's 'count' variable is function scoped and private to that fucntion while counter2's count variable is globally scoped and could be modified by any function. Also, counterMaker is missing the 'return' before 'count++'. Seems like a typo.
 
 * 2. Which of the two uses a closure? How can you tell?
 * counter2 uses a closure because it has to reach outside its own scope to provide "closure" for the variable 'count'. Although from what I know, counter1 is technically using a closure as well when it reaches for it's own 'count' variable and creates a closure.
 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * counter1 would be preferable when you don't need the count variable to be accessible globally or by any other function. counter2 would be preferable if we do want count to be accissible globally, but we would have to be careful that we're not misusing the variable elseware so that it breaks something.
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

	const inningScore = Math.floor(Math.random() * 3);
	return inningScore;
}

//console.log(inning());

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

	const final = {
		home: 0,
		away: 0,
	};

	for (num; num > 0; num--) {
		final.home += func();
		final.away += func();
	};

	return final;
}

//console.log(finalScore(inning, 9));

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

function scoreboard(cbFinal, cbInning, num) {

	const final = {
		home: 0,
		away: 0,
	};

	for (let i = 0; i < num; i++) {
		home = cbInning();
		away = cbInning();

		console.log(`Inning ${i+1}: ${away} - ${home}`)

		final.home += home;
		final.away += away;
	}

	console.log(`Final Score: ${final.away} - ${final.home}`)
	
//	console.log(cbFinal(cbInning, num))
}


scoreboard(finalScore, inning, 9)











