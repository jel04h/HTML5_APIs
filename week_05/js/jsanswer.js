/*
  Inputs.js
*/

(function() {
'use strict';

//=============================================================================

displayAllInputValues( );

$('input, textarea, select').on( 'change', displayNewValue );
  //jquery gets stuff by css selector so above is | when the change happens then this event happens

//=============================================================================

function displayAllInputValues( ) {
    $('input, textarea, select').each( function( ) {
        displayValue( $( this ) );
    } );
}

//-----------------------------------------------------------------------------

function displayNewValue( evt ) { 
    var input = $(evt.target);
    displayValue( input );
}

//-----------------------------------------------------------------------------

function displayValue( input ) {
    var type = input.attr( 'type' );
    var name = input.attr( 'name' );
    var value;

    if ( type === 'checkbox' ) {
        value = input.prop( 'checked' );
    } else {
        value = input.val( );
    }

    $( '#' + name + '-value' ).text( value );
}


//=============================================================================
})();


/*
  DragAndDrop.js
*/

(function() {
'use strict';

//=============================================================================


$('.draggable').on( 'mousedown', startDrag );

//=============================================================================

function startDrag( evt ) {
    var thing = $(evt.target);
    var thingLeft = parseInt( thing.css( 'left' ), 10 ); //position of the element, measured from the top left corner of it's containing element
    var thingTop = parseInt( thing.css( 'top' ), 10 );
    var diffX = thingLeft - evt.pageX; //pageX and pageY are mouseevents you can get across most browsers - this is the mouse's position - measured from the top left corner of the webpage
    var diffY = thingTop - evt.pageY; //we just want the difference between the two x coordinates and the two y coordinates.
    var maxX = $('#arena').width() - thing.width() + 1; //max and min
    var maxY = $('#arena').height() - thing.height() + 1; //used the height and width of the arena and added one px to let it go all the way to the end.

    $(document).on( 'mousemove', drag ); //mousemove starts the drag
    $(document).on( 'mouseup', stopDrag ); //mouse stop stops it

    thing.addClass( 'dragging' );

    //-------------------------------------------------------------------------

    function drag( evt ) {
        var left = evt.pageX + diffX;
        var top = evt.pageY + diffY;
        left = Math.min( Math.max( 0, left ), maxX ); //max and min - did not want to go under zero which would leave the arena
        top = Math.min( Math.max( 0, top ), maxY );
        thing.css( { //sets the css
            left: left + 'px', //css wants pixels so you have to add the px
            top: top + 'px'
        } );
    }

    //-------------------------------------------------------------------------

    function stopDrag( evt ) {
        $(document).off( 'mousemove' ); //just turns off the two handlers
        $(document).off( 'mouseup' );

        thing.removeClass( 'dragging' ); //removes the class dragging
    }
}


//=============================================================================
})();