/*
 * @lc app=leetcode id=575 lang=javascript
 *
 * [575] Distribute Candies
 *
 * https://leetcode.com/problems/distribute-candies/description/
 *
 * algorithms
 * Easy (59.81%)
 * Likes:    298
 * Dislikes: 680
 * Total Accepted:    74.4K
 * Total Submissions: 124.3K
 * Testcase Example:  '[1,1,2,2,3,3]'
 *
 * Given an integer array with even length, where different numbers in this
 * array represent different kinds of candies. Each number means one candy of
 * the corresponding kind. You need to distribute these candies equally in
 * number to brother and sister. Return the maximum number of kinds of candies
 * the sister could gain. 
 * 
 * Example 1:
 * 
 * Input: candies = [1,1,2,2,3,3]
 * Output: 3
 * Explanation:
 * There are three different kinds of candies (1, 2 and 3), and two candies for
 * each kind.
 * Optimal distribution: The sister has candies [1,2,3] and the brother has
 * candies [1,2,3], too. 
 * The sister has three different kinds of candies. 
 * 
 * 
 * 
 * Example 2:
 * 
 * Input: candies = [1,1,2,3]
 * Output: 2
 * Explanation: For example, the sister has candies [2,3] and the brother has
 * candies [1,1]. 
 * The sister has two different kinds of candies, the brother has only one kind
 * of candies. 
 * 
 * 
 * 
 * Note:
 * 
 * The length of the given array is in range [2, 10,000], and will be even.
 * The number in given array is in range [-100,000, 100,000].
 * 
 * 
 */
/**
 * 题目分析：一个偶数长度的数组，数组的长度表示糖果的个数
 * 数组中数字先相同的表示同一种糖果
 * 必须把糖果一人一半的分给弟弟妹妹
 * 分糖果的时候还要注意，妹妹要尽可能的给不同的糖果
 * 问：妹妹最多能拿到多少种不同的糖果
 * 有两种极端情况，
 * 若是糖果全部都不相同，那么妹妹也只能拿到个数的一半的糖果
 * 若是糖果全部相同，妹妹也只能拿到一种
 * 若是不同的糖果大于总数的一半，那么妹妹也只能拿到一半的不同的糖果
 * 若是不同的糖果小于总数的一半，那么妹妹也只能拿到所有不同的糖果
 * 总结就是：不同的糖果，和总数的一半，谁小，妹妹拿到的不同的糖果的种类的个数就是谁
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function (candies) {
  const count = new Set(candies);
  return Math.min(count.size, candies.length / 2);
};

