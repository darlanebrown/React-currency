import React, { Component } from 'react';
import './Calculator.css';

import Button from '../Button/Button.js';

class Calculator extends Component {
  saySomething = () => {
    console.log('meow');
  }
  render() {
    return (
      <div className="Calculator">
        <div className="Calculator-display">
          {this.props.number || 0}
        </div>
        <div className="Calculator-keypad">
          {/* TODO Will need to add events to every button here... */}
          <Button>9</Button>
          <Button>8</Button>
          <Button onClick={this.saySomething}>7</Button>
          <Button>6</Button>
          <Button>5</Button>
          <Button>4</Button>
          <Button>3</Button>
          <Button>2</Button>
          <Button>1</Button>
          <Button onClick={() => this.props.testevent(7)}>0</Button>
          <Button type="red">=</Button>
          <Button type="red">.</Button>
        </div>
        <div className="Calculator-operations">
          <Button type="yellow">÷</Button>
          <Button type="yellow">×</Button>
          <Button type="yellow">-</Button>
          <Button type="yellow">+</Button>
        </div>
      </div>
    );
  }
}

export default Calculator;
