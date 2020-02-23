const tree = require("../../lib/backtracking/optimal-bs-tree");

test("construct optinal BS-tree normal case", () => {

    const arr = [2, 3, 4, 5, 6, 7, 8];
    const freq = [3, 2, 4, 1, 5, 2, 3];

    const actualRes = tree.createOptimalTree(arr, freq);

    expect(actualRes.cost).toBe(45);

    expect(actualRes.getRoot().getValue()).toBe(6);

    expect(actualRes.getRoot().getLeft().getValue()).toBe(4);
    expect(actualRes.getRoot().getLeft().getLeft().getValue()).toBe(2);
    expect(actualRes.getRoot().getLeft().getRight().getValue()).toBe(5);
    expect(actualRes.getRoot().getLeft().getLeft().getRight().getValue()).toBe(3);

    expect(actualRes.getRoot().getRight().getValue()).toBe(8);
    expect(actualRes.getRoot().getRight().getLeft().getValue()).toBe(7);
});
