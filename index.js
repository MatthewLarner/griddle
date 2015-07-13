Griddle.prototype.iterate = function(callback) {
    var griddle = this;

    for (var row = 0; row < griddle._rows; row++) {
        for (var column = 0; column < this._columns; column++) {
            callback(row, column);
        }
    }
};

function fillGrid(){
    var griddle = this;

    for (var row = 0; row < griddle._rows; row++) {
        if(!griddle._grid[row]) {
            griddle._grid[row] = [];
        }
    }

    griddle.iterate(function(row, column) {
        griddle._grid[row][column] = null;
    });
}

function Griddle(rows, columns) {
    var griddle = this;

    griddle._rows = rows || 1;
    griddle._columns = columns || 1;

    griddle._grid = [];

    fillGrid.bind(this)();

    griddle.iterate(function(row, column) {
        griddle._grid[row][column] = null;
    });
}

Griddle.prototype.rows = function(rows) {
    if(rows && typeof rows !== 'number') {
        throw ('rows must be of type number');
    }

    if(!rows) {
        return this._rows;
    }

    this._rows = rows;

    fillGrid.bind(this)();

    return this;
};

Griddle.prototype.columns = function(columns) {
    if(columns && typeof columns !== 'number') {
        throw ('columns must be of type number');
    }

    if(!columns) {
        return this._columns;
    }

    this._columns = columns;

    fillGrid.bind(this)();


    return this;
};

module.exports = Griddle;