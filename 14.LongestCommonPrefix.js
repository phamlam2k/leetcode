/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let idx = 0;
  let prefix = "";

  while (idx < strs[0].length) {
    let begin = strs[0][idx];
    let count = 0;

    for (let i = 1; i < strs.length; i++) {
      if (strs[i][idx] === begin) {
        count += 1;
      } else {
        idx = strs[0].length;
        break;
      }
    }

    if (count === strs.length - 1) {
      prefix += begin;
      idx += 1;
    }
  }

  return prefix;
};
