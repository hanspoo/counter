
import React from 'react';
import { Card, Button , Icon } from 'semantic-ui-react'
import * as actions from '../redux/actions';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

class Counter extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Card>
       <Card.Content>
        <h1>Counter</h1>
        <h2>{this.props.counter}</h2>

       </Card.Content>
       <Card.Content extra>
         <div className='ui two buttons'>
           <Button onClick={this.props.decrement}> <Icon name='minus' /></Button>
           <Button onClick={this.props.increment}> <Icon name='plus' /></Button>
         </div>
       </Card.Content>
      </Card>
    );
  }
}


function mapStateToProps(state) {
  return { counter: state }
}

function mapDispatchToProps(dispatch) {
  return {
    increment: bindActionCreators(actions.increment, dispatch),
    decrement: bindActionCreators(actions.decrement, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
