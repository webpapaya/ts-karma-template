import  { expect as bla } from 'chai';

class Cell {
  private isAlive: boolean;

  evolveByLivingNeighborCount(neighbors: number) {
    this.isAlive = neighbors === 3;
  }

  alive() {
    return this.isAlive;
  }
}

describe("game of life mob", () => {

  it('cell without neighbors should die', () => {
    let cell = new Cell();
    cell.evolveByLivingNeighborCount(0);
    expect(cell.alive()).toBeFalse();
  });

  it('dead cell with 3 neighbors comes alive', () => {
    let cell = new Cell();
    cell.evolveByLivingNeighborCount(3);
    expect(cell.alive()).toBeTrue();
  })
});
