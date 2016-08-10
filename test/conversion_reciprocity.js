contract('ConversionReciprocity', function(accounts) {
  it("should assert true", function(done) {
    var conversion_reciprocity = ConversionReciprocity.at(ConversionReciprocity.deployed_address);
    assert.isTrue(true);
    done();
  });
});
