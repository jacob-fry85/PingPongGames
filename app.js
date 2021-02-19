for(let i = 1; i <= 10; i ++) {
    const select = document.querySelector('select');
    const option = document.createElement('option');
    option.text = i;
    select.add(option);
}

const maxPlay = document.querySelector('#maxPlay');
const player1score = document.querySelector('#player1Score');
const player2score = document.querySelector('#player2Score');

const btnPlayer1 = document.querySelector('#player1');
const btnPlayer2 = document.querySelector('#player2');
const btn_reset = document.querySelector('#reset');

let maxPlaytime = 0;

maxPlay.addEventListener('change', (e) => {
    maxPlaytime = e.target.value;       
})

btnPlayer1.addEventListener('click', (e) => {
    if(maxPlaytime == 0) {
        alert('Please select "Playing To!"');
    } else {
        addScore1();
    }
})

btnPlayer2.addEventListener('click', (e) => {
    if(maxPlaytime == 0) {
        alert('Please select "Playing To!"');
    } else {
        addScore2();
    }
})

btn_reset.addEventListener('click', (e) => {
    score1 = 0;
    score2 = 0;
    player1score.innerHTML = score1;
    player2score.innerHTML = score2;
    btnPlayer1.disabled = false;
    btnPlayer2.disabled = false;
    player1score.classList.value = '';
    player2score.classList.value = '';
    maxPlay.selectedIndex = '0';
    maxPlaytime = 0;
})

let score1 = 0;
let score2 = 0;

const addScore1 = () => {
    score1++;
    player1score.innerHTML = score1;   
    console.log(score1);
    console.log(maxPlaytime);
    if(score1 == maxPlaytime)  {
        player1score.classList.toggle('win');
        player2score.classList.toggle('loss');   
        disableButton();     
    }
}

const addScore2 = () => {
    score2++;
    player2score.innerHTML = score2;
    if(score2 == maxPlaytime)  {
        player1score.classList.toggle('loss');
        player2score.classList.toggle('win');    
        disableButton();    
    }
}

const disableButton = () => {
    btnPlayer1.disabled = true;
    btnPlayer2.disabled = true;
}