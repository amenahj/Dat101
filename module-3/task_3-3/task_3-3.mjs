"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");

function showDate() {
    const today = new Date();
    const dateText = today.toLocaleDateString("nb-NO", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    printOut(dateText);
}

showDate();


printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");

function getToday() {
    const today = new Date();

    printOut(today.toLocaleDateString("nb-NO", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }));

    return today;
}

function daysUntilRelease(today) {
    const releaseDate = new Date(2025, 4, 14);

    const todayDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
    );

    const difference = releaseDate - todayDate;
    return Math.round(difference / (1000 * 60 * 60 * 24));
}

const currentDate = getToday();
const daysLeft = daysUntilRelease(currentDate);

if (daysLeft >= 0) {
    printOut("Days until 2XKO: " + daysLeft);
} else {
    printOut("2XKO release date was " + Math.abs(daysLeft) + " days ago.");
}


printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");


function calculateCircle(radius) {
    const diameter = 2 * radius;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * radius * radius;

    printOut("Diameter: " + diameter.toFixed(2));
    printOut("Circumference: " + circumference.toFixed(2));
    printOut("Area: " + area.toFixed(2));
}

calculateCircle(5);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");

function calculateRectangle(rectangle) {
    const perimeter = 2 * (rectangle.width + rectangle.height);
    const area = rectangle.width * rectangle.height;

    printOut("Perimeter: " + perimeter);
    printOut("Area: " + area);
}

const rectangle = {
    width: 5,
    height: 10
};

calculateRectangle(rectangle);


printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");

function convertTemperature(temperature, type) {
    let celsius;
    let fahrenheit;
    let kelvin;

    if (type === "C") {
        celsius = temperature;
        fahrenheit = temperature * 9 / 5 + 32;
        kelvin = temperature + 273.15;
    } else if (type === "F") {
        fahrenheit = temperature;
        celsius = (temperature - 32) * 5 / 9;
        kelvin = celsius + 273.15;
    } else if (type === "K") {
        kelvin = temperature;
        celsius = temperature - 273.15;
        fahrenheit = celsius * 9 / 5 + 32;
    } else {
        printOut("Unknown temperature type!");
        return;
    }

    printOut(Math.round(celsius) + " Celsius");
    printOut(Math.round(fahrenheit) + " Fahrenheit");
    printOut(Math.round(kelvin) + " Kelvin");
}

convertTemperature(25, "C");
convertTemperature(77, "F");
convertTemperature(300, "K");


printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");

function calculateNetPrice(gross, group) {
    let vat;

    group = group.toLowerCase();

    if (group === "normal") {
        vat = 25;
    } else if (group === "food") {
        vat = 15;
    } else if (
        group === "hotel" ||
        group === "transport" ||
        group === "cinema"
    ) {
        vat = 10;
    } else {
        printOut("Unknown VAT group!");
        return NaN;
    }

    const net = (100 * gross) / (vat + 100);
    return net;
}

printOut("Normal: " + calculateNetPrice(125, "NORMAL"));
printOut("Food: " + calculateNetPrice(115, "food"));
printOut("Hotel: " + calculateNetPrice(110, "hotel"));
printOut("Unknown: " + calculateNetPrice(100, "goblins"));


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");

function calculate(speed, distance, time) {
    if (speed === undefined && distance !== undefined && time !== undefined) {
        return distance / time;
    } else if (distance === undefined && speed !== undefined && time !== undefined) {
        return speed * time;
    } else if (time === undefined && speed !== undefined && distance !== undefined) {
        return distance / speed;
    } else {
        return NaN;
    }
}

printOut("Speed: " + calculate(undefined, 100, 2));
printOut("Distance: " + calculate(50, undefined, 2));
printOut("Time: " + calculate(50, 100, undefined));
printOut("Missing values: " + calculate(undefined, 100, undefined));


printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");

function addCharacters(text, maxLength, character, addBefore) {
    while (text.length < maxLength) {
        if (addBefore) {
            text = character + text;
        } else {
            text = text + character;
        }
    }

    return text;
}

printOut(addCharacters("Hello", 10, "*", true));
printOut(addCharacters("Hello", 10, "-", false));
printOut(addCharacters("JavaScript", 10, "*", true));


printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");

function mathsFun() {
    let number = 1;

    for (let line = 1; line <= 200; line++) {
        let left = 0;
        let right = 0;

        for (let i = 0; i <= line; i++) {
            left += number;
            number++;
        }

        for (let i = 0; i < line; i++) {
            right += number;
            number++;
        }

        if (left !== right) {
            printOut("Error at line " + line);
            return;
        }
    }

    printOut("Maths fun!");
}

mathsFun();


printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");

function factorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    }

    return number * factorial(number - 1);
}

printOut("Factorial of 5: " + factorial(5));
printOut("Factorial of 6: " + factorial(6));


printOut(newLine);
