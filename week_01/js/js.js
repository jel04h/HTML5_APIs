var numberList = [];

var sum = 0;

document.getElementById("submit").addEventListener("click", onClick, false);

function onClick(evt) {
  
  var theNumber = parseInt(document.getElementById("myNumber").value);  
  
  if (theNumber != NaN) { 
  
    numberList.push(theNumber);

    document.getElementById("submittedSubmissions").innerHTML = numberList.toString();
  
    document.getElementById("numberSubmissions").innerHTML = numberList.length;

    sum = sum+theNumber;
    
    document.getElementById("sumSubmissions").innerHTML = sum;
    
    document.getElementById("meanSubmissions").innerHTML = sum/numberList.length;
    
    document.getElementById("medianSubmissions").innerHTML = math.median(numberList);
    
    document.getElementById("stdDevSubmissions").innerHTML = math.std(numberList);
    
  }   
  
}





