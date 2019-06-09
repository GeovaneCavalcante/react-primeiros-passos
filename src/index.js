import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import Button from './Button';

import './style.scss';

class App extends Component {
  state = {
    counter: 0,
  };

  //
  handlerClick = () => {
    this.setState(state => ({ counter: state.counter + 1 }));
  };

  render() {
    return (
      <Fragment>
        <h1>Olá mundo</h1>
        <h2>{this.state.counter}</h2>
        <Button onClick={this.handlerClick}>Somar</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
