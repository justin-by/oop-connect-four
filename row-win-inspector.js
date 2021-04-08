

export class RowWinInspector {
    constructor(columns) {
        this.columns = columns
    }

    inspect() {
        for (let i = 0; i <= 5; i++) {
            for (let j = 0; j <= 2; i++){
                console.log(this.columns);
                if ((this.columns.getTokenAt(i, j)) === (this.columns.getTokenAt(i, (j + 1))) && (this.columns.getTokenAt(i, (j + 1))) === (this.columns.getTokenAt(i, (j + 2))) && (this.columns.getTokenAt(i, (j + 2))) === (this.columns.getTokenAt(i, (j + 3)))); {
                    return this.columns.getTokenAt(i, j);
                }
            }

        }
        return 0;

    }
}
