contract('IncrementExchangeEvent', function(accounts) {
  it("should assert true", function(done) {
    var increment_exchange_event = IncrementExchangeEvent.at(IncrementExchangeEvent.deployed_address);
    assert.isTrue(true);
    done();
  });
});
