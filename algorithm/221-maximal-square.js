var maximalSquare = function(matrix) {
    if (!matrix || !matrix.length || !matrix[0].length) return 0

    let maxLen = 0

    const m = matrix.length + 1
    const n = matrix[0].length + 1

    const dp = Array(m).fill(0).map(() => [0])
    dp[0] = Array(n).fill(0)

    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        if (matrix[i - 1][j - 1] === '1') {
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
          maxLen = Math.max(maxLen, dp[i][j])
        } else {
          dp[i][j] = 0
        }
      }
    }

    return maxLen * maxLen
};
