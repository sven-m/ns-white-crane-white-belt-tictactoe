export type Player = 'x' | 'o';

export type Cell = (
  'topleft'
  | 'top'
  | 'topright'
  | 'left'
  | 'center'
  | 'right'
  | 'bottomleft'
  | 'bottom'
  | 'bottomright'
);

type Board = {
  [k in Cell]: string;
};

export class TicTacToeGame {
  private _currentPlayer: Player;
  private _board: Board;

  constructor() {
    this._currentPlayer = 'x';
    this._board = {
      topleft: ' ',
      top: ' ',
      topright: ' ',
      left: ' ',
      center: ' ',
      right: ' ',
      bottomleft: ' ',
      bottom: ' ',
      bottomright: ' ',
    };
  }

  get currentPlayer(): Player {
    return this._currentPlayer;
  }

  play(cell: Cell) {
    this._board[cell] = this.currentPlayer;

    this._currentPlayer = this.currentPlayer == 'x' ? 'o' : 'x';
  }

  get board(): string {
    return `
    ${this._board.topleft}|${this._board.top}|${this._board.topright}
    -+-+-
    ${this._board.left}|${this._board.center}|${this._board.right}
    -+-+-
    ${this._board.bottomleft}|${this._board.bottom}|${this._board.bottomright}
    `;
  }
};
