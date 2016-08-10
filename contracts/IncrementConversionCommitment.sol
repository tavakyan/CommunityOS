import "Commitment.sol";
import "ConversionReciprocity.sol";
import "IncrementConversionEvent.sol";

contract IncrementConversionCommitment is Commitment {
  ConversionReciprocity conversionReciprocity;
  IncrementConversionEvent[] incrementConversionEvent;
  
  function IncrementConversionCommitment() {
    // constructor
  }
}
