contract('DecrementConversionEvent', function(accounts) {
  it("should assert true", function(done) {
    var decrement_conversion_event = DecrementConversionEvent.at(DecrementConversionEvent.deployed_address);
    assert.isTrue(true);
    done();
  });
});
