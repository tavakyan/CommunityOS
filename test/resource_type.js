contract('ResourceType', function(accounts) {
  it("should assert true", function(done) {
    var resource_type = ResourceType.at(ResourceType.deployed_address);
    assert.isTrue(true);
    done();
  });
});
