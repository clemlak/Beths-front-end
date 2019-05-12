import React from 'react';
import Web3Provider from 'web3-react';
import Web3 from 'web3';
import connectors from './connectors';

import App from '../app';

function Web3Wrapper() {
  return (
    <Web3Provider
      connectors={connectors}
      libraryName="web3.js"
      web3Api={Web3}
    >
      <App />
    </Web3Provider>
  );
}

export default Web3Wrapper;
