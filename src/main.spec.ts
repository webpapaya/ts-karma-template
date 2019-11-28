
describe("a testsuite with jasmin expectations", () => {
  
  it('should execute this test', () => {
    expect(true).toBeTruthy();
  });

  it('should use jasmin expect', () => {
    expect("Roland Germ").toStartWith("Roland");
  });

});
