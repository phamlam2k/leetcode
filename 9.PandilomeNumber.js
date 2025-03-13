/**
 * Đây là bài giải của tôi
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const str = String(x);

  if (str.length === 2) {
    return str[0] === str[1];
  }

  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] != str[str.length - 1 - i]) return false;
  }

  return true;
};

console.log(isPalindrome(121)); // true
