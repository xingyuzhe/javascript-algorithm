/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const ans = []

  if (!root) return ans

  const stack = [
    [root, '']
  ]

  while (stack.length) {
    const [node, str] = stack.pop()

    if (!node.left && !node.right) {
      ans.push(str + node.val)
    }

    if (node.left) {
      stack.push([node.left, str + node.val + '->'])
    }

    if (node.right) {
      stack.push([node.right, str + node.val + '->'])
    }
  }

  return ans
};
