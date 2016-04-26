var numberList = [];

var sum = 0;

document.getElementById("submit").addEventListener("click", onClick, false);
document.getElementById("reset").addEventListener("click", onResetClick, false);

function onClick(evt) {
  
  var theNumber = Number(document.getElementById("myNumber").value);
    
    numberList.push(theNumber);

    document.getElementById("submittedSubmissions").innerHTML = numberList.toString();
  
    document.getElementById("numberSubmissions").innerHTML = numberList.length;

    sum = sum+theNumber;
    
    document.getElementById("sumSubmissions").innerHTML = sum;
    
    document.getElementById("meanSubmissions").innerHTML = sum/numberList.length;
    
    document.getElementById("medianSubmissions").innerHTML = math.median(numberList);
    
    document.getElementById("stdDevSubmissions").innerHTML = math.std(numberList);
 
}
  
  function onResetClick(evt) {
    document.getElementById("submittedSubmissions").innerHTML = "";
    document.getElementById("numberSubmissions").innerHTML = "";
    document.getElementById("sumSubmissions").innerHTML = "";
    document.getElementById("meanSubmissions").innerHTML = "";
    document.getElementById("medianSubmissions").innerHTML = "";
    document.getElementById("stdDevSubmissions").innerHTML = "";
    numberList = [];
    sum = 0;
  }


 


