const game = ['pierre', 'feuille', 'ciseaux'];


function getComputerChoice() {
    return game[Math.floor(Math.random() * game.length)];
}

function playRound() {
const computerChoice = getComputerChoice();
const playerSelection = prompt('Your turn').toLowerCase();
console.log('Choix de l\'ordinateur : ' + computerChoice);
console.log('Mon choix : ' + playerSelection);
    switch (true) {
        case computerChoice === playerSelection:
            alert("Match null");
            break;
        case computerChoice === 'pierre' && playerSelection === 'feuille':
            alert('La feuille enveloppe la pierre, Gagné !!');
            break;
        case computerChoice === 'feuille' && playerSelection === 'pierre':
            alert('La pierre est enveloppé par la feuille, Perdu !!');
            break;
        case computerChoice === 'ciseaux' && playerSelection === 'pierre':
            alert('La pierre écrase les ciseaux, Gagné !!');
            break;
        case computerChoice === 'pierre' && playerSelection === 'ciseaux':
            alert('Les ciseaux sont écrasés par la pierre, Perdu !!');
            break;
        case computerChoice === 'ciseaux' && playerSelection === 'feuille':
            alert('La feuille est coupé par les ciseaux, Perdu !!');
            break;
        case computerChoice === 'feuille' && playerSelection === 'ciseaux':
            alert('Les ciseaux coupent la feuille, Gagné !!');
            break;

        default: alert('Rien ne se passe . . . ');
            break;
    }
}



function jeu()
{
    for (let i = 0; i < 5; i++) {
       playRound();
     }
    }
jeu();