let userScore = 0;
let Ai = 0;
let userScore_span = document.getElementById("user-score");
let aiScore_span = document.getElementById("ai-score");
let result_div = document.querySelector(".result");
let result_p = document.querySelector(".result p")
let paper = document.getElementById("paper");
let rock = document.getElementById("rock");
let scissors = document.getElementById("scissors");
let status_p = document.querySelector('.status p');


function getComputerChoice() {
    const choices = ["🪨", "🤚", "✂️"];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}



function draw(userChoice, computerChoice) {
    userScore_span.innerText = userScore;
    aiScore_span.innerText = Ai;
    status_p.innerHTML = `Tie <i style="font-size:32px;" class="fa-regular fa-face-meh"></i> `
    result_div.innerHTML = `<p style="border:2px solid gray; padding:10px 0px">You Picked ${computerChoice} <i style="padding: 0px 20px; color:gray;" class="fa-solid fa-bolt"></i> Ai Picked ${userChoice} </p>`
}

function lose(userChoice, computerChoice) {
    Ai++
    userScore_span.innerText = userScore;
    aiScore_span.innerText = Ai;
    status_p.innerHTML = `Lost <i style="font-size:32px;" class="fa-regular fa-face-frown-open"></i>`
    result_div.innerHTML = `<p style="border:2px solid red; padding:10px 0px">You Picked ${userChoice} <i style="padding: 0px 20px; color:red;" class="fa-solid fa-bolt"></i> Ai Picked ${computerChoice} </p>`


}
function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerText = userScore;
    aiScore_span.innerText = Ai;
    status_p.innerHTML = `Winner <i style="font-size:32px;" class="fa-regular fa-face-laugh"></i>`
    result_div.innerHTML = `<p style="border:2px solid green; padding:10px 0px">You Picked ${userChoice} <i style="padding: 0px 20px; color:green;" class="fa-solid fa-bolt"></i> Ai Picked ${computerChoice} </p>`
}




function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "🪨✂️":
        case "🤚🪨":
        case "✂️🤚":
            win(userChoice, computerChoice);
            break;
        case "🪨🤚":
        case "🤚✂️":
        case "✂️🪨":
            lose(userChoice, computerChoice);
            break;
        case "🪨🪨":
        case "✂️✂️":
        case "🤚🤚":
            draw(userChoice, computerChoice);
            break;
    }
}


function main() {
    paper.addEventListener('click', function () {
        game("🤚");
    })
    rock.addEventListener('click', function () {
        game("🪨");
    })
    scissors.addEventListener('click', function () {
        game("✂️");
    })
}

main();

