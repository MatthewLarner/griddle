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

    var grid = new Griddle(5,5);

    t.equal(grid.rows(2)._grid.length, 2);
    t.equal(grid.columns(3)._grid[0].length, 3);
});

test('get correct row', function(t) {
    t.plan(1);

    var grid = new Griddle(2,2),
        data = [[2,3],[4,5]],
        expectedResult = [4,5];

    grid._grid = data;
    t.deepEqual(grid.row(1), expectedResult);
});

test('set row', function(t) {
    t.plan(2);

    var grid = new Griddle(2,2),
        row = [1,2];

    t.deepEqual(grid.row(1, row).row(1), row);
    t.notDeepEqual(grid.row(0), row);
});

test('get correct column', function(t) {
    t.plan(1);

    var grid = new Griddle(2,2),
        data = [[2,3],[4,5]],
        expectedResult = [3,5];

    grid._grid = data;
    t.deepEqual(grid.getColumn(1), expectedResult);
});