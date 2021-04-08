
export class ColumnWinInspector {
    constructor(column) {
        this.column = column;
    }

    inspect() {
        for (let i = 0; i <= 2; i++) {
            if (this.column.getTokenAtCol(i) === this.column.getTokenAtCol(i + 1) && this.column.getTokenAtCol(i + 1) === this.column.getTokenAtCol(i + 2) && this.column.getTokenAtCol(i + 2) === this.column.getTokenAtCol(i + 3)) {
                return this.column.getTokenAtCol(i)
            }
        }
        return 0;
    }
}
