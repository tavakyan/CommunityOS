import "InternalAgent.sol";
import "ExternalAgent.sol";
import "DecrementExchangeEvent.sol";

contract DecrementExchangeCommitment {
  InternalAgent internalAgent;
  ExternalAgent externalAgent;
  DecrementExchangeEvent[] decrementExchangeEvent;

  function DecrementExchangeCommitment() {
    // constructor
  }
}
