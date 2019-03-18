/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  let max = -Infinity
  if (!root) return 0
  maxPath(root)
  return max

  function maxPath(root) {
    if (!root) return 0

    const leftSum = Math.max(maxPath(root.left), 0)
    const rightSum = Math.max(maxPath(root.right), 0)

    max = Math.max(max, leftSum + rightSum + root.val)

    return Math.max(leftSum, rightSum) + root.val
  }
};
