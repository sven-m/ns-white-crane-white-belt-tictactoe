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

describe('Player X can win with a vertical line', () => {
  test('Players\' turns must alternate', () => {
    const game = new TicTacToeGame();
    game.play('topleft');
    expect(game.currentPlayer).toBe('o');
  });

  test('If no vertical line of 3 Xs has been drawn the game is still ongoing', () => {
    expect(new TicTacToeGame().status).toBe('playing');
  });

  test('A vertical line of 3 Xs is a win for player X', () => {
    const game = new TicTacToeGame();
    game.play('topleft');
    game.play('center');
    game.play('left');
    game.play('bottomright');
    game.play('bottomleft');

    expect(game.status).toStrictEqual({ winner: 'x' });
  });
});

describe('Player O can win with a horizontal line', () => {
  test('A horizontal line of 3 Os is a win for player O', () => {
    const game = new TicTacToeGame();
    game.play('topleft');
    game.play('left');
    game.play('topright');
    game.play('center');
    game.play('bottomleft');
    game.play('right');

    expect(game.status).toStrictEqual({ winner: 'o' });
  });
});

describe('Player X can win with a diagonal line', () => {
  test('A horizontal line of 3 Xs is a win for player X', () => {
    const game = new TicTacToeGame();
    game.play('topleft');
    game.play('left');
    game.play('center');
    game.play('bottomleft');
    game.play('bottomright');

    expect(game.status).toStrictEqual({ winner: 'x' });
  });
});