contract('DecrementExchangeEvent', function(accounts) {
  it("should assert true", function(done) {
    var decrement_exchange_event = DecrementExchangeEvent.at(DecrementExchangeEvent.deployed_address);
    assert.isTrue(true);
    done();
  });
});
