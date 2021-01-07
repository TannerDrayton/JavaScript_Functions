console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
	if (count < 0) count = count * -1;
	for (let i = 0; i <= count; i++) {
		if (i % 2 != 0) {
			console.log(i);
		}
	}
}

printOdds(-290);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
let userAge;

function checkAge(age) {
	let aboveSixteen = "You can drive!";
	let belowSixteen = "Sorry, but you need to wait until you're sixteen";

	if (age && typeof parseInt(age) == typeof 1) {
		if (age < 16) console.log(belowSixteen);
		if (age >= 16) console.log(aboveSixteen);
		return false;
	} else {
		console.log("Please enter your age as a number.");
		return true;
	}
}

do {
	userAge = prompt("Please enter your age");
} while (checkAge(userAge));
