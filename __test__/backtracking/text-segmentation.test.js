const segmentation = require("../../lib/backtracking/text-segmentation");

const mainDictionary = new Set();
mainDictionary.add("both");
mainDictionary.add("earth");
mainDictionary.add("and");
mainDictionary.add("saturn");
mainDictionary.add("spin");
mainDictionary.add("bot");
mainDictionary.add("heart");
mainDictionary.add("hands");
mainDictionary.add("at");
mainDictionary.add("urns");
mainDictionary.add("pin");

test('find all text segmentations normal', () => {

    const text = "BOTHEARTHANDSATURNSPIN".toLowerCase();

    const expectedRes = [
        [
            "bot",
            "heart",
            "hands",
            "at",
            "urns",
            "pin"
        ],
        [
            "both",
            "earth",
            "and",
            "saturn",
            "spin"
        ]
    ];

    expect(segmentation.findAllDecompositions(text, mainDictionary)).toStrictEqual(expectedRes);

});


test('find all text segmentations NO SOLUTION should return empty array', () => {
    const text = "BOTHEARTHAN[T]DSATURNSPIN".toLowerCase();

    expect(segmentation.findAllDecompositions(text, mainDictionary)).toStrictEqual([]);
});

test('find best text segmentation normal case', () => {

    const text = "BOTHEARTHANDSATURNSPIN".toLowerCase();

    const expectedRes = ["both", "earth", "and", "saturn", "spin"];

    expect(segmentation.findBestDecomposition(text, mainDictionary)).toStrictEqual(expectedRes);

});

