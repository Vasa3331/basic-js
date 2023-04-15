const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(arr instanceof Array == false) throw new Error("'arr' parameter must be an instance of the Array!");
  let transArr = [];
  for(let i = 0; i < arr.length; i++) {
    transArr.push(arr[i]);
    if(arr[i] == '--discard-next') {
        transArr.pop(arr[i]);
        i++;
        if (arr[i - 1] == '--discard-next' && arr[i + 1] == '--double-prev') {
          i++;
          continue;
        }
        if (arr[i - 1] == '--discard-next' && arr[i + 1] == '--discard-prev') {
          i++;
          continue;
        }
    }
    if(arr[i] == '--discard-prev') {
      if(i !== 0) {
        transArr.pop(arr[i]);
        transArr.pop(arr[i - 1]);
      } else {
        transArr.pop(arr[i]);
      }
    }
    if(arr[i] == '--double-next') {
      if(i !== arr.length - 1) {
      transArr.pop(arr[i]);
      transArr.push(arr[i + 1]);
      } else {
        transArr.pop(arr[i]);
      }
    }
    if(arr[i] == '--double-prev') {
      if(i !== 0) {
      transArr.pop(arr[i]);
      transArr.push(arr[i - 1]);
      } else {
        transArr.pop(arr[i]);
      }
    }
  }
  return transArr;
}

module.exports = {
  transform
};
