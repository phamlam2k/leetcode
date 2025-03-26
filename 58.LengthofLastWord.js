/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const _s = s.trim();

  const arr = _s.split(" ");

  return arr[arr.length - 1].length;
};
