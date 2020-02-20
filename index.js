const subsets = require('./lib/backtracking/subsets-with-sum');

const main = () => {

    const arr = [8, 6, 7, 5, 3, 10, 9];
    const targetSum = 15;

    const result = subsets.findAllSubsetsWithSum(arr, targetSum);

    for (let i = 0; i < result.length; ++i) {
        console.log(result[i]);
    }
};

main();
