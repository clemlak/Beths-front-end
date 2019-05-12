import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';

function ViewBet({
  match,
}) {
  const {
    id,
  } = match.params;

  return (
    <Container>
      <Row>
        <Col>
          <h1>
            View bet {id}
          </h1>
        </Col>
      </Row>
    </Container>
  );
}

export default ViewBet;
