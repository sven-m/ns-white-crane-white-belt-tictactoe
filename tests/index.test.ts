import { TicTacToeGame } from '../src/main';

describe('Starting a new game', () => {
  test('The board starts empty', () => {
    expect(new TicTacToeGame().board).toBe(`
     | | 
    -+-+-
     | | 
    -+-+-
     | | 
    `);
  });

  test('The first player is X', () => {
    expect(new TicTacToeGame().currentPlayer).toBe('x');
  });

  test('The first square played will become an X', () => {
    const game = new TicTacToeGame();

    game.play('topleft');

    expect(game.board).toBe(`
    x| | 
    -+-+-
     | | 
    -+-+-
     | | 
    `)
  });
});

describe('Player X can win', () => {
  test('Players\' turns must alternate', () => {
    const game = new TicTacToeGame();
    game.play('topleft');
    expect(game.currentPlayer).toBe('o');
  });
});