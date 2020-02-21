const findAllSubsetsWithSum = (arr, target) => {
    const res = [];
    gatherSubsetsRec(arr, 0, target, res);
    return res;
};


const gatherSubsetsRec = (arr, index, target, combinedResult) => {

    if (target === 0) {
        combinedResult.push(extractSubset(arr));
        return;
    }

    if( index >= arr.length ){
        return;
    }

    // use arr[index]
    if (arr[index] <= target) {
        const value = arr[index];
        arr[index] = -value;
        gatherSubsetsRec(arr, index + 1, target - value, combinedResult);
        arr[index] = value;
    }

    // skip arr[index]
    gatherSubsetsRec(arr, index + 1, target, combinedResult);
};

const extractSubset = arr => {
    return arr.filter(value => value < 0).map(value => -value);
};

module.exports.findAllSubsetsWithSum = findAllSubsetsWithSum;
