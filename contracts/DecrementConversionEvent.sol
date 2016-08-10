import "Event.sol";
import "Resource.sol";
import "ConversionDuality.sol";

contract DecrementConversionEvent is Event {
  ConversionDuality conversionDuality;
  Resource resource;

  function DecrementConversionEvent(Resource _resource) {
    // constructor
    resource = _resource;
    conversionDuality = new ConversionDuality();
  }
}
