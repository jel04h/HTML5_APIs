(function () {'use strict'; //opening 'use strict' not sure why we use this yet.

  //main variables
  var strings = []; //starts an array
  var numbers = []; //starts another array for numbers
  var sum = 0; //makes a variable that is the sum and sets it at zero
              
  //items below happen when you click...
  $( "#submit" ).click(function() {
    
    var input = $( "#formInput" ).val(); //creates the input var from the value of what is in the text area id="formInput"
    
    console.log(input); //checking on the console that the input works
    
    // if --> else statement (it's written in the same format every time, follow this format so you can write multiple lines underneath if and else.
    if ($.isNumeric(input)) { // if ("$.isNumeric" is a jQuery function"("input" is from the var above))
      console.log( "It's a number." ); //checking on the console
      input = parseInt(input); // parseInt makes turns the (input) into an Integer.
      numbers.push(input); // uses the .push function to add something to the end of an array. this particular one adds the current input to the end of the numbers array.
      
      sum = sum+input; // sum = sum + input = sum + input + the next input, etc.
      
      $( "#tableNumCount" ).text(numbers.length);  //"$( "#tableNumCount" ).text" is where to set the new text "(numbers.length)" is what to set it to.;
      $( "#tableNumSum" ).text(sum); //sets the text for NumSum as what sum is set to in line 21
      $( "#tableNumAverage" ).text(sum/numbers.length); //sets the text as the sum divided by the number of array items (length of the array)
      
      $( "#formInput").val(""); //sets the value in the text box to an empty string
      
    } else { //if if didn't happen, then this happens...
      console.log( "It's a string." ); //checking to see what the computer thinks is a string
      strings.push(input);  // pushes the "input" onto the end of the strings array. ".push" is a function to add something to the end of an array.
      var currentText = ""; //starts the currentText off with nothing (an empty string), basically resetting it
       
      //this is a for loop
      for (var i = 0; i < strings.length; i++) {
      // ("var i = 0" means the first i starts at zero; "i < strings.length; i++" the next i will be i++ which means i+1) if this isn't here then you can't use the for loop or the "[i]" anything.
        currentText = currentText + " " + strings[i]; //takes the empty string, puts a space, and adds the first array item. then takes the first array item with the space, adds a space and adds the second array item, etc.
      }
      
      $( "#tableString").text(currentText); //replaces the text of the tableString id element and adds currentText which has now been transformed by the for loop.
      
      $( "#formInput").val(""); //clears what is in the text box
    }
    
  });
      
    //for the clear button          
    $( "#clearInput").click(function() {
      $( "#formInput").val("");
      
  });
                    
  }()); //closing 'use strict'