contract('Term', function(accounts) {
  it("should assert true", function(done) {
    var term = Term.at(Term.deployed_address);
    assert.isTrue(true);
    done();
  });
});
