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

const main = () => {
    const res = findLongestIncreasedSub([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3, 2, 3, 8, 4, 6, 2, 6]);

    console.log("res: %s, isIncreased: %s", res, isIncreased(res));
};

const isIncreased = arr => {

    for (let i = 1; i < arr.length; ++i) {
        if (arr[i - 1] > arr[i]) {
            return false;
        }
    }

    return true;
};

main();
