const td_squares = $('td');
const message_player_win = $('h3');
const message_player_turn_no = $('joueur');
const ARR_LENGTH = 9;
const scoreArray = new Array(ARR_LENGTH);
let gameFinished = false;

$(function () {
  td_squares.click(squareClicked);
});

let isPlayer1 = true;
const squareClicked = (elem) => {
  let selectedSquare = $(`#${elem.currentTarget.children[0].id}`);
  if (selectedSquare.attr('src') == undefined && !gameFinished) {
    if (isPlayer1) {
      message_player_turn_no.text('2');
      scoreArray[parseInt(elem.currentTarget.id)] = 1;
      selectedSquare.attr('src', '/assets/images/croix.png');
      checkWhoWon();
    } else {
      scoreArray[parseInt(elem.currentTarget.id)] = 10;
      selectedSquare.attr('src', '/assets/images/rond.png');
      message_player_turn_no.text('1');
      checkWhoWon();
    }
    isPlayer1 = !isPlayer1;
  }
};

const checkWhoWon = () => {
  //Rows
  const score_line_1 = scoreArray[0] + scoreArray[1] + scoreArray[2];
  const score_line_2 = scoreArray[3] + scoreArray[4] + scoreArray[5];
  const score_line_3 = scoreArray[6] + scoreArray[7] + scoreArray[8];

  //Columns
  const score_col_1 = scoreArray[0] + scoreArray[3] + scoreArray[6];
  const score_col_2 = scoreArray[1] + scoreArray[4] + scoreArray[7];
  const score_col_3 = scoreArray[2] + scoreArray[5] + scoreArray[8];

  //Diagonal
  const score_diag_1 = scoreArray[2] + scoreArray[4] + scoreArray[6];
  const score_diag_2 = scoreArray[0] + scoreArray[4] + scoreArray[8];

  if (score_line_1 === 3 || score_line_2 === 3 || score_line_3 === 3) {
    stopGame(true);
  }

  if (score_col_1 === 3 || score_col_2 === 3 || score_col_3 === 3) {
    stopGame(true);
  }
  if (score_diag_1 === 3 || score_diag_2 === 3) {
    stopGame(true);
  }

  if (score_line_1 === 30 || score_line_2 === 30 || score_line_3 === 30) {
    stopGame(false);
  }

  if (score_col_1 === 30 || score_col_2 === 30 || score_col_3 === 30) {
    stopGame(false);
  }
  if (score_diag_1 === 30 || score_diag_2 === 30) {
    stopGame(false);
  }

  if (
    scoreArray[0] +
      scoreArray[1] +
      scoreArray[2] +
      scoreArray[3] +
      scoreArray[4] +
      scoreArray[5] +
      scoreArray[6] +
      scoreArray[7] +
      scoreArray[8] ===
    45
  ) {
    gameFinished = true;
    message_player_win.text('Draw !');
  }
};

const stopGame = (value) => {
  if (value) {
    gameFinished = true;
    message_player_win.text('Player 1 wins!');
  } else {
    gameFinished = true;
    message_player_win.text('Player 2 wins!');
  }
};
