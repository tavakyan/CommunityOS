import "Resource.sol";

contract ResourceType {
  Resource[] resources;

  function ResourceType() {
    // constructor
  }

  function addResource(Resource resource) returns (uint) {
    uint numResources = resources.push(resource);
    return numResources;
  }
}
