contract('Resource', function(accounts) {
  it("should assert true", function(done) {
    var resource = Resource.at(Resource.deployed_address);
    assert.isTrue(true);
    done();
  });
});
