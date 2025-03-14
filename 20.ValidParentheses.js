const obj = {
  ")": "(",
  "}": "{",
  "]": "[",
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  for (const c of s) {
    if (!obj.hasOwnProperty(c)) {
      stack.push(c);
    } else {
      if (obj[c] !== stack.pop()) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(isValid("(([]){})}{")); // false
