import  { expect as bla } from 'chai';

describe("a testsuite with chai expections", () => {

  it('should execute this test', () => {
    bla([1,23, 4]).to.be.ordered;
    //expect(true).toBeTruthy();
  });

});
