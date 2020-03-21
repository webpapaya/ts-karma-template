import  { expect as bla } from 'chai';

class Cell {
  private readonly isAlive: boolean;

  constructor(alive: boolean) {
    this.isAlive = alive;
  }

  evolveByLivingNeighborCount(neighbors: number) {
    let alive = neighbors === 3;
    return new Cell(alive);
  }

  alive() {
    return this.isAlive;
  }
}

describe("game of life mob", () => {

  it('cell without neighbors should die', () => {
    let cell = new Cell(false);
    let newCell = cell.evolveByLivingNeighborCount(0);
    expect(newCell.alive()).toBeFalse();
  });

  it('dead cell with 3 neighbors comes alive', () => {
    let cell = new Cell(false);
    let newCell = cell.evolveByLivingNeighborCount(3);
    expect(newCell.alive()).toBeTrue();
  })
});
