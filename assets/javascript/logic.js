var wins = 0
var losses = 0
var guesses = 8
var lettersGuessed = []

var letters = "abcdefghijklmnopqrstuvwxyz"
letters = letters.split("")
console.log(letters);

var compGuess = letters[Math.floor(Math.random() * letters.length)]

//We need an event listener for key press
function reset() {
    compGuess = letters[Math.floor(Math.random() * letters.length)]
    guesses = 8
    lettersGuessed = []
    document.getElementById("Wins").innerHTML = wins
    document.getElementById("Losses").innerHTML = losses
    document.getElementById("Guesses").innerHTML = guesses
    document.getElementById("Lettersguessed").innerHTML = lettersGuessed
}
document.addEventListener("keypress", function(event){
    console.log(event.key);
    var userGuess = event.key;
    if ((letters.includes(userGuess))&&(!lettersGuessed.includes(userGuess))) {
    lettersGuessed.push(userGuess);
    

    if (userGuess === compGuess) {
        alert("You win. Letter was " + userGuess)
        wins = wins + 1
        reset()
        
    } else {
        guesses = guesses - 1

        if (guesses <= 0) {
            alert("You lose. Letter was " + compGuess)
            losses = losses + 1
            reset()
        }
    }

    document.getElementById("Guesses").innerHTML = guesses
    document.getElementById("Lettersguessed").innerHTML = lettersGuessed}
})

reset()



//