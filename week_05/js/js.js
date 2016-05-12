(function () {'use strict';
      
//  var dog = {
//    name: "Blitz",
//    age: 2,
//  };
//  
//  console.log(dog);
              
//  $( '#submit' ).click(function() {
//    herbCheckbox();
//    flowerColor();
//    datePicker();
//    email();
//    radioButtons();
//    
////    $('#colorAnswer').text(colorBox);
//    
//    $('#dateAnswer').text(getDate());
//    
//    $( '#textAlert ').text( "Thank you for submitting." );
//  });
              
    herbCheckbox();
    flowerColor();
    datePicker();
    email();
    radioButtons();

              
  $("input[name=herb]").change(function() {
    herbCheckbox();
  });

  $("#color").change(function() {
    flowerColor();
  });
  
  $("#date").change(function() {
    datePicker();
  });              

  $("#email").change(function() {
    email();
  });
                            
  $("#password").change(function() {
    password();
  });
              
  $("#radioDiv input[name=climbingVegs]:checked").change(function() {
    radioButtons();
  });              
              
  function herbCheckbox() {
    if($('#basil').is(':checked')) {
      $('#basilAnswer').text("Yes to Basil.")
    } else {
      $('#basilAnswer').text("No to Basil.")
    };
    if($('#rosemary').is(':checked')) {
      $('#rosemaryAnswer').text("Yes to Rosemary.")
    } else {
      $('#rosemaryAnswer').text("No to Rosemary.")
    };
    if($('#thyme').is(':checked')) {
      $('#thymeAnswer').text("Yes to Thyme.")
    } else {
      $('#thymeAnswer').text("No to Thyme.")
    };
  }
                            
  function flowerColor() {
    $("#colorAnswer").text($("#color").val());
    
  }
              
  function datePicker() {
    $("#dateAnswer").text($("#date").val());
    
  }
              
  function email() {
    $("#emailAnswer").text($("#email").val());
  }
  
  function password() {
    $("#passwordAnswer").text($("#password").val());
  }              
              
  function radioButtons() {
    $("#radioAnswer").text($("#radioDiv input[name=climbingVegs]:checked").val());
  }
              
  function range() {
    $("#flowerNumberAnswer").text($("#flowerNumber").val());
  }


              
              
   
  function getDate() {
    var theDate = document.getElementById("date").value
  }        
              
  $( '#reset' ).click(function() {
    //alert( "ClickedReset" );
    $( '#basil' ).prop( "checked", false );
    $( '#rosemary' ).prop( "checked", false );
    $( '#thyme' ).prop( "checked", false );
    $( '#basilAnswer').text( "" );
    $( '#rosemaryAnswer').text( "" );
    $( '#thymeAnswer').text( "" );
    $( '#color' ).val( "#FFFFFF");
    $( '#date' ).val( "" );
    $( '#email' ).val( "" );
    $( '#password' ).val( "" );
    $( 'input[name=climbingVegs]' ).attr( 'checked', false );
    $( 'input[name=flowerNumber]' ).val( "50" );
    $( '#textAlert ').text( "Form has been reset." );
  });           
             
  


             
             
             
             
             
             
             
             
}()); 