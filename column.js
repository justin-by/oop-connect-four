import {Game} from './game.js'

export class Column{
    constructor(rowArray = []){
        this.rowArray = rowArray;

    }

    add(currentPlayer){
        this.rowArray.shift(currentPlayer)
    }

    getTokenAtCol(rowIndex){
       let value = this.rowArray[rowIndex];

       if(value === 1) return 1;
       else if(value === 2) return 2;
       else {
           return null;
       }

    }
}
