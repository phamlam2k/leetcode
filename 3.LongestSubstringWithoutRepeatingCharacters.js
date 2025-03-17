/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let strSet = new Set();
  let maxLength = 0;

  if (s.length === 1) return 1;

  for (let right = 0; right < s.length; right++) {
    while (strSet.has(s[right])) {
      strSet.delete(s[left]);
      left++;
    }

    strSet.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

console.log(lengthOfLongestSubstring("pwwkew"));
