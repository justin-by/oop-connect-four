import { Game } from './game.js'

export class Column {
    constructor() {
        this.tokens = [];

    }

    add(currentPlayer) {
        if (!this.isFull()) {
        this.tokens.push(currentPlayer)
        }
    }

    getTokenAtCol(rowIndex) {
        return this.tokens[5-rowIndex]

        // let value = this.tokens[rowIndex];

        // if (value === 1) return 1;
        // else if (value === 2) return 2;
        // else {
        //     return null;
        // }

    }

    isFull() {
        return (this.tokens.length === 6)
    }
}
