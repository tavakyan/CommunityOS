contract('Event', function(accounts) {
  it("should assert true", function(done) {
    var event = Event.at(Event.deployed_address);
    assert.isTrue(true);
    done();
  });
});
