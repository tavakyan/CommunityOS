import "Duality.sol";

contract ConversionDuality is Duality {
  event DecrementConversion;
  event IncrementConversion;

  function ConversionDuality() {
    // constructor
  }

  function Decrement() {
    DecrementConversion();
  }

  function Increment() {
    IncrementConversion(); 
  }
}
