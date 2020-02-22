/**
 * 2.6 Longest Increasing Subsequence.
 */
const longestIncreasedSub = arr => {
    return findLongestRec(arr, 0, Number.NEGATIVE_INFINITY);
};

const findLongestRec = (arr, index, lastElement) => {

    if (index === arr.length) {
        return [];
    }

    // check skipping arr[index]
    const maxWithout = findLongestRec(arr, index + 1, lastElement);

    const curValue = arr[index];

    // take into account current arr[index] value
    if (curValue > lastElement) {
        const maxArr = findLongestRec(arr, index + 1, curValue);

        if (maxArr.length + 1 > maxWithout.length) {
            return [curValue].concat(maxArr);
        }
    }

    return maxWithout;

};

module.exports.findLongestIncreasedSub = longestIncreasedSub;
