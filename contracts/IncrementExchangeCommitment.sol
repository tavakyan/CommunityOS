import "Commitment.sol";
import "InternalAgent.sol";
import "ExternalAgent.sol";
import "IncrementExchangeEvent.sol";

contract IncrementExchangeCommitment is Commitment {
  InternalAgent internalAgent;
  ExternalAgent externalAgent;
  IncrementExchangeEvent[] incrementExchangeEvents;
  
  function IncrementExchangeCommitment() {
    // constructor
  }
}
