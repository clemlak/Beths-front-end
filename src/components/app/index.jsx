import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import {
  useWeb3Context,
} from 'web3-react';

import CreateBet from '../createBet';
import ViewBet from '../viewBet';

function App() {
  const web3 = useWeb3Context();

  if (!web3.error && !web3.active) {
    console.log('Activating MetaMask...');
    web3.setConnector('MetaMask');
  }

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/create" component={CreateBet} />
          <Route path="/view/:id" component={ViewBet} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
