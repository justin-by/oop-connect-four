import { Column } from './column.js'


export class Game {
    constructor(playerOne, playerTwo, currentPlayer = 1, columns = [
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
        this.columns = columns;
    }

    getName() {
        return `${this.playerOneName} vs. ${this.playerTwoName}`
    }

    playInColumn(index) {
        this.columns[index].add(this.currentPlayer)
        if (this.currentPlayer === 1) {

            this.currentPlayer = 2

        } else {

            this.currentPlayer = 1

        }

    }

    getTokenAt(rowIndex, ColIndex) {
        let targetColumn = this.columns[ColIndex]

        return targetColumn.getTokenAtCol(rowIndex)

    }

    isColumnFull(index) {
        return this.columns[index].isFull()
    }
}
