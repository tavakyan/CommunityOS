contract('ExchangeReciprocity', function(accounts) {
  it("should assert true", function(done) {
    var exchange_reciprocity = ExchangeReciprocity.at(ExchangeReciprocity.deployed_address);
    assert.isTrue(true);
    done();
  });
});
