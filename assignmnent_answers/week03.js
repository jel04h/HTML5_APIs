/*
  NumbersAndStrings.js

  Reads user input. If numeric, computes and displays basic statistics.
  Otherwise concatenates strings.
*/

(function() {
'use strict';
//=============================================================================

var count = 0;
var sum = 0;
var average;
var concatenatedString = '';
var wordCounts = {};

DisplayResults( );

$('#submit').on( 'click', processForm );
$('#reset').on( 'click', reset );
$('#user-input').on( 'focus', clearInput );

//=============================================================================

function processForm( evt ) {
    var val = $('#user-input').val();
    var num = +val;
    if ( isNaN( num ) ) {
        processString( val );
    } else {
        processNumber( num );
    }
    evt.preventDefault( );
}

//=============================================================================

function processString( string ) {
    concatenatedString += string;
    updateWordCounts( string );
    DisplayResults( );
}

//=============================================================================

function updateWordCounts( string ) {
    var words = string.split( /\s/ ); //split on whitespace (Could use ' ')
    words.forEach( function( word ) {
        word = word.toLowerCase();
        word = word.replace( /\W/, '' ); //remove non-word characters with an empty string
        if ( word.length === 0 ) {
            return;
        }
        if ( wordCounts[ word ] === undefined ) {
            wordCounts[ word ] = 1; //starts off with a 1 and if it's not undefined he add to the count
        } else {
            ++wordCounts[ word ];
        }
    } );
}

//=============================================================================

function processNumber( number ) {
    ++count;
    sum += number;
    if ( count > 0 ) {
        average = sum / count;
    } else {
        average = undefined;
    }
    DisplayResults( );
}

//=============================================================================

function DisplayResults( ) {
    displayValue( '#count', count );
    displayValue( '#sum', sum );
    displayValue( '#average', average );
    displayValue( '#concatenation', concatenatedString );
    displayWordCounts( );

    //-------------------------------------------------------------------------

    function displayValue( selector, value ) {
        if ( value === undefined ) {
            $( selector ).empty( );
        } else {
            $( selector ).text( value );
        }
    }
}

//=============================================================================

function displayWordCounts( ) {
    var words = Object.keys( wordCounts );
    var tr, td;

    words.sort( function( word1, word2 ) {
        //Sort in descending order by count
        return wordCounts[ word2 ] - wordCounts[ word1 ];
    } );

    $('#word-counts').empty( );
    words.forEach( function( word ) {
        tr = $( '<tr>' ); //added to the table or created a table for each word

        td = $( '<td>' ); // Book: "Effective Javascript" has a whole chapter on dictionaries which has a way better approach. This approach is kindof naive...and could be better.
        td.text( word );
        tr.append( td );

        td = $( '<td>' );
        td.text( wordCounts[ word ] );
        tr.append( td );

        $('#word-counts').append( tr );
    } );
}

//=============================================================================

function reset( ) {
    count = 0;
    sum = 0;
    average = undefined;
    concatenatedString = '';
    wordCounts = {};
    DisplayResults( );
}

//=============================================================================

function clearInput( ) {
    $('#user-input').val( '' );
}

//=============================================================================
})();
