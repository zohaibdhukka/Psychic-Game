var computerChoices=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


var wins = 0;
var loose = 0;
var guessLeft = 9;
var guessedLetters=[];

document.onkeyup = function psychicGame(event){

    var user = event.key;
    guessedLetters.push(user);

    var computerChoice= computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(guessedLetters);
    if (user === computerChoice) {
        wins++;
    }
    else if (guessLeft <= 0){
        loose ++;
        guessLeft = 9;
        guessedLetters = [];
        }
        else if (user !== computerChoice){
            guessLeft --;
    }
    


        document.getElementById("win").innerHTML = "Win: " + wins;
        document.getElementById("loose").innerHTML = "Loose: " + loose;
        document.getElementById("guessLeft").innerHTML = "Guess Left: " + guessLeft;
        document.getElementById("guess").innerHTML = "Your Guess so far: " + guessedLetters;
        
    };

