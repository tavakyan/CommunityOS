contract('ExternalAgent', function(accounts) {
  it("should assert true", function(done) {
    var external_agent = ExternalAgent.at(ExternalAgent.deployed_address);
    assert.isTrue(true);
    done();
  });
});
