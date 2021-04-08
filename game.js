import { Column } from './column.js'
import { ColumnWinInspector } from './column-win-inspector.js'
import { RowWinInspector } from './row-win-inspector.js';


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
        this.checkForRowWin();
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
            if (result === 1 || result === 2) {
                this.winnerNumber = result;
                return;
            }
        })
    }
    checkForRowWin() {
        if (this.winnerNumber !== 0) return;


        let slice1 = this.columns.slice(0, 4);
        let result1 = new RowWinInspector(slice1).inspect();
        if (result1 > 0) {
            this.winnerNumber = result1;
            return;
        }

        let slice2 = this.columns.slice(1, 5);
        let result2 = new RowWinInspector(slice2).inspect();
        if (result2 > 0) {
            this.winnerNumber = result2;
            return;
        }

        let slice3 = this.columns.slice(2, 6);
        let result3 = new RowWinInspector(slice3).inspect();
        if (result3 > 0) {
            this.winnerNumber = result3;
            return;
        }

        let slice4 = this.columns.slice(3, 7);
        let result4 = new RowWinInspector(slice4).inspect();
        if (result4 > 0) {
            this.winnerNumber = result4;
            return;
        }

    }
}
