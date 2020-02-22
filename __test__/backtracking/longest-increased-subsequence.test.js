const lis = require("../../lib/backtracking/longest-increased-subsequence");


test("LIS normal case", () => {
    expect(lis.findLongestIncreasedSub([3, 1, 4, 5])).toStrictEqual([3, 4, 5]);

    expect(lis.findLongestIncreasedSub([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3, 2, 3, 8, 4, 6, 2, 6]))
        .toStrictEqual([3, 4, 5, 6, 8, 9,]);

});
