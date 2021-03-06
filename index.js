Griddle.prototype.iterate = function(callback) {
    var griddle = this;

    for (var row = 0; row < griddle._rows; row++) {
        for (var column = 0; column < this._columns; column++) {
            callback(row, column);
        }
    }
};

function initialiseGrid(){
    var griddle = this;

    for (var row = 0; row < griddle._rows; row++) {
        if(!griddle._grid[row]) {
            griddle._grid[row] = [];
        }
        for (var column = 0; column < this._columns; column++) {
            griddle._grid[row][column] = null;
            griddle._grid[row] = griddle._grid[row].slice(0, griddle._columns);
        }
    }

    griddle._grid = griddle._grid.slice(0, griddle._rows);
}

function Griddle(rows, columns) {
    var griddle = this;

    griddle._rows = rows || 1;
    griddle._columns = columns || 1;

    griddle._grid = [];

    initialiseGrid.bind(this)();

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

    initialiseGrid.bind(this)();

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

    initialiseGrid.bind(this)();


    return this;
};

Griddle.prototype.grid = function(mesh) {
    if (!Array.isArray(mesh) && Array.isArray(mesh[0])) {
        throw 'must be an array of arrays';
    } else {
        this._grid = mesh;
        this._rows = mesh.length;
        this._columns = mesh[0].length;
    }
};

Griddle.prototype.row = function(rowNumber, data) {
    if(!arguments.length) {
        throw 'rowNumber required';
    }

    if(arguments.length === 1) {
        return this._grid[rowNumber];
    }

    if(!Array.isArray(data)) {
        throw 'data must be an array';
    }

    for (var column = 0; column < this._columns; column++) {
        this._grid[rowNumber][column] = data[column];
    }

    return this;
};

Griddle.prototype.column = function(columnNumber, data) {
    if(!arguments.length) {
        throw 'columnNumber required';
    }

    var row;

    if(arguments.length === 1) {
        var column = [];

        for (row = 0; row < this._rows; row++) {
            column.push(this._grid[row][columnNumber]);
        }

        return column;
    }

    if(!Array.isArray(data)) {
        throw 'data must be an array';
    }

    for (row = 0; row < this._rows; row++) {
        this._grid[row][columnNumber] = data[row];
    }
};
Griddle.prototype.cell = function(rowNumber, columnNumber, data) {
    if(arguments.length < 2) {
        throw 'Row and column numbers required';
    }

    if(arguments.length === 2) {
        return this._grid[rowNumber][columnNumber];
    }

    this._grid[rowNumber][columnNumber] = data;

    return this;
};

module.exports = Griddle;