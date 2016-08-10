import "ReaModel.sol";
import "Agent.sol";

contract Contract is ReaModel {
  address agent1;
  address agent2;
  address[] agents;

  function Contract(address _agent1, address _agent2) {
    // constructor
  }

  // returns number of agents
  function addAgent(Agent agentN) returns (uint numAgents) {
    numAgents = agents.push(agentN);
    return numAgents;
  }
}
