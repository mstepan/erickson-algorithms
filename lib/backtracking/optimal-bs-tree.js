class Tree {

    constructor(leftSubtree, rootValue, rightSubtree, freqSum) {
        if (!arguments.length) {
            this.root = null;
            this.cost = 0;
        } else {
            this.root = new Node(leftSubtree.root, rootValue, rightSubtree.root);
            this.cost = leftSubtree.cost + rightSubtree.cost + freqSum;
        }
    }

    getCost() {
        return this.cost;
    }

    getRoot() {
        return this.root;
    }

    static empty() {
        return new Tree();
    }

}

class Node {

    constructor(left, value, right) {
        this.left = left;
        this.value = value;
        this.right = right;
    }

    getLeft() {
        return this.left;
    }

    getRight() {
        return this.right;
    }

    getValue() {
        return this.value;
    }
}

/**
 * Construct optimal binary search tree based on predefined frequency of elements (freq).
 * Use backtracking technique, not very effective compared to dynamic programming. )))
 * time: O(3^N)
 * space: O(N)
 * @param arr - array of sorted keys
 * @param freq - array of element access frequencies
 */
const createOptimalTree = (arr, freq) => {
    return constructOptimalTreeRec(arr, freq, 0, arr.length - 1);
};

const constructOptimalTreeRec = (arr, freq, from, to) => {

    if (from < 0 || from > to || to >= arr.length) {
        return Tree.empty();
    }

    let bestSoFar = null;

    for (let r = from; r <= to; ++r) {

        const leftSubtree = constructOptimalTreeRec(arr, freq, from, r - 1);
        const rightSubtree = constructOptimalTreeRec(arr, freq, r + 1, to);

        const curTree = new Tree(leftSubtree, arr[r], rightSubtree, sumFreq(freq, from, to));

        if (bestSoFar == null || curTree.cost < bestSoFar.cost) {
            bestSoFar = curTree;
        }
    }

    return bestSoFar;
};

const sumFreq = (freqArr, from, to) => {

    let sum = 0;
    for (let i = from; i <= to; ++i) {
        sum += freqArr[i];
    }

    return sum;
};

module.exports.createOptimalTree = createOptimalTree;
module.exports.Tree = Tree;
module.exports.Node = Node;

