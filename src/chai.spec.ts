import  { expect as bla } from 'chai';

describe("a testsuite with chai expections", () => {

  it('cell without neighbors should die', () => {

    let cell = new Cell();
    cell.evolveByLivingNeighbourCount()
    expect(cell.alive()).toBeFalse()
  });

});
