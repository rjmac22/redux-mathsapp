import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import { connect }  from 'react-redux';
import { bindActionCreators } from 'redux';
import { incrementNumber, decrementNumber } from '../actions/index';

class Number extends Component {
  render() {
    console.log('from the props ', this.props)
    return (
      <div>
        <h1>This is the Number Component</h1>
        <div className="row col-sm-offset-5">{this.props.num}</div>
        <div className="row col-sm-offset-4">
          <Button bsStyle="primary" onClick={()=>this.props.incrementNumber(this.props.num)}>Increment</Button>
  
          <Button bsStyle="danger" className="col-sm-offset-1" onClick={() => this.props.decrementNumber(this.props.num)}>Decrement</Button>

        </div>

      </div>
    );
  }
}

function mapStateToProps(state){
  console.log('mapStateToProps - Number.js', state);
    
  return {
    num: state.num
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ incrementNumber, decrementNumber }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps )(Number);
