const game = ['pierre', 'feuille', 'ciseaux'];
let monscore = 0;
let ordiscore= 0;
let tour = 0;

const laDiv = document.querySelector('#resultat');
const scorej = document.querySelector('.scorej');
const scoreo = document.querySelector('.scoreo');
scorej.textContent=monscore;
scoreo.textContent=ordiscore;
const para = document.createElement('p');
const result = document.createElement('p');
const lescore = document.createElement('p');
para.textContent="Faite votre choix";

laDiv.appendChild(para);


const resetBtn = document.createElement('button');
const spanBtn = document.createElement('span');
spanBtn.textContent="Rejouer"
resetBtn.appendChild(spanBtn);

resetBtn.setAttribute('class','reset')
resetBtn.setAttribute('class','btn-shine')



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
            para.textContent='Round ' + tour + ' : Egalité '+computerChoice+' - '+playerSelection;
            break;
        case computerChoice === 'pierre' && playerSelection === 'feuille':
            para.textContent='Round ' + tour + ' : La feuille enveloppe la pierre, Gagné !!';
            monscore++
            break;
        case computerChoice === 'feuille' && playerSelection === 'pierre':
            para.textContent='Round ' + tour + ' : La pierre est enveloppé par la feuille, Perdu !!';
            ordiscore++
            break;
        case computerChoice === 'ciseaux' && playerSelection === 'pierre':
            para.textContent='Round ' + tour + ' : La pierre écrase les ciseaux, Gagné !!';
            monscore++
            break;
        case computerChoice === 'pierre' && playerSelection === 'ciseaux':
            para.textContent='Round ' + tour + ' : Les ciseaux sont écrasés par la pierre, Perdu !!';
            ordiscore++
            break;
        case computerChoice === 'ciseaux' && playerSelection === 'feuille':
            para.textContent='Round ' + tour + ' : La feuille est coupé par les ciseaux, Perdu !!';
            ordiscore++
            break;
        case computerChoice === 'feuille' && playerSelection === 'ciseaux':
            para.textContent='Round ' + tour + ' : Les ciseaux coupent la feuille, Gagné !!';
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
        scorej.textContent=monscore;
        scoreo.textContent=ordiscore;
    } 
    if (tour == 5) {
        buttons.forEach((button) => {
            button.disabled = true; 
        });

        (ordiscore > monscore) ?
        result.textContent='L\'ordinateur a gagné ! ' + ordiscore + '-' + monscore
        : (monscore > ordiscore) ?
         result.textContent='Le joueur gagne ! ' + monscore + '-' + ordiscore
            : result.textContent='Match nul ! ' + monscore + '-' + ordiscore;
        scorej.setAttribute('class', 'fin')
        scoreo.setAttribute('class', 'fin')
        para.setAttribute('class', 'fin')
        laDiv.appendChild(result)
        laDiv.appendChild(resetBtn)
        
        resetBtn.addEventListener('click',() => location.reload());
    }
}




