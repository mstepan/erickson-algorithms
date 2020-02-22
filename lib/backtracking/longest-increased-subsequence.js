/**
 * 2.6 Longest Increasing Subsequence.
 */
const findLongestIncreasedSub = arr => {
    return longestRec(arr, 0, []);
};

const longestRec = (arr, index, prefix) => {

    if (index === arr.length) {
        return prefix;
    }

    const lastElement = (prefix.length === 0) ? Number.NEGATIVE_INFINITY : prefix[prefix.length - 1];

    const curValue = arr[index];

    let maxArr = [];

    // take into account current arr[index] value
    if (curValue > lastElement) {
        maxArr = longestRec(arr, index + 1, prefix.slice().concat(curValue));
    }

    // check skipping arr[index]
    const maxWithout = longestRec(arr, index + 1, prefix);

    if (maxWithout.length > maxArr.length) {
        maxArr = maxWithout;
    }

    return maxArr;

};

module.exports.findLongestIncreasedSub = findLongestIncreasedSub;
