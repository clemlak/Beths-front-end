import {
  abi,
} from '../contracts/testTokenContract';

import {
  address as bethsAddress,
} from '../contracts/bethsContract';

function getAllowance(lib, address, owner, spender) {
  const contract = new lib.eth.Contract(abi, address);

  return contract.methods.allowance(owner, spender).call()
    .then(allowance => allowance)
    .catch(err => err);
}

function setAllowance(lib, account, address, amount) {
  const contract = new lib.eth.Contract(abi, address);

  return contract.methods.approve(bethsAddress, amount).send({
    from: account,
  });
}

export {
  getAllowance,
  setAllowance,
};
