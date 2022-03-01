/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let p = 0, q = 0;
  let cnt = 0;

  //区分 of 与 in 
  //in 这边 打印的是 index
  for (i of nums) {
    if (i == val) {
      q++;
      cnt++;
    } else {
      if (p != q) {
        nums[p] = nums[q];
      }
      p++;
      q++;
    }
  }
  console.log(nums)
  return p;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));