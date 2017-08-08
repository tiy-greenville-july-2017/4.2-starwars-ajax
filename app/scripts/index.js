var $ = require('jquery');
var handlebars = require('handlebars');

init();

function displayPlanetList(planets){
  var $planetList = $('#planet-list');
  var source = $('#planet-template').html();
  var template = handlebars.compile(source);

  planets.forEach(function(planet){
    var $planetItem = $(template(planet));
    $planetList.append($planetItem);
  });
}

function init(){
  fetch('https://swapi.co/api/planets/').then(function(response){
    return response.json();
  }).then(function(data){
    console.log(data.results);
    displayPlanetList(data.results);
  });
}


// function displayResident($planetItem, resident){
//   var source = $('#planet-template').html();
//   var template = handlebars.compile(source);
//   $planetItem.append()
// }
//
// function displayResidents($planetItem, residents){
//   residents.forEach(function(url){
//     fetch(url).then(function(res){ return res.json()}).then(function(data){
//       displayResident($planetItem, data);
//     });
//   });
// }
//
// function displayPlanetList(planets){
//   var $planetList = $('#planet-list');
//   var source = $('#planet-template').html();
//   var template = handlebars.compile(source);
//
//   planets.forEach(function(planet){
//     var $planetItem = $(template(planet));
//     $planetList.append($planetItem);
//
//     $planetItem.find('button').click(function(){
//       displayResidents($planetItem, planet.residents);
//     });
//   });
// }

// $.ajax('https://swapi.co/api/planets/').then(function(data){
//   console.log(data);
//   var $planetList = $('#planet-list');
//   var source = $('#planet-template').html();
//   console.log(source);
//   var template = handlebars.compile(source);
//
//   data.results.forEach(function(planet){
//     $planetList.append(template(planet));
//   });
// });

// $.get('https://swapi.co/api/planets/', function(data){
//   console.log(data);
// });

// function ajax(url, callback){
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       callback(this.responseText);
//     }
//   };
//   xhttp.open("GET", url, true);
//   xhttp.send();
// }
//
//
//
// ajax('https://swapi.co/api/planets/', function(data){
//   document.getElementById("demo").innerHTML = data;
// });




















// 3. --------------------------------------------

// The code below will log the letter twice. What
// is the order that will be logged?

// [a]: x then y then z
// [b]: y then z
// [c]: z then y
// [d]: x then z

// Please explain your answer.

// var letter = "x";
//
// setTimeout(function(){
// letter = "y";
// console.log("The letter is", letter);
// }, 5000);
//
// letter = "z";
// console.log("The letter is", letter);
