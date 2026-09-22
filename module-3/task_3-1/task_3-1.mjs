"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
let wakeUpTime = 7;
if (wakeUpTime === 7) {
    printOut("I can take the bus to school");
} else if (wakeUpTime === 8) {
    printOut("I have to take the train to school");
} else {
    printOut("I have to take the car to school");
}
printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
let value = -1;
printOut("value = " + value);
if (value > 0) {
    printOut("value is positive");
} else if (value < 0) {
    printOut("value is negative");
} else {
    printOut("value is zero");
} 
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
let imageSize = Math.floor(Math.random() * 8) + 1;
printOut("Photo size = " + image + "MP"); 
if (imageSize >= 4) {
    printOut("Thank you");
} else {
    printOut("The image is too small");
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
let imageSize2 = Math.floor(Math.random() * 8) + 1;
printOut("Photo size = " + imageSize2 + "MP"); 
if (imageSize2 >= 6) {
    printOut("image is too large");
} else if (imageSize2 >= 4) {
    printOut("Thank you");
} else { 
    printOut("The image is too small");
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
printOut("Month is = " + monthName); 
if (monthName.includes("r")) {
    printOut("You must take vitamin D");
} else {
    printOut("You do not need to take vitamin D");
}
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
let daysInMonth;
if ( monthName === "February") {
    daysInMonth = 28;
} else if ( monthName === "April" || monthName === "June" || monthName === "September" || monthName === "November") {
    daysInMonth = 30;
} else {
    daysInMonth = 31;
}
printOut(monthName + " has " + daysInMonth + " days");

printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
if (monthName === "Mars") {
    printOut("The gallery is closed");
} else if (monthName === "April") {
    printOut("The gallery is open in temporary premises");
} else if (monthName === "May") {
    printOut("The gallery is closed");
} else {
    printOut("The gallery is open");
}
   
printOut(newLine);
