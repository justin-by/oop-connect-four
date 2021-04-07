import { Game } from './game.js'

let game = undefined;
let gameBoard = document.getElementById('board-holder')
let gameName = document.getElementById('game-name')

function updateUI() {
    if (!game) {
        gameBoard.classList.add('is-invisible')
    } else {
        gameBoard.classList.remove('is-invisible')
        gameName.innerHTML = game.getName()
    }
}

window.addEventListener('DOMContentLoaded', event => {
    let p1Input = document.getElementById('player-1-name')
    let p2Input = document.getElementById('player-2-name')
    let newGameBtn = document.getElementById('new-game')
    let inputField = document.getElementById('form-holder')

    inputField.addEventListener('keyup', event => {
        if (p1Input.value && p2Input.value) {
            newGameBtn.disabled = false;
        } else {
            newGameBtn.disabled = true;
        }
    })

    newGameBtn.addEventListener('click', event => {
        game = new Game(p1Input.value, p2Input.value)
        p1Input.value = '';
        p2Input.value = '';
        newGameBtn.disabled = true;
        console.log(newGameBtn);
        updateUI();
    })





})
