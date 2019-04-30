import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    let className = 'Button';

    if (this.props.type === 'red') {
      className = 'Button Button--red';
    }
    if (this.props.type === 'green') {
      className = 'Button Button--green';
    }
    if (this.props.type === 'blue') {
      className = 'Button Button--blue';
    }
    if (this.props.type === 'yellow') {
      className = 'Button Button--yellow';
    }

    return (
      <div className={className} onClick={this.props.onClick}>
        {this.props.children}
      </div>
    );
  }
}

export default Button;

function eventClick (event) {
  var bar = event.toElement.id;
  if(bar == 'first-currency') {
    alert("1.13 EUR = 1 USD");
  } else if (bar == 'second-currency') {
    alert("1 USD = 1 USD");
  } else if (bar == 'third-currency') {
    alert("1 AUD = 0.722 USD");
  } else if (bar == 'fourth-currency') {
    alert("1 GBP = 1.31 USD");
  } else {
    alert("1 BRL R = 0.26 USD");
  }
