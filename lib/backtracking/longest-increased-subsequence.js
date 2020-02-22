/**
 * 2.6 Longest Increasing Subsequence.
 * time: T(N) = 2T(N-1) + O(1) ~ O(2^n)
 * space: O(N), call stack is N.
 */
const longestIncreasedSubLength = arr => {
    return findLongestRec(arr, 0, Number.NEGATIVE_INFINITY);
};

const findLongestRec = (arr, index, lastElement) => {

    if (index === arr.length) {
        return 0;
    }

    // check skipping arr[index]
    const maxWithoutLength = findLongestRec(arr, index + 1, lastElement);

    const curValue = arr[index];

    // take into account current arr[index] value
    if (curValue > lastElement) {
        const maxCurLength = 1 + findLongestRec(arr, index + 1, curValue);
        return Math.max(maxCurLength, maxWithoutLength);
    }

    return maxWithoutLength;

};

/**
 * Alternative backtracking strategy for longest increased subsequence problem.
 */
const longestIncreasedSubLengthAlternative = arr => {

    let maxSubseqLength = 0;

    for (let i = 0; i < arr.length; ++i) {
        maxSubseqLength = Math.max(maxSubseqLength, findLongestFromIndex(arr, i));
    }

    return maxSubseqLength;
};

const findLongestFromIndex = (arr, index) => {

    if (index === arr.length) {
        return 0;
    }

    let bestLength = 0;

    const curElement = arr[index];

    for (let i = index + 1; i < arr.length; ++i) {
        if (arr[i] > curElement) {
            bestLength = Math.max(bestLength, findLongestFromIndex(arr, i))
        }
    }

    return bestLength + 1;

};

module.exports.longestIncreasedSubLength = longestIncreasedSubLength;
module.exports.longestIncreasedSubLengthAlternative = longestIncreasedSubLengthAlternative;
