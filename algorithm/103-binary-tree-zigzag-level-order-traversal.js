/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  if (!root) return []
    const queue = [[root]]

    const ans = []

    let level = 0

    while (queue.length) {
      const nodeWrap = queue.pop()
      const numWrap = []
      const newNodeWrap = []

      nodeWrap.map(node => {
        numWrap.push(node.val)
        if (node.left) {
          newNodeWrap.push(node.left)
        }
        if (node.right) {
          newNodeWrap.push(node.right)
        }
      })

      if (numWrap.length) {
        ans.push(level & 1 ? numWrap.reverse() : numWrap)
      }

      if (newNodeWrap.length) {
        queue.push(newNodeWrap)
        level++
      }
    }

    return ans
};
