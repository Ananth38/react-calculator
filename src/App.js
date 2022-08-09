import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import ClearButton from './components/ClearButton';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      input: '',
      firstNumber: '',
      secondNumber: '',
      operator: "",
      result: '',
      isActionPerformed: false
    }
  }

  addToInput = val => {
    if (!this.state.isActionPerformed) {
      this.setState(prevState => {
        return {
          ...prevState,
          firstNumber: prevState.firstNumber + val
        }
      })
    } else {
      this.setState(prevState => {
        return {
          ...prevState,
          secondNumber: prevState.secondNumber + val
        }
      })
    }
  }

  addDecimal = val => {
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + val })
    }
  }

  clearInput = () => {
    this.setState({
      isActionPerformed: false,
      input: "",
      firstNumber: '',
      secondNumber: '',
      operator: "",
      result: ""
    })
  }

  add = () => {
    this.setState({ isActionPerformed: true });
    this.state.operator = "+"
  }

  sub = () => {
    this.setState({ isActionPerformed: true });
    this.state.operator = "-"
  }
  multi = () => {
    this.setState({ isActionPerformed: true });
    this.state.operator = "*"
  }

  divid = () => {
    this.setState({ isActionPerformed: true });
    this.state.operator = "/"
  }

  operat = () => {
    if (this.state.operator == "+") {
      this.setState({
        result:
          parseInt(this.state.firstNumber) +
          parseInt(this.state.secondNumber)
      });
    }
    else if (this.state.operator == "-") {
      this.setState({
        result:
        parseInt(this.state.firstNumber) -
        parseInt(this.state.secondNumber)
      });
    }
    else if (this.state.operator == "*") {
      this.setState({
        result:
        parseInt(this.state.firstNumber) *
        parseInt(this.state.secondNumber)
      });
    }
    else if (this.state.operator == "/") {
      this.setState({
        result:
        parseInt(this.state.firstNumber) /
        parseInt(this.state.secondNumber)
      });
    }
  };

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <div className='calc-wrapping'>

          <div>
            <Input>
              {this.state.input}
              {this.state.firstNumber}
              {this.state.operator}
              {this.state.secondNumber}
              {this.state.result && (`= ${this.state.result}`)}
            </Input>
          </div>
          <div className='row'>
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.divid}>/</Button>
          </div>
          <div className='row'>
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.multi}>*</Button>
          </div>
          <div className='row'>
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.add}>+</Button>
          </div>
          <div className='row'>
            <Button handleClick={this.addDecimal}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={this.operat}>=</Button>
            <Button handleClick={this.sub}>-</Button>
          </div>
          <div className='row'>
            <ClearButton handleClear={this.clearInput}>Clear</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;