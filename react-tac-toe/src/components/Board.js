import React, { Component } from 'react';
import '../styles/Board.css';
import Square from './Square.js'

class Board extends Component {
    render() {
        const squares = this.props.squares;
        // const change = this.props.change;
      return (
        <div className="Board">
           
           <Square num={0} square={squares[0]} change={this.props.change}/><Square num={1} square={squares[1]} change={this.props.change}/><Square num={2} square={squares[2]} change={this.props.change}/>
           <Square num={3} square={squares[3]} change={this.props.change}/><Square num={4} square={squares[4]} change={this.props.change}/><Square num={5} square={squares[5]} change={this.props.change}/>
           <Square num={6} square={squares[6]} change={this.props.change}/><Square num={7} square={squares[7]} change={this.props.change}/><Square num={8} square={squares[8]} change={this.props.change}/>
          
        </div>
      );
    }

    // static propTypes = {
    //     changeToM: React.PropTypes.func.isRequired
    // };
  }
  
  export default Board;