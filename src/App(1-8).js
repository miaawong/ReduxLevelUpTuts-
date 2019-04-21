import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// const welcome = "Welcome to react!";
//defining a class named app, that class extends component (brought in from react)
class App extends Component {
  // lifecycle
  // props - components' parameters 
  // constructor(props) {
  //   // used to access and call functions on an object's parent 
  //   super(props);
  //   console.log('constructor')
  // }

  // componentWillMount() {
  //   console.log('will mount');

  // }
  // // going to call after its finished
  // // will re-render 
  // componentDidMount() {
  //   console.log('mounted');

  // }
  // state = {
  //   toggle: true
  // }
  state = {
    input: 'Hello'
  }
  updateInput = (evt) => {
    console.log(evt.target.value);
    this.setState({
      input: evt.target.value
    })
  }
  submit = () => {

    //setState is a method on react comp. that sets our state 
    console.log(this.text.value);
  }
  // the mounting of the component 
  // returns the JSX of your actual component 
  render() {
    return (
      //jsx code 
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* components always need a closing tag. if there is nothing inside your tag, you can just do <welcome/> */}
          <Welcome text="Welcome to using props" />
        </header>
        <p className="App-intro">
          To get started, edit <code> src/App.js</code> and save to reload </p>
        {/* && conditional statement*/}
        {/* {this.state.toggle &&
          <p>This should show and hide</p>
        } */}
        <h3>{this.state.input} </h3>
        {/* controlled input */}
        <input type="text" onChange={this.updateInput} value={this.state.input} />
        {/* uncontrolled input */}
        <input type="text" ref={(input) => this.text = input} />

        <button onClick={this.submit}>Show value</button>
      </div>
    );
  }
}

class Welcome extends Component {
  render() {
    // this is an area just for JS 
    // an area to deconstruct an object 
    const { text } = this.props;
    return (
      <h1 className="App-title">{text}</h1>
    )
  }
}

export default App;
