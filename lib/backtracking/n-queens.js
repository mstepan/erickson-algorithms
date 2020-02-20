const main = () => {

    const board = [-1, -1, -1, -1, -1, -1, -1, -1];

    printAllQueensPlacement(board, 0);

    console.log("placementsCount: %s", placementsCount);


};

let placementsCount = 0;

/**
 * Use backtracking to print all N-queens placement.
 *
 * time: O(N^N)
 * space: O(N)
 *
 * N - board size
 */
const printAllQueensPlacement = (board, row) => {

    if (row === board.length) {
        console.log(board);
        ++placementsCount;
        return;
    }


    for (let col = 0; col < board.length; ++col) {

        if (canBePlaced(row, col, board)) {
            board[row] = col;

            printAllQueensPlacement(board, row + 1);

            board[row] = -1;
        }
    }
};

const canBePlaced = (curRow, curCol, board) => {

    for (let row = 0; row < curRow; ++row) {
        if (board[row] === curCol || board[row] === curCol + (curRow - row) ||
            board[row] === curCol - (curRow - row)) {
            return false;
        }
    }

    return true;
};


main();
