var test = require('tape'),
    Griddle = require('../');

test('correct number of rows and columns on init', function(t) {
    t.plan(2);

    var grid = new Griddle(2,3);
    t.equal(grid._grid.length, 2);
    t.equal(grid._grid[0].length, 3);
});

test('correct number of rows and columns on set', function(t) {
    t.plan(2);

    var grid = new Griddle();
    t.equal(grid.rows(2)._grid.length, 2);
    t.equal(grid.columns(3)._grid[0].length, 3);
});