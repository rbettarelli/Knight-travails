function knightMoves(start, end) {
    // Board size is 8x8
    const n = 8;
    // Possible moves for the knight
    const moves = [
      [-2, -1], [-2, 1], [2, -1], [2, 1],
      [-1, -2], [-1, 2], [1, -2], [1, 2]
    ];
    
    // Initialize visited array and queue for BFS
    const visited = Array.from({length: n}, () => Array(n).fill(false));
    const queue = [[start, [start]]];
    visited[start[0]][start[1]] = true;
    
    while (queue.length > 0) {
      const [curr, path] = queue.shift();
  
      if (curr[0] === end[0] && curr[1] === end[1]) {
        const movesCount = path.length - 1;
        console.log(`You made it in ${movesCount} moves! Here's your path:`);
        for (const position of path) {
          console.log(position);
        }
        return path;
      }
  
      for (const [dx, dy] of moves) {
        const nextX = curr[0] + dx;
        const nextY = curr[1] + dy;
        if (nextX >= 0 && nextX < n && nextY >= 0 && nextY < n && !visited[nextX][nextY]) {
          visited[nextX][nextY] = true;
          queue.push([[nextX, nextY], [...path, [nextX, nextY]]]);
        }
      }
    }
    
    // End is unreachable
    console.log("The destination is unreachable.");
    return null;
  }
  
knightMoves([0, 0], [1, 2])

knightMoves([3, 3], [7, 6]);

knightMoves([0, 0], [7, 7])
