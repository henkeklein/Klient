/* Henrik Klein ad6539 */
"use strict";
/**
 * Uppgift 1
 * =========
 */
 function calcMin(x, y){
   if(x < y){
     console.log(x);
   }
   else{
     console.log(y);
   }
 }
 calcMin(12, 5);

 function calcMax(x, y){
   if(x > y){
     console.log(x);
   }
   else {
     console.log(y);
   }
 }
 calcMax(4, 22);

/**
  * Uppgift 2
  * =========
  */
  function range(n){
    var arr = [];
    for (var i = 0; i <= n; i++){
      arr.push(i);
    }
    console.log(arr);
  }
  range(4);

/**
  * Uppgift 3
  * =========
  */
 function sumArray(){
   var sum = 0;
   var n;
   var numbers = [5, 10, 15, 20, 25];
   for (var i = 0, n=numbers.length; i < n; i++){
     sum += numbers[i];
   }
   console.log(sum);
 }
 sumArray();

/**
  * Uppgift 4
  * =========
  */
 function countCharacter(name, char){
   var counter = 0;
   for (var i = 0; i < name.length; i += 1){
     if(name[i] === char){
       counter += 1;
     }
   }
   return counter;
 }
 var testString1 = "Jane Doe";
 var testString2 = "Abracadabra";
 console.log(countCharacter(testString1, "e"));
 console.log(countCharacter(testString2, "a"));

/**
  * Uppgift 5
  * =========
  */
  function palindrome(word){
    var newWord = word.toLowerCase();
    var checkPalindrome = newWord.split('').reverse().join('');

    if(newWord === checkPalindrome){
      console.log("True");
    }
    else {
      console.log("False");
    }
 }
  palindrome("sirap - paris");
  palindrome("lorem ipsum");

/**
  * Uppgift 6 & 7
  * =========
  */
 function printPerson(){
   var person = {firstname:"John", lastname:"Doe", age:50, family:["Eliza, Elise"]};

   console.log("Name: " + person.firstname + " " + person.lastname);
   console.log("Age: " + person.age);
   console.log("Family: " + person.family);
 }
 printPerson();

/**
  * Uppgift 8
  * =========
  */
 function createBox(height, width){
   var obj = {height: height, width: width};
   console.log("Height: " + obj.height);
   console.log("Width: " + obj.width);
 }
 //createBox(100, 50);

/**
  * Uppgift 9
  * =========
  */
 function Triangle(height, width){
   var obj = {height: height, width: width,
     area: function(){
       return this.height * this.width /2;
     }
    };
  return obj;
 }
 var tri = Triangle(12, 14);
 console.log(tri.height);
 console.log(tri.width);
 console.log(tri.area());
 /**
   * Uppgift 10
   * =========
   */
 function attributes(attribute){
   var obj = [];
   var index = 0;
   for(var attributes in attribute){
     obj[index] = attributes
     index++;
   }
   return obj;
 }
 var testObj = {a: 1, b: 2, c: 3};
 var atttributObj = attributes(testObj);
 console.log(atttributObj);
