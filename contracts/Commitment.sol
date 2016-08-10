import "Resource.sol";
import "ResourceType.sol";

contract Commitment {
  Resource resource;
  ResourceType resourceType;

  function Commitment(Resource _resource) {
    // constructor
    resource = _resource;
    // resourceType = _resource.getResourceType();
    // use resource registry? 
  }
}
