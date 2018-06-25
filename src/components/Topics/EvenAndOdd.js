import React, { Component } from "react";

export default class EvenAndOdd extends Component {
  constructor() {
    super();
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ""
    };
  }
  handleChange(val) {
    this.setState({ userInput: val });
  }
  evensAndOdds(userInput) {
    var arr = userInput.split(",");
    var evens = [];
    var odds = [];
    for (var i = 0; i < arr.length; i++) {
      arr[i] % 2 === 0
        ? evens.push(parseInt(arr[i]))
        : odds.push(parseInt(arr[i]));
    }
    this.setState({ evenArray: evens, oddArray: odds });
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input
          className="inputLine"
          onChange={thiss => this.handleChange(thiss.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.evensAndOdds(this.state.userInput)}
        >
          Split
        </button>
        <span className="resultsBox">
          Evens: {JSON.stringify(this.state.evenArray)}
        </span>
        <span className="resultsBox">
          Odds: {JSON.stringify(this.state.oddArray)}
        </span>
      </div>
    );
  }
}
