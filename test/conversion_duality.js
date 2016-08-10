contract('ConversionDuality', function(accounts) {
  it("should assert true", function(done) {
    var conversion_duality = ConversionDuality.at(ConversionDuality.deployed_address);
    assert.isTrue(true);
    done();
  });
});
