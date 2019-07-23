/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 *
 * https://leetcode.com/problems/3sum/description/
 *
 * algorithms
 * Medium (24.22%)
 * Likes:    4116
 * Dislikes: 473
 * Total Accepted:    593.2K
 * Total Submissions: 2.4M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * Given an array nums of n integers, are there elements a, b, c in nums such
 * that a + b + c = 0? Find all unique triplets in the array which gives the
 * sum of zero.
 * 
 * Note:
 * 
 * The solution set must not contain duplicate triplets.
 * 
 * Example:
 * 
 * 
 * Given array nums = [-1, 0, 1, 2, -1, -4],
 * 
 * A solution set is:
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}

var threeSum = function (nums) {
  let n = nums.length;
  if (n < 3) return []
  let res = [];
  let cur = [];
  let a = 0;
  for (a; a < nums.length - 2; a++) {
    let d = 0 - nums[a]
    let b = a + 1;
    let c = a + 2;
    while (b < n - 1 && c < n) {
      if (nums[b] + nums[c] == d) {
        let a1 = Math.min(nums[a], nums[b], nums[c])
        let c1 = Math.max(nums[a], nums[b], nums[c])
        let b1 = 0 - a1 - b1;
        cur.push(a1, b1, c1)
        res.push(cur)
        cur = []
      }
      if (c !== n - 1) {
        c++
      } else {
        b++
        c = b + 1;
      }
    }
  }
  // 需要去重
  return res;
};
 */

var threeSum = function (nums) {
  let n = nums.length;
  // 这里需要先把数组归并排序，
  nums = divide(nums)
  let res = []
  // 和为0的特性是，除了0一定有正负，所以排序后遍历到0即可，
  // 双指针，从当前值的右边一位left，和最右边right，正数的最大值来求和,
  // 如果和小于0，说明负数多了，left右移，如果和大于0，说明正数大了，right左移
  for (let i = 0; nums[i] <= 0; i++) {
    let left = i + 1;
    let right = n - 1;
    if (nums[right] < 0) return []
    if (i == 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      while (left < right) {
        let sum = nums[i] + nums[left] + nums[right]
        if (sum == 0) {
          res.push([nums[i], nums[left], nums[right]])
          // 需要判断你加减后的数据是否相同
          let curleft = nums[left]
          let curright = nums[right]
          while (nums[left + 1] == curleft) left++;
          while (nums[right - 1] == curright) right--;
          left++;
          right--;
        } else if (sum < 0) {
          left++;
        } else if (sum > 0) {
          right--;
        }
      }
    }
  }
  return res;
};
/**
 * 
 * @param {array} nums
 * 归并排序，练手用 
 */
function divide(nums) {
  let n = nums.length;
  if (n < 2) return nums;
  n = Math.floor(n / 2)
  let left = nums.slice(0, n)
  let right = nums.slice(n)
  return concat(divide(left), divide(right))
  function concat(left, right) {
    let res = []
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        res.push(left.shift())
      } else {
        res.push(right.shift())
      }
    }
    while (left.length) {
      res.push(left.shift())
    }
    while (right.length) {
      res.push(right.shift())
    }
    return res;
  }
}
