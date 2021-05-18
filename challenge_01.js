
/*********   CODE CHALLENGE 1 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein
Berechnen Sie die Summe der Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
‘Die Summe der Zahlen ist: summe ‘
*/

/*
let stringOne,stringTwo;
let numberOne,numberTwo;
stringOne = prompt("Geben Sie eine Zahl ein");
numberOne = parseInt (stringOne);
stringTwo = prompt("Geben Sie eine weitere Zahl ein");
numberTwo = parseInt (stringTwo)
let result = (numberOne + numberTwo);

console.log("Die Summer der Zahlen ist: " + result);
*/
let numberOne,numberTwo;
numberOne = prompt("Geben Sie eine Zahl ein");
//numberOne = parseInt (numberOne);
numberTwo = prompt("Geben Sie eine weitere Zahl ein");
//numberTwo = parseInt (numberTwo)
let result = (parseFloat(numberOne) + parseFloat(numberTwo));
console.log("Die Summer der Zahlen ist: " + result);

