contract('IncrementConversionCommitment', function(accounts) {
  it("should assert true", function(done) {
    var increment_conversion_commitment = IncrementConversionCommitment.at(IncrementConversionCommitment.deployed_address);
    assert.isTrue(true);
    done();
  });
});
