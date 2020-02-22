const subsets = require("../../lib/backtracking/subsets-with-sum");

test("correct subset sum", () => {
    expect(subsets.findAllSubsetsWithSum([8, 6, 7, 5, 3, 10, 9], 15))
        .toStrictEqual([[8, 7], [6, 9], [7, 5, 3], [5, 10]]);
});

test("correct subset sum for not found value", () => {
    expect(subsets.findAllSubsetsWithSum([8, 6, 2, 4, 6, 10, 12], 15)).toStrictEqual([]);
});

test("correct subset sum for single value array", () => {
    expect(subsets.findAllSubsetsWithSum([4], 4)).toStrictEqual([[4]]);

});

test("correct subset sum with 0 target value", () => {
    expect(subsets.findAllSubsetsWithSum([8, 6, 7, 5, 3, 10, 9], 0)).toStrictEqual([[]]);

});

test("correct subset for empty base array and 0 target", () => {
    expect(subsets.findAllSubsetsWithSum([], 0)).toStrictEqual([[]]);

});
