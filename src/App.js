import React, { Component } from 'react';
import IsHeader from './components/IsHeader';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Isbody from './components/Isbody';
class App extends Component {
  render() {
    return (

      <Router>
        <React.Fragment>
          <IsHeader />
          <Container>
              <Isbody/>
          </Container>
        </React.Fragment>

      </Router>
     
    );
  }
}

export default App;
