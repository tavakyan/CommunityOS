contract('IncrementExchangeCommitment', function(accounts) {
  it("should assert true", function(done) {
    var increment_exchange_commitment = IncrementExchangeCommitment.at(IncrementExchangeCommitment.deployed_address);
    assert.isTrue(true);
    done();
  });
});
