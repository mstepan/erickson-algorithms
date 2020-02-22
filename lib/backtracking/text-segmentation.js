/**
 * 2.5 Text Segmentation
 */
const findAllDecompositions = (text, dic) => {

    const allDecompositions = [];

    findRec(text, dic, 0, [], allDecompositions);

    return allDecompositions;
};

const findRec = (text, dic, from, curRes, allDecompositions) => {

    // we reached end of text
    if (from === text.length) {
        allDecompositions.push(buildSolution(text, curRes));
        return;
    }

    for (let i = from; i < text.length; ++i) {

        if (isWord(text, from, i, dic)) {

            curRes.push(i - from + 1);

            findRec(text, dic, i + 1, curRes, allDecompositions);

            curRes.pop();
        }
    }
};

const findBestDecomposition = (text, dic) => {

    const bestSolution = {
        segmentation: [],
        score: 0
    };

    findRecBestScore(text, dic, 0, [], bestSolution);

    return bestSolution.segmentation;
};

const findRecBestScore = (text, dic, from, curRes, bestSolution) => {

    // we reached end of text
    if (from === text.length) {
        const curSegmentation = buildSolution(text, curRes);

        const curScore = calculateScore(curSegmentation);

        if (curScore > bestSolution.score) {
            bestSolution.segmentation = curSegmentation;
            bestSolution.score = curScore;
        }

        return;
    }

    for (let i = from; i < text.length; ++i) {

        if (isWord(text, from, i, dic)) {

            curRes.push(i - from + 1);

            findRecBestScore(text, dic, i + 1, curRes, bestSolution);

            curRes.pop();
        }
    }
};

const isWord = (text, from, to, dic) => {

    const word = text.substring(from, to + 1);

    return dic.has(word);
};

const buildSolution = (text, wordsLength) => {

    const res = [];

    let from = 0;

    for (let i = 0; i < wordsLength.length; ++i) {
        const curLength = wordsLength[i];

        res.push(text.substring(from, from + curLength));

        from += curLength;
    }

    return res;
};

/**
 * Calculate text segmentation score (giving preferences to longer words):
 *
 * single word score example:
 * score('pin') = 1 + 2 + 3 = 6
 * score('an') = 1 + 2 = 3
 * score('hands') = 1 + 2 + 3 + 4 + 5 = 15
 */
const calculateScore = (words) => {
    return words.map(singleWord => {
        const n = singleWord.length;
        return (n * (n + 1)) / 2;
    }).reduce((a, b) => a + b, 0);
};

module.exports.findAllDecompositions = findAllDecompositions;
module.exports.findBestDecomposition = findBestDecomposition;

