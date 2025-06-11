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

export type Winner = {
  winner: Player;
}
export type Status = 'playing' | Winner | 'draw';

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

  get unplayedCells(): Cell[] {
    const cells = Object
      .keys(this._board)
      .filter((key) => this._board[key as Cell] == ' ')
    return cells as Cell[]
  }

  get status(): Status {
    const lines: Cell[][] = [
      ['topleft', 'left', 'bottomleft'],
      ['top', 'center', 'bottom'],
      ['topright', 'right', 'bottomright'],

      ['topleft', 'top', 'topright'],
      ['left', 'center', 'right'],
      ['bottomleft', 'bottom', 'bottomright'],

      ['topleft', 'center', 'bottomright'],
      ['bottomleft', 'center', 'topright'],
    ]

    for (const line of lines) {
      const lineString = line.map((cell) => this._board[cell]).join('')

      if (lineString === 'xxx') {
        return { winner: 'x' }
      }

      if (lineString === 'ooo') {
        return { winner: 'o' }
      }
    }

    return this.unplayedCells.length > 0 ? 'playing' : 'draw';
  }
};

export class TicTacToeBot {
  private _delay: () => Promise<void>;

  constructor(delay: () => Promise<void> = () => new Promise(resolve => setTimeout(resolve, 2000))) {
    this._delay = delay
  }

  async play(game: TicTacToeGame) {
    console.log(game.board)

    while (game.status == 'playing') {
      const unplayedCells = game.unplayedCells
      const randomIndex = Math.floor(Math.random() * unplayedCells.length)
      const cell = unplayedCells[randomIndex]

      await this._delay()
      game.play(cell)
      console.log(game.board)
    }

    console.log(game.status)
  }
}

if (require.main === module) {
  const game = new TicTacToeGame()
  const bot = new TicTacToeBot()

  bot.play(game)
}
