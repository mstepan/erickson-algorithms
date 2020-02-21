const main = () => {

    const dic = new Set();
    dic.add("both");
    dic.add("earth");
    dic.add("and");
    dic.add("saturn");
    dic.add("spin");
    dic.add("bot");
    dic.add("heart");
    dic.add("hands");
    dic.add("at");
    dic.add("urns");
    dic.add("pin");

    const text = "BOTHEARTHANDSATURNSPIN".toLowerCase();

    const res = findDecompositions(text, dic);

    res.forEach(singleDecomposition => console.log(singleDecomposition));

};

const findDecompositions = (text, dic) => {

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

        const word = text.substring(from, i + 1);

        if (dic.has(word)) {

            curRes.push(word.length);

            findRec(text, dic, i + 1, curRes, allDecompositions);

            curRes.pop();
        }
    }
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

main();
