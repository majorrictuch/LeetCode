// d) String.indexOf(searchString: string, position?: number): number

// Returns the position of the first occurrence of a substring.

// @paramsearchString — The substring to search for in the string

// @paramposition — The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.

var strStr_1 = function (haystack, needle) {
  // return haystack.includes(needle);
  return haystack.indexOf(needle);
};
//打造自己的技能核心竞争力
//简历分级
var strStr_2 = function (haystack, needle) {
  let mom = haystack.length, son = needle.length;

  for (let i = 0; i < mom - son; i++) {
    let flag = true;
    for (let j = 0; j < son; j++) {
      // if (haystack[i]!=needle[j]) {
      if (haystack[i+j]!=needle[j]) {
        flag =false;
        break
      }
    }
    if(flag){
      return i;
    }
  }
  return -1;
};

console.log(strStr_2("", ""));
