var strStr = function (haystack, needle) {

  // return haystack.includes(needle);
  return haystack.indexOf(needle);
  if(needle.length > haystack.length){
      return -1;
  }

  if(needle.length == 0){
      return 0;
  }

  // if(haystack.in)
};
console.log(strStr("hello", "ll"));

// d) String.indexOf(searchString: string, position?: number): number

// Returns the position of the first occurrence of a substring.

// @paramsearchString — The substring to search for in the string

// @paramposition — The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.