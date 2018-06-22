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

  evens(nums) {
    var arr = userInput.split(",");
    var evens = [];
    var odds = [];
    for (x in nums) {
      if (nums[x] % 2 === 0) {
        evens.push(nums[x]);
      } else if (!nums[x] % 2 === 0) {
        odds.push(nums[x]);
      }
    }
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input onChange={e => this.userInput(e)} className="inputLine" />
        <button className="confirmationButton" />
        <span className="resultsBox" />
        <span className="resultsBox" />
      </div>
    );
  }
}
