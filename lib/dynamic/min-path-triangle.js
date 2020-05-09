"use strict";

const main = () => {

    const triangle = [[2], [4, 4], [8, 5, 6], [4, 2, 6, 2], [1, 5, 2, 3, 4]];

    const minPath = findTriangleMinPathCost(triangle);

    console.log(minPath);

    console.log("main done...")
};

/**
 * Find minimum cost path in triangle using dynamic programming approach.
 *
 * time: O(N^2)
 * space: O(N)
 * @param triangle
 */
function findTriangleMinPathCost(triangle) {
    checkIsTriangle(triangle);

    const n = triangle[triangle.length - 1].length;

    const sol = new TwoRowsSolution(n);

    for (let row = 0; row < triangle.length; ++row) {

        const arr = triangle[row];

        sol.moveForward();

        sol.setCurValue(0, arr[0] + sol.getPrevValue(0));

        if (row !== 0) {
            sol.setCurValue(arr.length - 1, arr[arr.length - 1] + sol.getPrevValue(arr.length - 2));
        }

        for (let i = 1; i < arr.length - 1; ++i) {
            sol.setCurValue(i, arr[i] + Math.min(sol.getPrevValue(i - 1), sol.getPrevValue(i)));
        }
    }

    return sol.findMinFromCurrent();
}

class TwoRowsSolution {
    constructor(n) {
        this.solution = [new Array(n).fill(0), new Array(n).fill(0)];
        this.SOLUTIONS_COUNT = 2;
        this.cur = 0;
        this.prev = 1;
    }

    findMinFromCurrent() {
        return this.solution[this.cur].reduce((prev, cur) => prev <= cur ? prev : cur);
    }

    getCurValue(index) {
        return this.solution[this.cur][index];
    }

    setCurValue(index, value) {
        this.solution[this.cur][index] = value;
    }

    getCurrent() {
        return this.solution[this.cur];
    }

    getPrevValue(index) {
        return this.solution[this.prev][index];
    }

    moveForward() {
        this.cur = (this.cur + 1) % this.SOLUTIONS_COUNT;
        this.prev = (this.cur + 1) % this.SOLUTIONS_COUNT;
    }
}


function checkIsTriangle(triangle) {

    if (triangle === undefined) {
        throw new Error("null 'triangle passed'");
    }

    for (let i = 0; i < triangle.length; ++i) {
        if (!Array.isArray(triangle[i])) {
            throw new Error(
                `Incorrect triangle not an array detected at index ${i}, type = ${typeof triangle[i]}`);
        }

        if (triangle[i].length !== i + 1) {
            throw new Error(
                `Incorrect triangle dimension at index ${i}, expected = ${i + 1}, but found ${triangle[i].length}`);
        }
    }

}


main();

