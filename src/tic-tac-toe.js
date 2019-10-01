class TicTacToe {
  constructor() {
    this.currentPlayer = true;
    this.playingField = [[null, null, null], [null, null, null], [null, null, null]];
    this.turns = 0;
  }
  getCurrentPlayerSymbol() {
    if (this.currentPlayer) return "x";
    return "o";
  }

  nextTurn(rowIndex, columnIndex) {
    if(this.playingField[rowIndex][columnIndex] == null) {
      this.playingField[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
      this.currentPlayer = !(this.currentPlayer);
      this.turns++;
    }
  }

  isFinished() {
    if (this.getWinner() || this.isDraw()) return true;
    return false;
  }

  getWinner() {
    for (let i = 0; i < 3; i++) {
      if (this.playingField[i][0] == this.playingField[i][1] && this.playingField[i][0] == this.playingField[i][2]) {
        return this.playingField[i][0];
      }
    }
    for (let i = 0; i < 3; i++) {
      if (this.playingField[0][i] == this.playingField[1][i] && this.playingField[0][i] == this.playingField[2][i]) {
        return this.playingField[0][i];
      }
    }
    if (this.playingField[0][0] == this.playingField[1][1] && this.playingField[0][0] == this.playingField[2][2]) return this.playingField[0][0];
    if (this.playingField[0][2] == this.playingField[1][1] && this.playingField[0][2] == this.playingField[2][0]) return this.playingField[0][2];
    return null;
  }

  noMoreTurns() {
    return this.turns >= 9 ? true : false;
  }

  isDraw() {
    if(this.noMoreTurns() && this.getWinner() == null) return true;
    else return false;
    }

    getFieldValue(rowIndex, colIndex) {
      return this.playingField[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
