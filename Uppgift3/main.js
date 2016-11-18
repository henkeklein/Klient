/* Henrik Klein ad6539 */
"use strict";
/**
 * Uppgift 1
 * =========
 */
function functionSuccess(){
   document.getElementById('message-box').className = '';
   document.getElementById('message-box').className += " success";
}

function functionError(){
  document.getElementById('message-box').className = '';
  document.getElementById('message-box').className += " error";
}

function functionInfo(){
  document.getElementById('message-box').className = '';
  document.getElementById('message-box').className += " info";
}

/**
 * Uppgift 2 & 3
 * =========
 */
function addItem(){
  var messageBox = prompt("Enter: ");
  var firstEntry = document.getElementById("items");
  var secondEntry = document.createElement("LI");
  secondEntry.appendChild(document.createTextNode(messageBox));
  firstEntry.appendChild(secondEntry);
}

function removeItem(){
  var item = document.getElementById("items");
  var itemToRemove = item.lastElementChild;
  item.removeChild(itemToRemove);
};

/**
 * Uppgift 4
 * =========
 */

var buttons = document.getElementsByClassName("remove-list-item");
var li = document.getElementsByTagName('li');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
      if(confirm("Are you sure you want to remove this element?")){
        for (var j = 0; j < li.length; j++) {
          li[j].onclick = function() {
            this.parentNode.removeChild(this);
          }
        }
      }
    });
  }

/**
 * Uppgift 5
 * =========
 */

 function isInt(value) {
   return !isNaN(value) &&
          parseInt(Number(value)) == value &&
          !isNaN(parseInt(value, 10));
 }

 var form = document.getElementById("apply-for-pet");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    var number = form.age.value;

    if(form.firstname.value.length > 50){
      alert("Too long firstname");
    }
    if(form.firstname.value.length <= 0){
      alert("Please enter your Firstname");
    }
    else if (form.lastname.value.length > 5){
      alert("Too long lastname");
    }
    else if (form.lastname.value.length <= 0){
      alert("Please enter your Lastname");
    }
    else if (!isInt(number)){
      alert("Please fill in your age");
    }
    else if (number <= 0){
      alert("Please fill in a number greater than zero");
    }
    else if (form.email.value.length > 50){
      alert("Too long email");
    }
    else if (form.email.value.length <= 0){
      alert("Please enter your email");
    }
    else if (form.pet.value == ''){
      alert("Please choose a pet");
    }

    else{
      console.log(form.firstname.value + "\n" + form.lastname.value + "\n" + form.age.value + "\n" + form.email.value + "\n" + form.pet.value);
      event.target.submit();
    }
  });
