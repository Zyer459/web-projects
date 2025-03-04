const PromptSync = require("prompt-sync");
const prompt = PromptSync();
function UserChoice () {
    User = prompt ("rock, paper or scissor? ");
    User = User.toLowerCase ();

    if (User == "rock") {
        User = "rock";
    }
    else if (User == "paper") {
        User = "paper";
    }
    else if (User == "scissor") {
        User = "scissor";
    }
    else {
        User = "Error"
    }
    return User
}

function ComputerChoice (min=0, max=2) {
    let PC = "";
    switch (Math.floor (Math.random() * (max - min + 1)) + min) {
        case 0:
            PC = "rock";
            return PC
        case 1:
            PC ="paper";
            return PC
        case 2:
            PC ="scissors"
            return PC
    }
}

function Game (Result, score) {
    /*User = UserChoice();
    PC = ComputerChoice();*/

    function GameRound (result) {
        //for (let i = 0; i < 5; i++) {
        function Score (Uscore, Comscore, User, PC) {
            Uscore = 0;
            Comscore = 0;
            //function Score (Uscore, Comscore, User, PC) {
            for (let i = 0; i < 5; i++) {
                
                User = UserChoice();
                PC = ComputerChoice();

                if (User == "rock" && PC == "paper") {
                    Uscore += 0;
                    Comscore += 1;
                    //console.log (Uscore, Comscore);
                }
                else if (User = "rock" && PC == "scissor") {
                    Uscore += 1;
                    Comscore += 0;
                    //console.log (Uscore, Comscore);
                }
                else if (User = "paper" && PC == "scissor") {
                    Uscore += 0;
                    Comscore += 1;
                    //console.log (Uscore, Comscore);
                }
                else if (User = "paper" && PC == "rock") {
                    Uscore += 1;
                    Comscore += 0;
                    //console.log (Uscore, Comscore);
                }
                else if (User = "scissor" && PC == "rock") {
                    Uscore += 0;
                    Comscore += 1;
                    //console.log (Uscore, Comscore);
                }
                else if (User = "scissor" && PC == "paper") {
                    Uscore += 1;
                    Comscore += 0;
                    //console.log (Uscore, Comscore);
                }
                else {
                    Uscore += 0;
                    Comscore += 0;
                    //console.log (Uscore, Comscore);
                }
                //return [Uscore, Comscore]
                console.log (Uscore, Comscore);
            }

                /*if (Uscore > Comscore) {
                    result = "You win :D";
                }
                else if (Uscore < Comscore) {
                    result = "You lose :("
                }
                else {
                    result = "Draw :o"
                }
            }*/
            return [Uscore, Comscore]
        }
        //const [User, PC] = Score();
        score = Score();
        result  = "";

        if (score[0] > score[1]) {
            //return "You win :D"
            result = "You win :D";
        }
        else if (score[0] < score[1]) {
            //return "You lose :("
            result = "You lose :(";
        }
        else {
            //return "Draw :o"
            result = "Draw :o";
        }
        return result;
    }
return Result = GameRound();
}
console.log (Game());