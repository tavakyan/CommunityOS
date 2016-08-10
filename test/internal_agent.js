contract('InternalAgent', function(accounts) {
  it("should assert true", function(done) {
    var internal_agent = InternalAgent.at(InternalAgent.deployed_address);
    assert.isTrue(true);
    done();
  });
});
