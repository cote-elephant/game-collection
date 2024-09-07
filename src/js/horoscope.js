// horoscope as output
// date as input

/* horoscope date list
21. Januar – 19. Februar: Wassermann
20. Februar – 20. März: Fische
21. März – 20. April: Widder
21. April – 20. Mai: Stier
21. Mai – 21. Juni: Zwillinge
22. Juni – 22. Juli: Krebs
23. Juli – 23. August: Löwe
24. August – 23. September: Jungfrau
24. September – 23. Oktober: Waage
24. Oktober – 22. November: Skorpion
23. November – 21. Dezember: Schütze
22. Dezember – 20. Januar: Steinbock
*/

import readlineSync from "readline-sync";

console.log("Hello and welcome to discovering Your horoscope. hexhex");

// Asking for user input
let askDay = readlineSync.question("Enter your birth day: ");
let askMonth = readlineSync.question("Enter your birth month: ");

// Function to convert and normalize the input
function convertSign(rlS) {
    // Check if input is a number
    if (!isNaN(rlS)) {
        rlS = parseInt(rlS);  // Convert to number if it's numeric
        if (rlS < 10) {
            rlS = "0" + rlS;  // Add leading zero for single-digit numbers
        }
    } else {
        // Convert month names to lowercase and match with number
        rlS = rlS.toLowerCase();
        // Create a object -> january: 1, february: 2 etc.
        // 
        const months = {
            january: 1, february: 2, march: 3, april: 4, may: 5, june: 6,
            july: 7, august: 8, september: 9, october: 10, november: 11, december: 12
        };
        rlS = months[rlS];
    }
    return rlS;
}

// Convert day and month using the separate function
let day = convertSign(askDay);
let month = convertSign(askMonth);

// Function to determine the zodiac sign
function zodiac_sign(day, month) {
    day = parseInt(day);  // Ensure day is a number
    let zodiac = "";

    // Determine the zodiac sign based on month and day
    if ((month == 1 && day >= 21) || (month == 2 && day <= 19)) {
        zodiac = "Aquarius";
    } else if ((month == 2 && day >= 20) || (month == 3 && day <= 20)) {
        zodiac = "Pisces";
    } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
        zodiac = "Aries";
    } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
        zodiac = "Taurus";
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 21)) {
        zodiac = "Gemini";
    } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
        zodiac = "Cancer";
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
        zodiac = "Leo";
    } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
        zodiac = "Virgo";
    } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
        zodiac = "Libra";
    } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
        zodiac = "Scorpio";
    } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
        zodiac = "Sagittarius";
    } else if ((month == 12 && day >= 22) || (month == 1 && day <= 20)) {
        zodiac = "Capricorn";
    }

    return zodiac;
}

// Calling the function and printing the result
let sign = zodiac_sign(day, month);
console.log("Your zodiac sign is: " + sign);