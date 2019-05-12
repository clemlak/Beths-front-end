import React, { useState } from 'react';
import {
  Card,
  Row,
  Col,
  Input,
  FormGroup,
  Button,
} from 'reactstrap';

function Username() {
  return (
    <Card>
      <FormGroup>
        <Input />
        <Button color="primary">
          Claim username
        </Button>
      </FormGroup>
    </Card>
  );
}

export default Username;
