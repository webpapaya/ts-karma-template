import  { expect as bla } from 'chai';

type Viability = 'dead' | 'alive';

class Cell {
  private readonly isAlive: Viability;

  constructor(alive: Viability) {
    this.isAlive = alive;
  }

  evolveByLivingNeighborCount(neighbors: number) {
    let alive: Viability = neighbors === 3 ? 'alive' : 'dead';
    return new Cell(alive);
  }

  alive() {
    return this.isAlive;
  }
}

describe("game of life mob", () => {

  it('alive cell without neighbors should die', () => {
    let cell = new Cell("alive");
    let newCell = cell.evolveByLivingNeighborCount(0);
    expect(newCell.alive()).toBe('dead');
  });

  it('dead cell with 3 neighbors comes alive', () => {
    let cell = new Cell("dead");
    let newCell = cell.evolveByLivingNeighborCount(3);
    expect(newCell.alive()).toBe('alive');
  })
});
