import {
  abi,
  address,
} from '../contracts/bethsContract';

function createBet(lib, account, opponent, mediator, amount, currency, deadline) {
  const beths = new lib.eth.Contract(abi, address);

  return beths.methods.createBet(
    opponent,
    mediator,
    amount,
    currency,
    new Date(deadline).getTime() / 1000,
  ).send({
    from: account,
  });
}

export {
  createBet,
};
