import React from "react";
import Square from "./Square";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      slot: true
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  clickHandler() {
    console.log("Click");
    this.setState({ value: "O" });
  }
  handleClick(props) {
    let square = this.state.squares.slice();
    console.log(square);
    this.state.slot === true ? (square[props] = "X") : (square[props] = "O");
    this.setState({
      squares: square,
      slot: !this.state.slot
    });
  }

  renderSquare(props) {
    return (
      <Square
        value={this.state.squares[props]}
        onClick={() => this.handleClick(props)}
      />
    );
  }

  render() {
    const status = "Next player: X";

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
