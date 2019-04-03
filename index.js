function heapSort(nums) {
  const n = nums.length

  const swap = (i, j) => [nums[i], nums[j]] = [nums[j], nums[i]]

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    buildHeap(0, i)
  }

  for (let i = n - 1; i >= 0; i--) {
    swap(0, i)
    buildHeap(0, i)
  }

  return nums

  function nums(start, end) {
    let largest = start
    const leftSon = 2 * start + 1
    const rightSon = 2 * start + 2

    if (leftSon < n && nums[leftSon] > nums[largest]) {
      largest = leftSon
    }

    if (largest !== start) {
      swap(largest, start)
      buildHeap(largest, end)
    }
  }
}


let prev = null

while(head && head.next) {
  let next = head.next
  next.next = head

  head = next
  prev = head
}

return prev
