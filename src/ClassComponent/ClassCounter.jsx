import React, { Component } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

 class ClassCounter extends Component {

    constructor(){
        super();

        this.state = {
            counter : 0
        }


    }

  render() {

    let { counter } = this.state;

    const handleIncreament = () => {
        this.setState({
            counter : this.state.counter + 1
        });
    }

    const handleDecreament = () => {
        this.setState({
            counter : counter - 1
        });
    }




    return (
        <Container>
        <Row>
            <Col md={4} className='m-auto d-block'>
                <Card className='shadow my-5 '>
                    <Card.Body>
                        <Button onClick={ handleIncreament } variant='info'>++</Button>&nbsp;
                        <Button onClick={ handleDecreament } variant='info'>--</Button>
                        <h1>{ counter }</h1>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    )
  }
};

export default ClassCounter;
