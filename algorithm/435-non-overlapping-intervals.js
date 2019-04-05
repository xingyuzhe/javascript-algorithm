/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  if (intervals.length < 2) return 0
  intervals = intervals.sort((a, b) => a.end - b.end)

  let count = 1
  let end = intervals[0].end

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i].start < end) {
      continue
    }

    end = intervals[i].end
    count++
  }

  return intervals.length - count
};
