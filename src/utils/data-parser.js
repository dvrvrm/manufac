import { mean, median, mode, computeGamma } from "./maths-functions";

function getClasswiseMean(indices, stats) {
    let arr = [];
    for (let i = 0; i < indices.length; i++) {
        let items = stats[indices[i]];
        arr.push({
            aClass: indices[i],
            value: mean(items)
        });
    }
    return arr;
}

function getClasswiseMedian(indices, stats) {
    let arr = [];
    for (let i = 0; i < indices.length; i++) {
        let items = stats[indices[i]];

        arr.push({
            aClass: indices[i],
            value: median(items)
        });
    }
    return arr;
}

function getClasswiseMode(indices, stats) {
    let arr = [];
    for (let i = 0; i < indices.length; i++) {
        let items = stats[indices[i]];

        arr.push({
            aClass: indices[i],
            value: mode(items)
        });
    }
    return arr;
}

function addGammaInJson(jsonData) {
    jsonData.forEach((item) => {
        item.Gamma = computeGamma(item);
    });
}

export {
    getClasswiseMean,
    getClasswiseMedian,
    getClasswiseMode,
    addGammaInJson
};