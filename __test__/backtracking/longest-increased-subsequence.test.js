const lis = require("../../lib/backtracking/longest-increased-subsequence");


test("LIS normal case", () => {

    expect(lis.longestIncreasedSubLength([3, 1, 4, 5])).toBe(3);
    expect(lis.longestIncreasedSubLengthAlternative([3, 1, 4, 5])).toBe(3);

    expect(lis.longestIncreasedSubLength([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3, 2, 3, 8, 4, 6, 2, 6]))
        .toBe(6);
    expect(lis.longestIncreasedSubLengthAlternative([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3, 2, 3, 8, 4, 6, 2, 6]))
        .toBe(6);


    expect(lis.longestIncreasedSubLength([5, 1, 2, 4])).toBe(3);
    expect(lis.longestIncreasedSubLengthAlternative([5, 1, 2, 4])).toBe(3);

});

test("LIS with single element should return single element", () => {
    expect(lis.longestIncreasedSubLength([3])).toBe(1);
    expect(lis.longestIncreasedSubLengthAlternative([3])).toBe(1);
});

test("LIS for empty array should return empty sequence", () => {
    expect(lis.longestIncreasedSubLength([])).toBe(0);
    expect(lis.longestIncreasedSubLengthAlternative([])).toBe(0);
});
