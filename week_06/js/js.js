(function () {'use strict';
      
              
///Create Data                  
  $('#create-submit').off( );
  $('#create-submit').on( 'click', function( evt ) {
    console.log("Clicked!");
    var baseUrl = 'https://shielded-sea-3725.herokuapp.com/data-api/';
    var collection = 'jwilliams';
    var wish = $('#inputWish').val();
    var priority = $("#radioDivInput input[name=optionsRadios]:checked").val();
    console.log(wish);
    console.log(priority);

    evt.preventDefault( );

    $.ajax( baseUrl + collection,
    {
        method: 'POST',
        data: {
                  wish: wish,
                  priority: priority
              },
        success: logCreateResult,
        error: logAjaxError
    });
  });

  function logCreateResult( data ) {
    console.log( 'Wish received:', data );
    $( '#wishReceived' ).text( "Wish was received!" );
    $( 'input[name=optionsRadios]' ).attr( 'checked', false );
    $( '#inputWish' ).val( "" );
  }

  function logAjaxError( jqXHR, textStatus, errorThrown ) {
    console.log( 'AJAX error. Status:', textStatus, 'error:', errorThrown );
  }      

///Read Data              
$('#retrieve').off( );
$('#retrieve').on( 'click', function( evt ) {              
  var baseUrl = 'https://shielded-sea-3725.herokuapp.com/data-api/';
  var collection = 'jwilliams'; //Use your own!

  $.ajax( baseUrl + collection,
  {
      method: 'GET',
      success: populateTable,
      error: logAjaxError
  } );

  function populateTable( data ) {
    console.log(data);
        document.getElementById("listTable").innerHTML = "";

    
      for (var i=0, len = data.length; i < len; i++) {
        addTableRow(document.getElementById("listTable"), data[i]);
      }
  }

  function logAjaxError( jqXHR, textStatus, errorThrown ) {
      console.log( 'AJAX error. Status:', textStatus, 'error:', errorThrown );
  }
  
  // Search
  $('#searchButton').off( );
$('#searchButton').on( 'click', function( evt ) {
    var baseUrl = 'https://shielded-sea-3725.herokuapp.com/data-api/';
    var collection = 'jwilliams'; //Use your own!
    var id = $('#dataId').val();

    evt.preventDefault( );

    $.ajax( baseUrl + collection + '/' + id,
    {
        method: 'GET',
        success: logReadResult,
        error: logAjaxError
    } );
} );

function logReadResult( data ) {
    console.log(data);
        document.getElementById("searchTable").innerHTML = "";
        addTableRow(document.getElementById("searchTable"), data);

}

function logAjaxError( jqXHR, textStatus, errorThrown ) {
    console.log( 'AJAX error. Status:', textStatus, 'error:', errorThrown );
}

  //Update
  $('#update').off( );
$('#update').on( 'click', function( evt ) {
    var baseUrl = 'https://shielded-sea-3725.herokuapp.com/data-api/';
    var collection = 'jwilliams'; //Use your own!
    var id = $('#updateSearchId').val();
    var wish = $('#updateWish').val();
    var priority = $("#radioDivSearch input[name=optionsRadiosUpdate]:checked").val();

    evt.preventDefault( );

    $.ajax( baseUrl + collection + '/' + id,
    {
        method: 'PUT',
        data: {
                  wish: wish,
                  priority: priority
              },
        success: logUpdateResult,
        error: logAjaxError
    } );
} );

function logUpdateResult( data ) {
    console.log( 'Data received:', data );
}

function logAjaxError( jqXHR, textStatus, errorThrown ) {
    console.log( 'AJAX error. Status:', textStatus, 'error:', errorThrown );
}
  
  
  // Delete
  $('#deleteButton').off( );
$('#deleteButton').on( 'click', function( evt ) {
    var baseUrl = 'https://shielded-sea-3725.herokuapp.com/data-api/';
    var collection = 'jwilliams'; //Use your own!
    var id = $('#deleteSearchId').val();

    evt.preventDefault( );

    $.ajax( baseUrl + collection + '/' + id,
    {
        method: 'DELETE',
        success: logDeleteResult,
        error: logAjaxError
    } );
} );

function logDeleteResult( data ) {
    console.log( 'Data received:', data );
}

function logAjaxError( jqXHR, textStatus, errorThrown ) {
    console.log( 'AJAX error. Status:', textStatus, 'error:', errorThrown );
}


  
  
//make a table from the data instead of adding table rows...  
  function addTableRow(theTable, theWish) {
    var table1 = '<tr><th colspan="2">'; //wish
    var table2 = "</th></tr><td>"; //priority
    var table3 = "</td><td>"; //wish id
    var table4 = "</td></tr>"; //closing tag
    
    var wish = theWish.wish;
    var priority = theWish.priority;
    var id = theWish._id;
    
    if (typeof priority == 'undefined') {
      priority = "";
    }
    
    var addToTable = 
    table1.concat(wish,table2,priority,table3,id,table4);
    theTable.innerHTML += addToTable;
    
  };
  
  
  
});
              
  
              
              
              
              
              
              
              
              
              
              
              
                      
}()); 