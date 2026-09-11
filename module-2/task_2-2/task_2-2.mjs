"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
const orginalExpression = 2 + 3 * 2 - 4 * 6;
const modifiedExpression = 2 + 3 * (2 - 4) * 6;
printOut( `Original expression: 2 + 3 * 2 - 4 * 6 = ${orginalExpression}` );
printOut( `Modified expression: 2 + 3 * (2 - 4) * 6 = ${modifiedExpression}` );
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
const millimeters = (25 * 1000) + (34 * 10);
const millPrInch = 25.4;
const sumPart2 = millimeters / millPrInch;
printOut( `25 meters and 34 centimeters = ${sumPart2.toFixed(2)} inches` );
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
const part3Days = 3;
const part3Hours = 12; 
const part3Minutes = 14;
const part3seconds = 45;
const part3Answer = 
((part3Days * 24 * 60) + (part3Hours * 60) + (part3Minutes + part3seconds / 60));

printOut( `3 days, 12 hours, 14 minutes and 45 seconds = ${part3Answer} minutes` );

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
const part4Minutes = 6322.52;
const part4TotalDays = part4Minutes / (24 * 60);
const part4Days = Math.floor(part4TotalDays);
let part4Remainder = part4TotalDays - part4Days;
const part4TotalHours = part4Remainder * 24;
const part4Hours = Math.floor(part4TotalHours);
part4Remainder = part4TotalHours - part4Hours;
const part4TotalMinutes = part4Remainder * 60;
const part4WholeMinutes = Math.floor(part4TotalMinutes);
 part4Remainder = part4TotalMinutes - part4WholeMinutes; 
const part4Seconds = Math.floor(part4Remainder * 60);
printOut( `6322.52 minutes is: ${part4Days} days, ${part4Hours} hours, ${part4WholeMinutes} minutes, ${part4Seconds} seconds` );
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
 const nokRate = 76 / 8.6;
 const usdRate = 8.6 / 76;
 const dollars = 54;
 const kroner = 54; 
 const usdToNok = Math.round(dollars * nokRate); 
 const nokToUsd = Math.round(kroner * usdRate);
printOut(`54 USD = ${usdToNok} NOK`);
printOut(`54 NOK = ${nokToUsd} USD`);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
const part6Text = "There is much between heaven and earth that we do not understand.";
printOut(`The text has ${part6Text.length} characters`);
printOut(`The character at position 19 is: ${part6Text.charAt(19)}`);
printOut(`The substring from 35 and 8 places is: ${part6Text.substr(35, 43)}`);
printOut(`The word "earth" starts at position: ${part6Text.indexOf("earth")}`);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
printOut(`5 > 3 is ${5 > 3}`);
printOut(`7 >= 7 is ${7 >= 7}`);
printOut(`"a" > "b" is ${"a" > "b"}`);
printOut(`"1" < "a" is ${"1" < "a"}`);
printOut(`"2500" < "abcd" is ${"2500" < "abcd"}`);
printOut(`"arne" !== "thomas" is ${"arne" !== "thomas"}`);
printOut(`2 === 5 is ${2 === 5}`);
printOut(`("abcd" > "bcd") === false is ${("abcd" > "bcd") === false}`);
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
const part8Text1 = "254";
const part8Text2 = "57.23";
const part8Text3 = "25 kroner";
printOut(`"254" = ${Number(part8Text1)}`);
printOut(`"57.23" = ${parseFloat(part8Text2)}`);
printOut(`"25 kroner" = ${parseInt(part8Text3)}`);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
const r = Math.floor(Math.random() * 360) + 1;
printOut(`Random number from 1 to 360: ${r}`);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
const totaldays = 131;
const weeks = Math.floor(totaldays / 7);
const dayLeft = totaldays % 7;
printOut(`131 days is ${weeks} weeks and ${dayLeft} days`);
printOut(newLine);