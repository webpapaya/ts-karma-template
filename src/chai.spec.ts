import  { expect as bla } from 'chai';

class Cell {
  evolveByLivingNeighbourCount(neighbours: number) {

  }

  alive() : boolean{
    return undefined;
  }
}

describe("game of life mob", () => {

  it('cell without neighbors should die', () => {
    let cell = new Cell();
    cell.evolveByLivingNeighbourCount(0);
    expect(cell.alive()).toBeFalse()
  });

});
