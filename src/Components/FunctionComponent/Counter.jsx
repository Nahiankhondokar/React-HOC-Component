import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import CounterManage from '../../Hoc/CounterManage';

const Counter = (props) => {


  return (
    <>
    <Container>
        <Row>
            <Col md={4} className='m-auto d-block'>
                <Card className='shadow my-5 '>
                    <Card.Body>
                        <Button onClick={ props.increment } variant='info'>++</Button>&nbsp;
                        <Button onClick={ props.decrement } variant='info'>--</Button>
                        <h1>{ props.counter }</h1>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    </>
  )
};

export default CounterManage(Counter);