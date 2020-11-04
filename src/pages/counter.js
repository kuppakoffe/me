import React from 'react';

class Counter extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  handleButton = (type) => {
      const {counter} = this.state;
      if (type === 'minus') { this.setState({counter: counter-1})}
      if (type === 'add') { this.setState({counter: counter+1})}
  }

  render() {
    const { counter } = this.state;
    return (
      <div>
        Hello Counter : {counter}
        <br />
        <button onClick={()=>this.handleButton('add')}>plus</button>
        <button onClick={()=>this.handleButton('minus')}>minus</button>
      </div>
    );
  }
}

export default Counter;
