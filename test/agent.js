contract('Agent', function(accounts) {
  it("should assert true", function(done) {
    var agent = Agent.at(Agent.deployed_address);
    assert.isTrue(true);
    done();
  });
});
