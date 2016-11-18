/* Henrik Klein ad6539 */
"use strict";
/**
 * Uppgift 1
 * =========
 */
function myFunction1() {
    if (12 > 5 * 2) {
        console.log("true");
        return true;
    }
}

function myFunction2() {
    if (22 < 55) {
        console.log("true");
        return true;
    }
}

function myFunction3() {
    if (16 / 4 == 4) {
        console.log("true");
        return true;
    }
}

function myFunction4() {
    if (8 + 2 != 128) {
        console.log("true");
        return true;
    }
}

function myFunction5() {
    if (255 <= 32 * 8) {
        console.log("true");
        return true;
    }
}
myFunction1();
myFunction2();
myFunction3();
myFunction4();
myFunction5();
/**
 * Uppgift 2
 * =========
 */
function subString1() {
    var text = "Tisdag";
    var result = text.substring(3, 0);
    console.log(result);
}

function subString2() {
    var text = "Hamburgare";
    var result = text.substring(3);
    console.log(result);
}

function subString3() {
    var text = "I´ll be back";
    var result = text.substring(5);
    console.log(result);
}
subString1();
subString2();
subString3();
/**
 * Uppgift 3
 * =========
 */
function combine1() {
    var text = "It's Learning";
    var result = text.substring(5).toUpperCase();
    console.log(result);
}

function combine2() {
    var text = "JavaScript: The Good Parts";
    var result = text.substring(16).toLowerCase();
    console.log(result);
}
combine1();
combine2();
/**
 * Uppgift 4
 * =========
 */
function countFunction() {
    var numbers = [128, 256, 512, 1024, 2048, 3968];
    var sumOfNumbers = numbers.reduce(function(a, b) {
        return a + b;
    });
    console.log("Sum of numbers: " + sumOfNumbers);
    var avg = sumOfNumbers / numbers.length;
    console.log("Average: " + avg);
}
countFunction();
/**
 * Uppgift 5
 * =========
 */
function arrFunction() {
    var countries = ["Sweden", "Denmark", "Finland", "Norway"];
    var result = countries[1].substring(3, 0);
    console.log(result);
    var sum = countries.reduce(function(a, b) {
        return a + b;
    });
    var avg = sum.length / countries.length;
    console.log("Average: " + avg);
}
arrFunction();
/**
 * Uppgift 6
 * =========
 */
function reverseFunction() {
    var values = [3, 5, "Jane", true, 144, false];
    values.reverse();
    console.log(values);
}
reverseFunction();
/**
 * Uppgift 7
 * =========
 */
function multipleArr() {
    var names = ["Jane", "Joe", "Eliza"];
    var ages = [21, 34, 22];
    var hasPet = [true, false, true];
    var multipleArrays = names.concat(ages, hasPet);
    console.log(multipleArrays);
}
multipleArr();
/**
 * Uppgift 8
 * =========
 */
function mergeElement() {
    var actors = ["Sherlock", "Watson", "Bo"];
    var mergedArr = actors.join(" - ");
    console.log(mergedArr);
}
mergeElement();
/**
 * Uppgift 9
 * =========
 */
function checkAmount(amount) {
    if (amount < 50) {
        console.log("Less than 50!");
    } else if (amount > 50 && amount < 65) {
        console.log("Optimal range for the amount!");
    } else {
        console.log("Too much!");
    }
}
checkAmount(55);
/**
 * Uppgift 10
 * =========
 */
function printCharacter(){
  var hashtag = "";
  var i = 0;
  while (i < 9){
    hashtag += "#";
    console.log(hashtag);
    i++;
  }
}
printCharacter();
