import React, { Component } from 'react';

class Square extends Component {
    render() {
      return (
        <div className="Square" onClick={(e) => {
          this.props.change(this.props.num);
      }} >
             <p>
             {this.props.square}
            </p>
          </div>
      );
    }
  }
  
  export default Square;