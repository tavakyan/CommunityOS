contract('DecrementConversionCommitment', function(accounts) {
  it("should assert true", function(done) {
    var decrement_conversion_commitment = DecrementConversionCommitment.at(DecrementConversionCommitment.deployed_address);
    assert.isTrue(true);
    done();
  });
});
