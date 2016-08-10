contract('Commitment', function(accounts) {
  it("should assert true", function(done) {
    var commitment = Commitment.at(Commitment.deployed_address);
    assert.isTrue(true);
    done();
  });
});
