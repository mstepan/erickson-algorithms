
const findAllSubsetsWithSum = (arr, target) => {
    const res = [];
    gatherSubsetsRec(arr, 0, 0, target, res);
    return res;
};


const gatherSubsetsRec = (arr, index, actual, target, combinedResult) => {
    if (actual === target) {
        combinedResult.push(extractSubset(arr));
        return;
    }

    for (let i = index; i < arr.length; ++i) {
        if (arr[i] > 0 && (actual + arr[i]) <= target) {
            const value = arr[i];
            arr[i] = -value;
            gatherSubsetsRec(arr, i + 1, actual + value, target, combinedResult);
            arr[i] = value;
        }
    }
};

const extractSubset = arr => {
    return arr.filter(value => value < 0).map(value => -value);
};

exports.findAllSubsetsWithSum = findAllSubsetsWithSum;
