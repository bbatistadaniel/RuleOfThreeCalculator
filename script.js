// Display a link in the console
console.log("https://github.com/bbatistadaniel");

// Create an audio object for playing click sound
var audio = new Audio("assets/audios/click.mp3");

// Function to copy text from an element to clipboard
function copy(){
    // Check if the element with id "i4" does not contain "X"
    if(document.getElementById("i4").innerText != "X"){
        // Copy the text of the element with id "i4" to clipboard
        navigator.clipboard.writeText(document.getElementById("i4").innerText);
    }
    // Play the click sound
    audio.play();
}

// Function to calculate and display a result
function calculate(){
    // Get values from input fields and convert them to floating point numbers
    var i1 = parseFloat(document.getElementById("i1").value);
    var i2 = parseFloat(document.getElementById("i2").value);
    var i3 = parseFloat(document.getElementById("i3").value);
    
    // Calculate the result and limit it to 9 decimal places
    var result = parseFloat(((i2 * i3) / i1).toFixed(9));
    
    // Check if the result is NaN (Not a Number)
    if(isNaN(result)){
        // If result is NaN, display "X" in the element with id "i4"
        document.getElementById("i4").innerText = "X";
    } else {
        // If result is a valid number, display it in the element with id "i4"
        document.getElementById("i4").innerText = result;
    }
    
    // Play the click sound
    audio.play();
}
