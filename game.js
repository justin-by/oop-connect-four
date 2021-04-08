import { Column } from './column.js'


export class Game {
    constructor(playerOne, playerTwo, currentPlayer = 1, winnerNumber = 0, columns = [
        new Column(),
        new Column(),
        new Column(),
        new Column(),
        new Column(),
        new Column(),
        new Column(),
    ]) {
        this.playerOneName = playerOne;
        this.playerTwoName = playerTwo;
        this.currentPlayer = currentPlayer;
        this.winnerNumber = winnerNumber;
        this.columns = columns;
    }

    getName() {
        if (this.winnerNumber === 3) {
            return `${this.playerOneName} ties with ${this.playerTwoName}`
        }
        return `${this.playerOneName} vs. ${this.playerTwoName}`
    }

    playInColumn(index) {
        this.columns[index].add(this.currentPlayer)
        if (this.currentPlayer === 1) {

            this.currentPlayer = 2


        } else {

            this.currentPlayer = 1


        }
        this.checkForTie();
    }

    checkForTie() {
        for (let i = 0; i <= 6; i++) {
            if (!this.isColumnFull(i)) {
                return;

            }
        }
     this.winnerNumber = 3;

    }

    getTokenAt(rowIndex, ColIndex) {
        let targetColumn = this.columns[ColIndex]

        return targetColumn.getTokenAtCol(rowIndex)

    }

    isColumnFull(index) {
        return this.columns[index].isFull()
    }
}
