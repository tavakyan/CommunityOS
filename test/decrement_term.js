contract('DecrementTerm', function(accounts) {
  it("should assert true", function(done) {
    var decrement_term = DecrementTerm.at(DecrementTerm.deployed_address);
    assert.isTrue(true);
    done();
  });
});
