contract('Contract', function(accounts) {
  it("should assert true", function(done) {
    var contract = Contract.at(Contract.deployed_address);
    assert.isTrue(true);
    done();
  });
});
