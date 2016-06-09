(function () {'use strict';
           
//objects              
              
//toggle forms on and off
  $("#addAnimalToggle").click(function() {
    $("#inputAnimal").val(""); // reset to blank
    $("#inputQuantity").val(""); // reset to blank
    $("#inputAddForm").removeClass("hidden"); // show add/edit form
  });

  $("#addAnimalButton").click(function() {
    addAnimal(); //works!
    $("#inputAddForm").addClass("hidden");

  });
              
  $("#cancelAnimalToggle").click(function() {
    $("#inputAddForm").addClass("hidden");
    $("#inputEditForm").addClass("hidden");
  });
                            
//add animal to the zootable!
  function addAnimal() {
    var theAnimal = $("#inputAnimal").val();
    var theQuantity = $("#inputQuantity").val();
    
    var zooStr = localStorage["Week7_zoo"];
    
    var zoo;
    
    // Get the zoo or create it if it doesn't exist yet
    if (zooStr) {
      zoo = JSON.parse(zooStr);
    } else {
      zoo = new Object();
    }
    zoo[theAnimal] = theQuantity;
    console.log(zoo);
    localStorage.setItem("Week7_zoo", JSON.stringify(zoo));
    
    refreshTable(zoo);
  };
              
 function refreshTable(zoo) {
   
   // Clear out the table
   $("#animalTable").empty();
   
   // Set table header
   $("#animalTable").append("<thead><th>Animal</th><th>Quanity</th><th>Options</th></thead>");
   
   for (var animal in zoo) {
          
     var editBtn = $("<input class='btn btn-default' type='button' value='Edit'>")
      .click(editAnimal(animal));
     
    var deleteBtn = $("<input class='btn btn-default' type='button' value='Delete'>")
      .click(deleteAnimal(animal));
     
     var row = $("<tr></tr>");
     row.append("<td>" + animal + "</td>");
     row.append("<td>" + zoo[animal] + "</td>");
     
     var editCell = $("<td></td>");
     editCell.append(editBtn);
     row.append(editCell);
     
     var deleteCell = $("<td></td>");
     deleteCell.append(deleteBtn);
     row.append(deleteCell);
                  
     $("#animalTable tr:last").after(row);
      
   }
 }
              
function editAnimal(animalName) {
  
  // Return a function so this can be assigned in for loop
  // (http://stackoverflow.com/questions/4091765/assign-click-handlers-in-for-loop)
  return function() {
    var zoo = JSON.parse(localStorage["Week7_zoo"]);
    $("#inputAddForm").removeClass("hidden");
    $("#inputAnimal").val(animalName);
    $("#inputQuantity").val(zoo[animalName]);
  } 
}
              
function deleteAnimal(animalName) {
  
  // Return a function so this can be assigned in for loop
  // (http://stackoverflow.com/questions/4091765/assign-click-handlers-in-for-loop)
  return function() {
    var zoo = JSON.parse(localStorage["Week7_zoo"]);
    delete zoo[animalName];
    localStorage.setItem("Week7_zoo", JSON.stringify(zoo));
    refreshTable(zoo);
  } 
}
                
              
              
              
              
              
              
              
              
              
              
              
                      
}()); 