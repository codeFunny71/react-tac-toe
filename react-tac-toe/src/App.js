import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board.js'

class App extends Component {
  constructor() {
    super();
    this.changeToM = this.changeToM.bind(this);
    this.win = this.win.bind(this);
  }
  state = {
    squares: [" "," "," "," "," "," "," "," "," "],
    playerState: "X",
    winState: " "
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            React Tac Toe
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p>The Winner is: {this.state.winState}</p>
          <Board squareNums={this.state.squareNums} squares={this.state.squares} change={this.changeToM}/>
          <p>player is {this.state.playerState}</p>
        </header>
      </div>
    );
  }
  changeToM(num=4) {
    const squares = {...this.state.squares};
    let playerState = {...this.state.playerState};
    squares[num]=this.state.playerState;
    this.setState({squares});
    // this.win();
    if(!this.win()){
      if(this.state.playerState === "X") {playerState = "O";}
      else {playerState = "X";}
      this.setState({playerState});
    }
  }
  win(){
    let win = false;
    const squares = {...this.state.squares};
    let winState = {...this.state.winState};
    // winState = this.state.playerState;
    if(this.state.winState === " "){

    
      if(squares[0] !== " " ){winState = this.state.playerState;}
      // if(squares[0] !== " " && squares[0]===squares[1] && squares[1]===squares[2]){winState = this.state.playerState;}

      
    }
    this.setState({winState});
    return win;
  }
}

export default App;
