"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
let countingUp = "";
let countingDown = "";

for (let number = 1; number <= 10; number++) {
    countingUp += number + " ";
}

for (let number = 10; number >= 1; number--) {
    countingDown += number + " ";
}

printOut(countingUp);
printOut(countingDown);

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let secretNumber = 45;
let guessedNumber = 0;
while (guessedNumber !== secretNumber) {
    guessedNumber = Math.floor(Math.random() * 60) + 1;
}
    printOut("Guessed number: " + guessedNumber);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let secretNumberLarge = 456738;
let guessedNumberLarge = 0;
let numberOfGuesses = 0;
let startTime = Date.now();
while (guessedNumberLarge !== secretNumberLarge) {
    guessedNumberLarge = Math.floor(Math.random() * 1000000) + 1;
    numberOfGuesses++;
}
let endTime = Date.now();
let timeUsed = endTime - startTime;
printOut("Guessed number: " + guessedNumberLarge);
printOut("Number of guesses: " + numberOfGuesses);
printOut("Time used: " + timeUsed + " milliseconds");

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for (let number = 2; number < 200; number++) {
    let divisor = 2;
    let isPrime = true;
    while (divisor < number) {
        if (number % divisor === 0) {
            isPrime = false;
            break;
        }
        divisor++;
    }
    if (isPrime) {
        printOut(number);
    }
}

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for (let row = 1; row <= 7; row++) {
    let rowText = "";
    for (let column = 1; column <= 9; column++) {
        rowText += "K" + column + "R" + row + " ";
    }
    printOut(rowText);
} 
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for (let student =1; student <= 5; student++) {
    let points = Math.floor(Math.random() * 236) + 1;
    let percentage = (points / 236) * 100;
    let grade = "";
    if (percentage >= 89) {
        grade = "A";
    } else if (percentage >= 77) {
        grade = "B";
    } else if (percentage >= 65) {
        grade = "C";
    } else if (percentage >= 53) {
        grade = "D";
    } else if (percentage >= 41) {
        grade = "E";
    } else {
        grade = "F";
    } 
printOut("student" + student + ":" + points + "points - grade" + grade);
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/ 
function rollDice() {
    let dice = [];

    for (let i = 0; i < 6; i++) {
        dice.push(Math.floor(Math.random() * 6) + 1);
    }

    return dice;
}


// Full straight
let throws = 0;
let dice = [];

while (true) {
    throws++;
    dice = rollDice();
    dice.sort();

    if (dice.join("") === "123456") {
        break;
    }
}

printOut(dice.join(","));
printOut("Full straight!");
printOut("On " + throws + " throws!");


// 3 pairs
throws = 0;

while (true) {
    throws++;
    dice = rollDice();
    dice.sort();

    if (
        dice[0] === dice[1] &&
        dice[2] === dice[3] &&
        dice[4] === dice[5] &&
        dice[0] !== dice[2] &&
        dice[2] !== dice[4]
    ) {
        break;
    }
}

printOut(dice.join(","));
printOut("3 pairs!");
printOut("On " + throws + " throws!");


// Tower
throws = 0;

while (true) {
    throws++;
    dice = rollDice();
    dice.sort();

    if (
        (dice[0] === dice[1] &&
         dice[2] === dice[3] &&
         dice[3] === dice[4] &&
         dice[4] === dice[5] &&
         dice[0] !== dice[2]) ||

        (dice[0] === dice[1] &&
         dice[1] === dice[2] &&
         dice[2] === dice[3] &&
         dice[4] === dice[5] &&
         dice[0] !== dice[4])
    ) {
        break;
    }
}

printOut(dice.join(","));
printOut("Tower!");
printOut("On " + throws + " throws!");


// Yahtzee
throws = 0;

while (true) {
    throws++;
    dice = rollDice();

    if (
        dice[0] === dice[1] &&
        dice[1] === dice[2] &&
        dice[2] === dice[3] &&
        dice[3] === dice[4] &&
        dice[4] === dice[5]
    ) {
        break;
    }
}

printOut(dice.join(","));
printOut("Yahtzee!");
printOut("On " + throws + " throws!");

printOut(newLine);
