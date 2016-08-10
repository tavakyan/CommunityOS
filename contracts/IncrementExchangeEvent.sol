import "Resource.sol";
import "InternalAgent.sol";
import "ExternalAgent.sol";
import "ExchangeDuality.sol";

contract IncrementExchangeEvent {
  Resource resource;
  InternalAgent internalAgent;
  ExternalAgent externalAgent; 
  ExchangeDuality exchangeDuality;

  function IncrementExchangeEvent(Resource _resource) {
    // constructor
    resource = _resource;
  }
}
