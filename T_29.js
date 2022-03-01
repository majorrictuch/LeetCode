/**
 * @param {number[]} nums
 * @return {number}
 */

//解题思路 有点惨的
// 1.尽量少地移动数据
// 2.
// 2.
 var removeDuplicates_2 = function(nums) {
   const n = nums.length;
   if(n === 0){
     return 0;
   }

   let p=0;q=1;
   while(q<n){
     if(nums[p]!=nums[q]){
       if(q-p>1){
        nums[p+1] = nums[q];
       }
       p++;
     }
     q++;
   }
   return p+1;
 }
 var removeDuplicates_1 = function(nums) {
  const n = nums.length;
  if(n === 0){
    return 0;
  }

  let fast=1,slow=1;
  while(fast<n){
    if(nums[fast] !== nums[fast-1]){
      if(fast-slow>1){
        nums[slow]=nums[fast];
      }
      ++slow;
    }
    fast++;
  }
  return slow;
};