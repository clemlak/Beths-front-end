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

function CreateBet() {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <CardBody>
              <FormGroup>
                <Label for="opponent">Your opponent</Label>
                <Input type="text" name="opponent" id="opponent" placeholder="0x0000..." />
              </FormGroup>
              <FormGroup>
                <Label for="amount">The amount of the bet</Label>
                <Input type="number" name="amount" id="amount" placeholder="200" />
              </FormGroup>
              <FormGroup>
                <Label for="currency">The currency of the bet</Label>
                <Input type="text" name="currency" id="currency" placeholder="0x0000" />
              </FormGroup>
              <FormGroup>
                <Label for="description">The description of the bet</Label>
                <Input type="textarea" name="description" id="description" placeholder="Do this until next Friday!" />
              </FormGroup>
              <Button color="primary" block>
                Create bet
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CreateBet;
