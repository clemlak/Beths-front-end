import React, { useState } from 'react';
import {
  Container,
  Card,
  CardBody,
  Row,
  Col,
  Input,
  Button,
  FormGroup,
  Label,
} from 'reactstrap';
import {
  useWeb3Context,
} from 'web3-react';

import {
  createBet,
} from '../../services/beths';

import {
  getAllowance,
  setAllowance,
} from '../../services/erc20';

function CreateBet() {
  const [opponent, setOpponent] = useState('');
  const [mediator, setMediator] = useState('');
  const [amount, setAmount] = useState('');
  const [currentAllowance, setCurrentAllowance] = useState('');
  const [newAllowance, setNewAllowance] = useState('');
  const [currency, setCurrency] = useState('0x0c4d96Ba57556A86b4e21dFF2D9C511308f58074');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');

  const web3 = useWeb3Context();

  if (web3.active && currentAllowance === '') {
    getAllowance(web3.library, currency, web3.account, '0x857192A55Bc4AEEd25035D483c8181EE7d30f88c')
      .then((allowance) => {
        setCurrentAllowance(allowance.toString());
        console.log(allowance.toString());
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Container>
      <Row>
        <Col sm="6">
          <Card>
            <CardBody>
              <FormGroup>
                <Label for="opponent">Your opponent</Label>
                <Input
                  type="text"
                  name="opponent"
                  id="opponent"
                  placeholder="0x0000..."
                  onChange={e => setOpponent(e.target.value)}
                  value={opponent}
                />
              </FormGroup>
              <FormGroup>
                <Label for="mediator">Your mediator</Label>
                <Input
                  type="text"
                  name="mediator"
                  id="mediator"
                  placeholder="0x0000..."
                  onChange={e => setMediator(e.target.value)}
                  value={mediator}
                />
              </FormGroup>
              <FormGroup>
                <Label for="amount">The amount of the bet</Label>
                <Input
                  type="number"
                  name="amount"
                  id="amount"
                  placeholder="200"
                  onChange={e => setAmount(e.target.value)}
                  value={amount}
                />
              </FormGroup>
              <FormGroup>
                <Label for="currency">The currency of the bet</Label>
                <Input
                  type="text"
                  name="currency"
                  id="currency"
                  placeholder="0x0000"
                  onChange={e => setCurrency(e.target.value)}
                  value={currency}
                />
              </FormGroup>
              <FormGroup>
                <Label for="description">The description of the bet</Label>
                <Input
                  type="textarea"
                  name="description"
                  id="description"
                  placeholder="Do this until next Friday!"
                  onChange={e => setDescription(e.target.value)}
                  value={description}
                />
              </FormGroup>
              <FormGroup>
                <Label for="deadline">The deadline of the bet</Label>
                <Input
                  type="date"
                  name="deadline"
                  id="deadline"
                  onChange={e => setDeadline(e.target.value)}
                  value={deadline}
                />
              </FormGroup>
              {currentAllowance === '0' || currentAllowance === '' ? (
                <div>
                  <FormGroup>
                    <Label for="newAllowance">Please give us permission to use your funds</Label>
                    <Input
                      type="number"
                      name="newAllowance"
                      id="newAllowance"
                      onChange={e => setNewAllowance(e.target.value)}
                      value={newAllowance}
                    />
                  </FormGroup>
                  <Button
                    color="primary"
                    onClick={() => setAllowance(
                      web3.library,
                      web3.account,
                      currency,
                      newAllowance,
                    )}
                    block
                  >
                    Approve allowance
                  </Button>
                </div>
              ) : (
                <Button
                  color="primary"
                  onClick={() => createBet(
                    web3.library,
                    opponent,
                    mediator,
                    amount,
                    currency,
                    deadline,
                  )}
                  block
                >
                  Create bet
                </Button>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CreateBet;
