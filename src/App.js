import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ChartWrapper from './ChartWrapper';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light">
          <Navbar.Brand>CreateD3App</Navbar.Brand>
        </Navbar>
        <Container>
          <Row>
            <Col md={6} xs={12}><ChartWrapper /></Col>
            <Col md={6} xs={12}></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
