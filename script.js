const game = ['pierre', 'feuille', 'ciseaux'];
let monscore = 0;
let ordiscore= 0;
let tour = 0;

const laDiv = document.querySelector('#div');
const para = document.createElement('p');
const result = document.createElement('p');
para.textContent="Faite votre choix";
laDiv.appendChild(para);
laDiv.appendChild(result);
const resetBtn = document.createElement('button');
resetBtn.textContent="Rejouer";
resetBtn.setAttribute('class','reset')

function getComputerChoice() {
    return game[Math.floor(Math.random() * game.length)];
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerSelection = button.id;
        jeu(playerSelection);
    });
});


function playRound(playerSelection) {
    const computerChoice = getComputerChoice();
    console.log('Choix de l\'ordinateur : ' + computerChoice);
    console.log('Mon choix : ' + playerSelection);
    console.log('tour : ' + tour)
    switch (true) {
        case computerChoice === playerSelection:
            para.textContent="Match null";
            break;
        case computerChoice === 'pierre' && playerSelection === 'feuille':
            para.textContent='La feuille enveloppe la pierre, Gagné !!';
            monscore++
            break;
        case computerChoice === 'feuille' && playerSelection === 'pierre':
            para.textContent='La pierre est enveloppé par la feuille, Perdu !!';
            ordiscore++
            break;
        case computerChoice === 'ciseaux' && playerSelection === 'pierre':
            para.textContent='La pierre écrase les ciseaux, Gagné !!';
            monscore++
            break;
        case computerChoice === 'pierre' && playerSelection === 'ciseaux':
            para.textContent='Les ciseaux sont écrasés par la pierre, Perdu !!';
            ordiscore++
            break;
        case computerChoice === 'ciseaux' && playerSelection === 'feuille':
            para.textContent='La feuille est coupé par les ciseaux, Perdu !!';
            ordiscore++
            break;
        case computerChoice === 'feuille' && playerSelection === 'ciseaux':
            para.textContent='Les ciseaux coupent la feuille, Gagné !!';
            monscore++
            break;

        default: para.textContent='Rien ne se passe . . . ';
            break;
    }
}


function jeu(playerSelection) {

    if (tour <= 5) { 
        tour++;
        playRound(playerSelection);
    } 
    if (tour == 5) {
        buttons.forEach((button) => {
            button.disabled = true; 
        });

        (ordiscore > monscore) ?
        result.textContent='L\'ordinateur a gagné ! ' + ordiscore + '-' + monscore
        : (monscore > ordiscore) ?
         result.textContent='Vous avez gagné ! ' + monscore + '-' + ordiscore
            : result.textContent='Match nul ! ' + monscore + '-' + ordiscore;
        
        laDiv.appendChild(resetBtn);
        resetBtn.addEventListener('click',() => location.reload());
    }
}




