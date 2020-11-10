let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function capitalize(word){
    return word[0].toUpperCase() + word.slice(1);
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "".fontsize(3).sup();
    const smallComprWord = "".fontsize(3).sup();
    result_p.innerHTML = `${capitalize(userChoice)}${smallUserWord} beats ${capitalize(computerChoice)}${smallComprWord}. You Win!`
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow'), 300);
}



function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "".fontsize(3).sup();
    const smallComprWord = "".fontsize(3).sup();
    result_p.innerHTML = `${capitalize(userChoice)}${smallUserWord} loses ${capitalize(computerChoice)}${smallComprWord}. You Lost`
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow')}, 300);
}

function draw(userChoice, computerChoice){
    result_p.innerHTML = `DRAW`;
    document.getElementById(userChoice).classList.add('blue-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('blue-glow')}, 300);
}


function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case"scissorspaper":
            win(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, computerChoice); 
            break;
    }
}

function getComputerChoice(){
    const choices = ['rock','paper','scissors'];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

rock_div.addEventListener('click', function(){
    game("rock");
})

paper_div.addEventListener('click', function(){
    game("paper");
})

scissors_div.addEventListener('click', function(){
    game("scissors");
})