import "Reciprocity.sol";
import "DecrementExchangeCommitment.sol";
import "IncrementExchangeCommitment.sol";

contract ExchangeReciprocity is Reciprocity {
  /*event DecrementExchange;
  event IncrementExchange;*/

  DecrementExchangeCommitment[] decrementExchangeCommitment;
  IncrementExchangeCommitment[] incrementExchangeCommitment;

  function ExchangeReciprocity() {
    // constructor
  }
}
