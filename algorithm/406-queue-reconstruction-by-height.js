/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    people.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : b[0] - a[0])
    
    const ans = []

    for (let i in people) {
      const item = people[i]
      ans.splice(item[1], 0, item)
    }

    return ans
}
