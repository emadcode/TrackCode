$(document).ready(function() {
    const board = Array(9).fill('');
    let currentPlayer = 'X';

    function playMove(cellIndex) {
        if (board[cellIndex] === '') {
            board[cellIndex] = currentPlayer;
            updateUI();
            if (checkWin(currentPlayer)) {
                alert(currentPlayer + ' wins!');
            }
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }

    function updateUI() {
        board.forEach((value, index) => {
            $('.cell[data-index=' + index + ']').text(value);
        });
    }

    function checkWin(player) {
        const winConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
            [0, 4, 8], [2, 4, 6] // diagonals
        ];
        return winConditions.some(combination => {
            return combination.every(index => board[index] === player);
        });
    }

    function resetGame() {
        board.fill('');
        updateUI();
        currentPlayer = 'X';
    }

    // Add click event listener to cells
    $('.cell').click(function() {
        const cellIndex = $(this).data('index');
        playMove(cellIndex);
    });

    // Add click event listener to reset button
    $('button').click(function() {
        resetGame();
    });
});
