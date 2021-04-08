import { Column } from './column.js'
import { ColumnWinInspector } from './column-win-inspector.js'


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

        if (this.winnerNumber === 1) {
            return `${this.playerOneName} wins!`
        }

        if (this.winnerNumber === 2) {
            return `${this.playerTwoName} wins!`
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
        this.checkForColumnWin();
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
        if (this.winnerNumber === 1 || this.winnerNumber === 2) {
            return true;
        }

        return this.columns[index].isFull()
    }

    checkForColumnWin() {
        if (this.winnerNumber !== 0) {
            return;
        }
        let result;
        this.columns.forEach((currentColumn) => {
            result = new ColumnWinInspector(currentColumn).inspect();
            console.log(result);
            if (result === 1 || result === 2) {
                this.winnerNumber = result;
                return;
            }
        })
    }
}
