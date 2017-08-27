import React, { Component } from 'react';
import './App.css';
import { Card, Button , Icon } from 'semantic-ui-react'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = { counter: 0 }
  }

  substract() {
    this.setState({ counter: this.state.counter - 1});
  }
  add() {
    this.setState({ counter: this.state.counter + 1});
  }
  render() {
    return (
      <div className="App">
        <Card>
         <Card.Content>
          <h1>Counter</h1>
          <h2>{this.state.counter}</h2>

         </Card.Content>
         <Card.Content extra>
           <div className='ui two buttons'>
             <Button onClick={this.substract.bind(this)}> <Icon name='minus' /></Button>
             <Button onClick={this.add.bind(this)}> <Icon name='plus' /></Button>
           </div>
         </Card.Content>
       </Card>

      </div>
    );
  }
}

export default App;