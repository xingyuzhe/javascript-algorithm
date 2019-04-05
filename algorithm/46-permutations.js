var permute = function(nums) {
  if (nums.length < 2) return [nums];
  const l = nums.length;
  const queue = nums.map(num => [num])

  const ans = []

  while (queue.length) {
    const head = queue.shift()

    nums.map(num => {
      if (!head.includes(num)) {
        const newPermute = head.concat([num])
        if (newPermute.length === l) {
          ans.push(newPermute)
        } else {
          queue.push(newPermute)
        }
      }
    })
  }

  return ans
};


var permute2 = function(nums) {
  if (!nums) return []
  if (nums.length <= 1) return [nums]

  const l = nums.length
  const ans = []

  DFS([])

  return ans

  function DFS(cur) {
    if (cur.length === l) {
      ans.push(cur.slice())
      return
    }

    for (const num of nums) {
      if (cur.includes(num)) continue
      cur.push(num)
      DFS(cur)
      cur.pop()
    }
  }  
};
