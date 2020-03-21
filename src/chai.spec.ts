import  { expect as bla } from 'chai';

type Viability = 'dead' | 'alive';

class Cell {
  public readonly viability: Viability;

  constructor(viability: Viability) {
    this.viability = viability;
  }

  evolveByLivingNeighborCount(neighbors: number) {
    let alive: Viability = neighbors === 3 ? 'alive' : 'dead';
    return new Cell(alive);
  }
}

describe('game of life mob', () => {

  it('alive cell without neighbors should die', () => {
    let cell = new Cell('alive');
    let newCell = cell.evolveByLivingNeighborCount(0);
    expect(newCell.viability).toBe('dead');
  });

  it('dead cell with 3 neighbors comes alive', () => {
    let cell = new Cell('dead');
    let newCell = cell.evolveByLivingNeighborCount(3);
    expect(newCell.viability).toBe('alive');
  });

});
