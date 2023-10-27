//! Assignment 38 - 44

//? Q 1

// function power(a, b) {
//     let result = 1;
//     for (let i = 0; i < b; i++) {
//       result *= a;
//     }
//     return result;
//   }
  
  
// document.write(power(2, 3) + '<br>');  
// document.write(power(5, 2));

//? Q 2

// function leapYear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }


// const year = prompt('Enter Any For Checking Leap')
// if (leapYear(year)) {
//   document.write(year + " is a leap year.");
// } else {
//   document.write(year + " is not a leap year.");
// }


//? Q 3

// function calculateS(a, b, c) {
//   return (a + b + c) / 2;
// }
// function calTriArea(a, b, c) {
//   const S = calculateS(a, b, c);
//   const area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
//   return area;
// }

// const sideA = 5;
// const sideB = 6;
// const sideC = 7;

// const triangleArea = calTriArea(sideA, sideB, sideC);
// document.write("The area of the triangle is: " + triangleArea);


//? Q 4

// function calcuAverage(mark1, mark2, mark3) {
//     return (mark1 + mark2 + mark3) / 3;
// }

// function calculatePercentage(mark1, mark2, mark3, totalMarks = 300) {
//     const totalObtainedMarks = mark1 + mark2 + mark3;
//     return (totalObtainedMarks / totalMarks) * 100;
// }

// function mainFunction() {
//     const mark1 = +(prompt("Enter marks for subject 1:"));
//     const mark2 = +(prompt("Enter marks for subject 2:"));
//     const mark3 = +(prompt("Enter marks for subject 3:"));

//     const average = calcuAverage(mark1, mark2, mark3);
//     const percentage = calculatePercentage(mark1, mark2, mark3);

//   document.write('Average marks: ' + average + "<br>");
//   document.write('Percentage: ' + percentage);
// }

// mainFunction();

//? Q 5

// function custInd(inputStr, searchChar) {
//     for (let i = 0; i < inputStr.length; i++) {
//         if (inputStr[i] === searchChar) {
//             return i;
//         }
//     }
//     return -1;
// }

// const text = "Hello, world!";
// const charToFind = "g";
// const result = custInd(text, charToFind);

// if (result !== -1) {
//     document.write(charToFind + ' found at index' +result);
// } else {
//     document.write(charToFind + ' is not found in the string.');
// }

//? Q 6

// function removeVow(sentence) {
//     const vowRegex = /[aeiouAEIOU]/g;
//     const result = sentence.replace(vowRegex, '');

//     return result;
// }

// const inputSentence = "This is a sample sentence with some vowels.";
// const sentenceWithoutVowels = removeVow(inputSentence);
// document.write(sentenceWithoutVowels);

//? Q 7

// function countVowels(text) {
//     text = text.toLowerCase(); 
//     let count = 0;

//     for (let i = 0; i < text.length - 1; i++) {
//         const currentChar = text[i];
//         const nextChar = text[i + 1];

//         switch (currentChar + nextChar) {
//             case 'ae':
//             case 'ai':
//             case 'ao':
//             case 'au':
//             case 'ea':
//             case 'ei':
//             case 'eo':
//             case 'eu':
//             case 'ia':
//             case 'ie':
//             case 'io':
//             case 'iu':
//             case 'oa':
//             case 'oe':
//             case 'oi':
//             case 'ou':
//             case 'ua':
//             case 'ue':
//             case 'ui':
//             case 'uo':
//                 count++;
//                 break;
//         }
//     }

//     return count;
// }

// const inpText = "Pleases read this application and give me gratuity";
// const result = countVowels(inpText);
// document.write('Number of successive vowel pairs:' + result);


//? Q 8

// function convertToMeters(distanceInKilometers) {
//     return distanceInKilometers * 1000;
// }

// function convertToFeet(distanceInKilometers) {
//     return distanceInKilometers * 3280.84;
// }

// function convertToInches(distanceInKilometers) {
//     return distanceInKilometers * 39370.1;
// }

// function convertToCentimeters(distanceInKilometers) {
//     return distanceInKilometers * 100000;
// }

// function printConversions(distanceInKilometers) {
//     const distanceInMeters = convertToMeters(distanceInKilometers);
//     const distanceInFeet = convertToFeet(distanceInKilometers);
//     const distanceInInches = convertToInches(distanceInKilometers);
//     const distanceInCentimeters = convertToCentimeters(distanceInKilometers);

//     document.write('Distance in Meters: ' + distanceInMeters+ ' m' +"<br>");
//     document.write('Distance in Feet: ' + distanceInFeet + ' ft' +"<br>");
//     document.write('Distance in Inches: ' + distanceInInches + ' inches' +"<br>");
//     document.write('Distance in Centimeters: ' + distanceInCentimeters + ' cm');
// }

// const distanceInKilometers = parseFloat(prompt("Enter distance between two cities (in kilometers):"));
// printConversions(distanceInKilometers);


//? Q 9

// function calOvertimePay(hoursWork) {
//     const regularHours = 40;
//     const hourlyRate = 12.0;
  
//     if (hoursWork <= regularHours) {
//       return 0; 
//     } else {
//       const overtimeHours = hoursWork - regularHours;
//       const overtimePay = overtimeHours * hourlyRate;
//       return overtimePay;
//     }
//   }
  
  
//   let hoursWork = 45; 
//   let overtimePay = calOvertimePay(hoursWork);
//   document.write('Overtime pay: Rs.' + overtimePay);
  

//? Q 10

function calculateCurrencyNotes(amountInHundreds) {
    let amountInRupees = amountInHundreds * 100;
    let notes100 = 0;
    let notes50 = 0;
    let notes10 = 0;
  
    if (amountInRupees >= 100) {
      notes100 = Math.floor(amountInRupees / 100);
      amountInRupees %= 100;
    }
  
    if (amountInRupees >= 50) {
      notes50 = Math.floor(amountInRupees / 50);
      amountInRupees %= 50;
    }
  
    if (amountInRupees >= 10) {
      notes10 = Math.floor(amountInRupees / 10);
    }
  
    return {
      notes100,
      notes50,
      notes10,
    };
  }
  
  const amountInHundreds = 3; 
  const result = calculateCurrencyNotes(amountInHundreds);
  document.write('100s: '  +result.notes100 + 'notes'+ "<br>");
  document.write('50s: '  + result.notes50 + 'notes'+ "<br>");
  document.write('10s: '  +result.notes10 + 'notes');
  