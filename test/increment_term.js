contract('IncrementTerm', function(accounts) {
  it("should assert true", function(done) {
    var increment_term = IncrementTerm.at(IncrementTerm.deployed_address);
    assert.isTrue(true);
    done();
  });
});
