contract ReaModel {
  string name;

  function ReaModel(string _name) {
    name = _name;
  }

  function getName() constant returns (string) {
    return name;
  }
}
