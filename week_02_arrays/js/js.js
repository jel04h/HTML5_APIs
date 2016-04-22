/***HTML300: Week 2 Assignment // Object List
  
  Notes:
  1. Gets input for dog
  2. Adds input to dogList
  3. Takes dogList and puts it in the table

  Prototype/Constructor Info: http://www.w3schools.com/js/js_object_prototypes.asp 

*/

(function () {'use strict'; //opening 'use strict' not sure why we use this yet.
  
  var dogArray = [];
              
  var formDisplay = "";
              
              
  //object prototype with object constructor function - started this so we can put more objects in it.
  function Dog(name, owner, breed, age) {
    this.dogName = name;
    this.dogOwner = owner;
    this.dogBreed = breed;
    this.dogAge = age;
  }
  
  //onClick
  function onSubmitClick(evt) {
    
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
    
    dogArray.push(inputDog);
    
    createDogTable();
    
    formDisplay = document.getElementById("dogForm").style.display;
    document.getElementById("dogForm").style.display = "none";
    
    console.log(dogArray);
    
  }
              
  function onAddDogClick(evt) {
    clearForm();
    document.getElementById("dogForm").style.display = formDisplay;
  }
    
  //Create the dog table            
  function createDogTable() {
    clearTable();
    var table = document.getElementById("dogTable");
    
    for (var i=0; i < dogArray.length; i++) {
      var row = document.createElement("tr");
      
      var nameCol = document.createElement("td");
      var nameText = document.createTextNode(dogArray[i].dogName);
      nameCol.appendChild(nameText);
      
      var ownerCol = document.createElement("td");
      var ownerText = document.createTextNode(dogArray[i].dogOwner);
      ownerCol.appendChild(ownerText);

      var breedCol = document.createElement("td");
      var breedText = document.createTextNode(dogArray[i].dogBreed);
      breedCol.appendChild(breedText);

      var ageCol = document.createElement("td");
      var ageText = document.createTextNode(dogArray[i].dogAge);
      ageCol.appendChild(ageText);
      
      row.appendChild(nameCol);
      row.appendChild(ownerCol);
      row.appendChild(breedCol);
      row.appendChild(ageCol);
      
      table.appendChild(row);
    }
      
  }
              
  function clearTable() {
    var table = document.getElementById("dogTable");
    
    while (table.firstChild) {
      table.removeChild(table.firstChild);
    }
  }
              
  function clearForm() {
    document.getElementById("addName").value = "";
    document.getElementById("addOwner").value = "";
    document.getElementById("addBreed").value = "";
    document.getElementById("addAge").value = "";
    document.getElementById("alert").innerHTML = "";    
    
  }
              
                            
                          
  //onCancelClick
  function onCancelClick(evt) {
    clearForm();
    document.getElementById("dogForm").style.display = "none";
  }
              
  //making the 'submit this dog' button work...??
  document.getElementById("submitDog").addEventListener("click", onSubmitClick, false);
  document.getElementById("cancelDog").addEventListener("click", onCancelClick, false);
  document.getElementById("addDog").addEventListener("click", onAddDogClick, false);
  document.getElementById("dogForm").style.display = "none";

              
   }()); //closing 'use strict'