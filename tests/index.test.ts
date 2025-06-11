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

});
