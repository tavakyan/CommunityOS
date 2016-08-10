contract('Duality', function(accounts) {
  it("should assert true", function(done) {
    var duality = Duality.at(Duality.deployed_address);
    assert.isTrue(true);
    done();
  });
});
