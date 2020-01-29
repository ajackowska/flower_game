let windowWith = window.innerWidth;
let windowHeight = window.innerHeight;
let score = document.querySelectorAll('.score-value');
let num = 0; /* number of catched flower */
let sum = 3;
let gameOver = false;
let endGameWindow = document.querySelector('.end-game-window')

function createFlower() {
    let div = document.createElement('div');
    div.className = 'flower';

    rand = Math.floor(Math.random() * (windowWith - 100)) /* width of the screen - width of flower */
    div.style.left = rand + "px";

    document.body.appendChild(div);
    fallingFlower(div);
}

function fallingFlower(element) {
    let position = -80; /* - wysokość flower */
    let interval = setInterval(deadEnd, 10)
// height of flower = 80
// check if position of flower is >= height of screen
    function deadEnd() {         
        if(position >= (windowHeight )) { 
            console.log(position);
            clearInterval(interval);
            // deleteFlower(element);
            
            gameOver = true;
        } else {
            position=position+2
            element.style.top = position + "px"; 
        }
    }
}

function deleteFlower(element) {
    element.remove();
    // each time user click on flower: score +1
    num++;
    changeScore();
      
}


function changeScore() {
    for (let i = 0; i < score.length; i++) {
        score[i].textContent = num;
    }
}

function startGame() {
    let loop = setInterval(function() {
        if (!gameOver && num !== sum) {
            createFlower();
        } 
        else if (num !== sum) {
            clearInterval(loop);
            document.querySelector('.end-game-window').style.display = 'flex' 
            document.querySelector('.end-game-win').style.display = "none"
            document.querySelector('.end-game-lose').style.display = 'block'
            

        } 
        else if(num === sum) {
            clearInterval(loop);
            document.querySelector('.end-game-window').style.display = 'flex';
            document.querySelector('.end-game-win').style.display = "block"
            document.querySelector('.end-game-lose').style.display = 'none' 
        }
    }, 800);
}


// event - object that keeps track of actions made by a user
document.addEventListener('click', function(event){
    if (event.target.classList.contains('flower')) {
        deleteFlower(event.target)
    }
    
})

// nie działa ;(
// document.querySelector('.play-again').addEventListener('click', function() {
//     document.querySelector('.end-game-window').style.display = 'none';
//     document.querySelector('.end-game-win').style.display = "none"
//     document.querySelector('.end-game-lose').style.display = 'none' 
    
//     let removeFlower = document.querySelectorAll('.flower');
//     for (let i = 0; i < removeFlower.length; i++) {
//         removeFlower[i].remove();
//     }
//     gameOver='false';
//     num = 0;
//     changeScore();


//     startGame();

// })

document.querySelector('.exit-game').addEventListener('click', function() {
    document.querySelector('.end-game-window').style.display = 'none';
        

})

startGame();
