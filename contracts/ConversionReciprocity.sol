import "Reciprocity.sol";

contract ConversionReciprocity is Reciprocity {
  event DecrementConversion;
  event IncrementConversion;

  function ConversionReciprocity() {
    // constructor
  }

  function Decrement() {
    DecrementConversion();
  }

  function Increment() {
    IncrementConversion();
  }
}
