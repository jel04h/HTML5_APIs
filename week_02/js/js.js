/***HTML300: Week 2 Assignment // Object List
  
  Notes:
  1. Gets input for dog
  2. Adds input to dogList
  3. Takes dogList and puts it in the table

  Prototype/Constructor Info: http://www.w3schools.com/js/js_object_prototypes.asp 

*/

(function () {'use strict'; //opening 'use strict' not sure why we use this yet.

  //object prototype with object constructor function - started this so we can put more objects in it.
  function Dog(name, owner, breed, age) {
    this.dogName = name;
    this.dogOwner = owner;
    this.dogBreed = breed;
    this.dogAge = age;
  }

  //test
  var aDog = new Dog("Blitz", "Joan", "Shiba Inu", "5");
  var bDog = new Dog("Gaia", "Vichy", "Siberian Husky", "2");
  var cDog = new Dog("Lucky", "Yu-Feng", "Shiba Inu/Chihuahua Mix", "6");
  
  console.log(Dog);
  //ok, the constructor funtion...works!
              
  //onClick
  function onClick(evt) {
    
    //getting the inputs and add to the database...!
    var inputName = document.getElementById("addName").value;
    var inputOwner = document.getElementById("addOwner").value;
    var inputBreed = document.getElementById("addBreed").value;
    var inputAge = document.getElementById("addAge").value;
    
    if (inputName === "" , inputOwner === "" , inputBreed === "" , inputAge === "") {
        document.getElementById("alert").innerHTML = "Please respectfully fill out every single one of this dog's attributes in the fields above.";
    return false;
        }
    
    var inputDog = new Dog(inputName, inputOwner, inputBreed, inputAge);
    
    //making sure above works
    console.log(inputName);
    console.log(inputDog);
    console.log(cDog);
    //it works!
    
    addTableRow(inputDog);
    
  }
    
  //make another function outside of this function that adds this data into the table
  function addTableRow(theDog) {
  var table1 = "<tr><th>";
  var table2 = "</th><th>";
  var table3 = "</th></tr>";
  var addToDogTable = table1.concat(theDog.dogName,table2,theDog.dogOwner,table2,theDog.dogBreed,table2,theDog.dogAge,table3);
    
  document.getElementById("dogTable").innerHTML += addToDogTable;
  }            
              
                          
  //onCancelClick
  function onCancelClick(evt) {
    document.getElementById("addName").value = "";
    document.getElementById("addOwner").value = "";
    document.getElementById("addBreed").value = "";
    document.getElementById("addAge").value = "";
    document.getElementById("alert").innerHTML = "";
  }
              
  //making the 'submit this dog' button work...??
  document.getElementById("submitDog").addEventListener("click", onClick, false);
  document.getElementById("cancelDog").addEventListener("click", onCancelClick, false);
              
   }()); //closing 'use strict'