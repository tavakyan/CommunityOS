contract('ExchangeDuality', function(accounts) {
  it("should assert true", function(done) {
    var exchange_duality = ExchangeDuality.at(ExchangeDuality.deployed_address);
    assert.isTrue(true);
    done();
  });
});
