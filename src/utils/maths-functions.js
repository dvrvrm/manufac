
function mean(arr) {
    let sum = 0, mean = -1;
    arr.forEach((val) => {
        sum += val;
    });
    mean = sum / arr.length;
    return mean.toFixed(3);
}

function median(arr) {
    const { length } = arr;
    arr.sort((a, b) => a - b);
    let res;

    if (length % 2 === 0)
        res = (arr[length / 2 - 1] + arr[length / 2]) / 2;
    else
        res = arr[(length - 1) / 2];
    return res.toFixed(3);
}

function mode (arr) {
    const mode = {};
    let max = 0, count = 0;
  
    for(let i = 0; i < arr.length; i++) {
      const item = arr[i];
      
      if(mode[item]) {
        mode[item]++;
      } else {
        mode[item] = 1;
      }
      
      if(count < mode[item]) {
        max = item;
        count = mode[item];
      }
    }
     
    return max;
}

function computeGamma (item) {
    let res = (parseFloat(item.Ash)*parseFloat(item.Hue))/parseFloat(item.Magnesium);
    return res.toFixed(3);
}

export {
    mean,
    median,
    mode,
    computeGamma
};