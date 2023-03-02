function jeu() {
    monscore = 0;
    ordiscore = 0;
    for (let i = 0; i < 5; i++) {
        const buttons = document.querySelectorAll('button');
        buttons.forEach((button) => {
            button.disabled = false;
        });
        const laDiv = document.querySelector('#div');
        laDiv.innerHTML = '';
        for (let j = 0; j < 2; j++) {
            playRound();
            console.log('Player score : ' + monscore)
            console.log('Computer score : ' + ordiscore)
        }
        if (i < 4) {
            const message = document.createElement('p');
            message.textContent = 'Cliquez sur un bouton pour commencer le tour suivant';
            laDiv.appendChild(message);
            buttons.forEach((button) => {
                button.disabled = true;
            });
        }
    }
    (ordiscore > monscore) ?
        alert('L\'ordinateur à gagné ! ' + ordiscore + '-' + monscore)
        : (monscore > ordiscore) ?
            alert('Vous avez gagné ! ' + monscore + '-' + ordiscore)
            : alert('Match nul ! ' + monscore + '-' + ordiscore);
}

function playRound() {
    const playerSelection = prompt('Choisissez pierre, feuille ou ciseaux :').toLowerCase();
    const computerChoice = getComputerChoice();

    console.log('Choix de l\'ordinateur : ' + computerChoice);
    console.log('Mon choix : ' + playerSelection);

    switch (true) {
        case computerChoice === playerSelection:
            alert("Match null");
            break;
        case computerChoice === 'pierre' && playerSelection === 'feuille':
            alert('La feuille enveloppe la pierre, Gagné !!');
            monscore++;
            break;
        case computerChoice === 'feuille' && playerSelection === 'pierre':
            alert('La pierre est enveloppé par la feuille, Perdu !!');
            ordiscore++;
            break;
        case computerChoice === 'ciseaux' && playerSelection === 'pierre':
            alert('La pierre écrase les ciseaux, Gagné !!');
            monscore++;
            break;
        case computerChoice === 'pierre' && playerSelection === 'ciseaux':
            alert('Les ciseaux sont écrasés par la pierre, Perdu !!');
            ordiscore++;
            break;
        case computerChoice === 'ciseaux' && playerSelection === 'feuille':
            alert('La feuille est coupé par les ciseaux, Perdu !!');
            ordiscore++;
            break;
        case computerChoice === 'feuille' && playerSelection === 'ciseaux':
            alert('Les ciseaux coupent la feuille, Gagné !!');
            monscore++;
            break;
        default:
            alert('Choix invalide, vous devez choisir pierre, feuille ou ciseaux.');
            playRound();
            break;
    }
}

jeu();