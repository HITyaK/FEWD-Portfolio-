import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    // Initialization
    this.state = {
      count: 0
    };
    console.log('Constructor: Initialization');
  }

  // Mounting
  componentDidMount() {
    console.log('ComponentDidMount: Component mounted');
  }

  // Updating
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('ComponentDidUpdate: Component updated');
    }
  }

  // Unmounting
  componentWillUnmount() {
    console.log('ComponentWillUnmount: Component will be unmounted');
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  decrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  }

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement} style={{ marginLeft: '10px' }}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
