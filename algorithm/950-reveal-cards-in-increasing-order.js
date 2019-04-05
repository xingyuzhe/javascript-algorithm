/**
 * @param {number[]} deck
 * @return {number[]}
 * 把数组排好序, 从后往前推, 找出规律: 每次把结果数组从后往前依次交换位置, 然后把有序数组的最后一位插入到结果数组的首位
 */
var deckRevealedIncreasing = function(deck) {
  deck.sort((a, b) => a - b);

  let count = 0, l = deck.length;

  const res = Array(l).fill(undefined)

  while (deck.length) {
    const num = deck.pop();
    swap(res);
    res[l - count - 1] = num;
    count++;
  }

  return res;
};

function swap(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] === undefined || arr[i - 1] === undefined) break
    [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
  }

  return arr;
}

/**
** 我们可以用输出来反推输入，输出可以看成是一个队列,记为queue，
** 最后入队的是最大值，最先入队的是最小值。从输入到输出的逻辑是
** 先把deck的第一个元素放入queue，然后第二个元素放入deck的最后；
** 那么从输出反推的输入的逻辑就是先把deck的最后一个元素放入到deck
** 的第一个位置，然后再把queue的最后一个元素放入deck。
**/
var deckRevealedIncreasing2 = function(originDeck) {
  const queue = originDeck.slice(0).sort((a, b) => a - b)
  const deck = []

  while(queue.length) {
    if (deck.length > 1) {
      deck.unshift(deck.pop())
    }

    deck.unshift(queue.pop())
  }

  return deck
}
