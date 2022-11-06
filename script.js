const game = ['pierre', 'feuille', 'ciseaux'];
let monscore;
let ordiscore;

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
            monscore++
            break;
        case computerChoice === 'feuille' && playerSelection === 'pierre':
            alert('La pierre est enveloppé par la feuille, Perdu !!');
            ordiscore++
            break;
        case computerChoice === 'ciseaux' && playerSelection === 'pierre':
            alert('La pierre écrase les ciseaux, Gagné !!');
            monscore++
            break;
        case computerChoice === 'pierre' && playerSelection === 'ciseaux':
            alert('Les ciseaux sont écrasés par la pierre, Perdu !!');
            ordiscore++
            break;
        case computerChoice === 'ciseaux' && playerSelection === 'feuille':
            alert('La feuille est coupé par les ciseaux, Perdu !!');
            ordiscore++
            break;
        case computerChoice === 'feuille' && playerSelection === 'ciseaux':
            alert('Les ciseaux coupent la feuille, Gagné !!');
            monscore++
            break;

        default: alert('Rien ne se passe . . . ');
            break;
    }
}


function jeu() {
    //ajouter le comptage de score ici 
    monscore = 0;
    ordiscore = 0;
    for (let i = 0; i < 5; i++) {
        playRound();
        console.log('Player score : ' + monscore)
        console.log('Computer score : ' + ordiscore)
    }
    if (ordiscore > monscore) {
        alert('L\'ordinateur à gagné ! ' + ordiscore+'-'+monscore)
    } else if (monscore > ordiscore) {
        alert('Vous avez gagné ! ' + monscore +'-' +ordiscore)
    } else  alert('Match nul ! ' +monscore+'-'+ordiscore)

}
jeu();