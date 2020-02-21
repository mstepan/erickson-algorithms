const queens = require("../../lib/backtracking/n-queens");

test("check placement for 4x4 board", () => {
    expect(queens.findAllQueensPlacement(4)).toStrictEqual([[1, 3, 0, 2], [2, 0, 3, 1]]);
});

test("check placement for 8x8 board", () => {
    expect(queens.findAllQueensPlacement(8).length).toBe(92);
});
