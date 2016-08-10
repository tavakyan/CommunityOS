import "Event.sol";
import "InternalAgent.sol";
import "Resource.sol";
import "ConversionDuality.sol";

contract IncrementConversionEvent is Event {
  Resource resource;
  InternalAgent internalAgent;
  ConversionDuality conversionDuality;

  function IncrementConversionEvent() {
    // constructor
  }
}
