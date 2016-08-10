contract('IncrementConversionEvent', function(accounts) {
  it("should assert true", function(done) {
    var increment_conversion_event = IncrementConversionEvent.at(IncrementConversionEvent.deployed_address);
    assert.isTrue(true);
    done();
  });
});
