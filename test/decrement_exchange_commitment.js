contract('DecrementExchangeCommitment', function(accounts) {
  it("should assert true", function(done) {
    var decrement_exchange_commitment = DecrementExchangeCommitment.at(DecrementExchangeCommitment.deployed_address);
    assert.isTrue(true);
    done();
  });
});
