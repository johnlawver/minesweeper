const printBoard = board => {
  console.log('Current Board:');
  console.log(board[0].join('|'));
  console.log(board[1].join('|'));
  console.log(board[2].join('|'));
}
var board = [['1',' ',' '],[' ','B',' '],[' ',' ',' ']];

printBoard(board)
