export type Player = 'x';

export class TicTacToeGame {
  private _currentPlayer: Player

  constructor() {
    this._currentPlayer = 'x'
  }

  get currentPlayer(): Player {
    return this._currentPlayer
  }

  get board(): string {
    return `
     | | 
    -+-+-
     | | 
    -+-+-
     | | 
    `
  }
};
