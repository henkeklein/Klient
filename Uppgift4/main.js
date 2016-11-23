"use strict";
var omdbAPI = new XMLHttpRequest();

document.getElementById("search-form").onsubmit = function(event) {
    var query = decodeURI(document.getElementById("string").value);
    var omdbURL = "http://www.omdbapi.com/?s=" + query;
    omdbAPI.open("get", omdbURL, true);
    omdbAPI.send();
    if(query == ''){
      checkIfEmpty(query);
    }
    else{
      alert("You searched for: " + query);
    }
    event.preventDefault();
};
function loadMovie(){
omdbAPI.addEventListener("load", function() {
    var i = 0;
    var movies = document.getElementById("movies");
    var result = JSON.parse(this.responseText);
    $('#movies').empty();
    console.log(result);

    if (this.readyState == 4 && this.status == 200 && result.Response == "True") {
        while (i < result.Search.length) {
            var movies = document.getElementById("movies");
            var list = document.createElement("li");
            list.appendChild(document.createTextNode(result.Search[i].Title + " [" + result.Search[i].Year + "]"));
            $('#movies').append(list);
            i++;
        }

    } else {
        alert("Movie where not found");
    }
});
}
function checkIfEmpty(field) {
  var text = document.getElementById("string").value;
    if (text == '') {
        alert("Search field is empty!");
    }
}
