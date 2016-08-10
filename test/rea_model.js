contract('ReaModel', function(accounts) {
  it("should assert true", function(done) {
    var rea_model = ReaModel.at(ReaModel.deployed_address);
    assert.isTrue(true);
    done();
  });
});
