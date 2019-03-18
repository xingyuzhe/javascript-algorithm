class AllOne {
  constructor() {
    this.keyMap = new Map()
    this.head = this.buildNode(-Infinity)
    this.tail = this.buildNode(Infinity)
    this.head.next = this.tail
    this.tail.prev = this.head
  }

  buildNode(count, key) {
    let keys = key ? new Map([[key, 1]]) : undefined

    return {
      count,
      keys,
      prev: null,
      next: null
    }
  }

  addNode(count, key, { prevNode, nextNode, target }) {
    // 有target说明不需要调整位置
    if (target) {
      target.keys.set(key, 1)
      this.keyMap.set(key, target)
      return
    }

    const newNode = this.buildNode(count, key)

    if (prevNode) {
      nextNode = prevNode.next
    } else if (nextNode) {
      prevNode = nextNode.prev
    }

    prevNode.next = newNode

    newNode.prev = prevNode
    newNode.next = nextNode

    nextNode.prev = newNode

    this.keyMap.set(key, newNode)

    return newNode
  }

  delNode(node, key) {
    this.keyMap.delete(key)

    const prevNode = node.prev
    const nextNode = node.next

    if (node.keys.size > 1) {
      node.keys.delete(key)
      return false
    }

    prevNode.next = nextNode
    nextNode.prev = prevNode

    return true
  }

  inc(key) {
    const node = this.keyMap.get(key)

    if (!node) {
      const target = this.head.next.count === 1 ? this.head.next : undefined

      this.addNode(1, key, {
        target,
        prevNode: target ? undefined : this.head
      })

      return
    }
    
    const nextCount = node.count + 1
    const nextNode = node.next
    const prevNode = node.prev

    const target = nextCount === nextNode.count ? nextNode : undefined
    const isDeleted = this.delNode(node, key)
    this.addNode(nextCount, key, {
      target,
      // 在当前节点或者当前节点的前一个节点后面插入新节点
      prevNode: target ? undefined : (isDeleted ? prevNode : node)
    })
  }

  dec(key) {
    const node = this.keyMap.get(key)

    if (!node) return

    const prevNode = node.prev
    const nextNode = node.next
    const prevCount = node.count - 1

    const target = prevCount === prevNode.count ? prevNode : undefined
    const isDeleted = this.delNode(node, key)

    // 只有值大于0才需要插入
    if (prevCount > 0) {
      this.addNode(prevCount, key, {
        target,
        // 在当前节点或者当前节点的后一个节点前面插入新节点
        nextNode: target ? undefined : (isDeleted ? nextNode : node)
      })
    }
  }

  getMaxKey() {
    const maxKeys = this.tail.prev.keys
    return maxKeys ? maxKeys.keys().next().value : ''
  }

  getMinKey() {
    const minKeys = this.head.next.keys
    return minKeys ? minKeys.keys().next().value : ''
  }
}

// test

function buildCommandsAndCheck(keys, params, ans) {
  keys.shift()
  params.shift()
  ans.shift()

  const allInOne = new AllOne()

  window.allInOne = allInOne
  window.params = params

  for (let i in keys) {
    const res = allInOne[keys[i]](params[i][0])

    if (i === '25') return 

    if (res != ans[i]) {
      console.error(i, res, ans[i])
      return
    }
  }
}

(() => {
  const keys = ["AllOne","inc","inc","inc","inc","inc","inc","getMaxKey","inc","dec","getMaxKey","dec","inc","getMaxKey","inc","inc","dec","dec","dec","dec","getMaxKey","inc","inc","inc","inc","inc","inc","getMaxKey","getMinKey"]
  const params = [[],["hello"],["world"],["leet"],["code"],["DS"],["leet"],[],["DS"],["leet"],[],["DS"],["hello"],[],["hello"],["hello"],["world"],["leet"],["code"],["DS"],[],["new"],["new"],["new"],["new"],["new"],["new"],[],[]]
  const ans = [null,null,null,null,null,null,null,"leet",null,null,"DS",null,null,"hello",null,null,null,null,null,null,"hello",null,null,null,null,null,null,"new","hello"]
  buildCommandsAndCheck(keys, params, ans)
})();
