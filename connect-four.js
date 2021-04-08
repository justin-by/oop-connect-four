import { Game } from './game.js'

let game = undefined;
let gameBoard = document.getElementById('board-holder')
let gameName = document.getElementById('game-name')
let clickRow = document.getElementById('click-targets')

function updateUI() {
    if (!game) {
        gameBoard.classList.add('is-invisible')
    } else {
        gameBoard.classList.remove('is-invisible')
        gameName.innerHTML = game.getName()

        if (game.currentPlayer === 1) {
            clickRow.classList.remove('red')
            clickRow.classList.add('black')
        } else {
            clickRow.classList.add('red')
            clickRow.classList.remove('black')
        }

        for (let i = 0; i <= 5; i += 1) {
            for (let j = 0; j <= 6; j += 1) {
                let selectedSquare = document.getElementById(`square-${i}-${j}`)
                let getTokenResult = game.getTokenAt(i, j)

                selectedSquare.innerHTML = '';
                if (getTokenResult === 1) {
                    let blackDiv = document.createElement('div')
                    blackDiv.classList.add('token', 'black');
                    selectedSquare.append(blackDiv)
                }
                else if (getTokenResult === 2) {
                    let redDiv = document.createElement('div')
                    redDiv.classList.add('token', 'red');
                    selectedSquare.append(redDiv)
                }
            }
        }

        for (let i = 0; i <= 6; i += 1) {
            let selectedColumn = document.getElementById(`column-${i}`)
            if (game.isColumnFull(i)) {
                selectedColumn.classList.add('full')
            } else {
                selectedColumn.classList.remove('full')
            }

        }
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
        updateUI();
    })

    clickRow.addEventListener('click', event => {
        let targetID = event.target.id
        if (!targetID.startsWith('column-')) return
        let targetColIndex = Number.parseInt(targetID[targetID.length - 1])
        game.playInColumn(targetColIndex);
        // Possible change - inside/outside loop
        updateUI();
    })




})
