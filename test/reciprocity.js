contract('Reciprocity', function(accounts) {
  it("should assert true", function(done) {
    var reciprocity = Reciprocity.at(Reciprocity.deployed_address);
    assert.isTrue(true);
    done();
  });
});
