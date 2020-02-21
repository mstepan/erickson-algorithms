/**
 * Use backtracking to print all N-queens placement.
 *
 * time: O(N^N)
 * space: O(N)
 *
 * N - board size
 */
const findAllQueensPlacements = size => {

    const board = [];

    for (let i = 0; i < size; ++i) {
        board[i] = -1;
    }

    const combinedResult = [];

    calculateQueensPlacementRec(board, 0, combinedResult);

    return combinedResult;
};

const calculateQueensPlacementRec = (board, row, combinedResult) => {

    if (row === board.length) {
        combinedResult.push(board.slice());
        return;
    }

    for (let col = 0; col < board.length; ++col) {

        if (canBePlaced(row, col, board)) {
            board[row] = col;

            calculateQueensPlacementRec(board, row + 1, combinedResult);

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

exports.findAllQueensPlacement = findAllQueensPlacements;



