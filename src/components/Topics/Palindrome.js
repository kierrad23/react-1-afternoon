import React, { Component } from "react";

export default class EvenAndOdd extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      palindrome: []
    };
  }
  handleChange(val) {
    this.setState({ userInput: val });
  }
  isPalindrome(userInput) {
    var forwards = userInput;
    var backwards = userInput;
    backwards = backwards.split("");
    backwards = backwards.reverse();
    backwards = backwards.join("");

    if (forwards === backwards) {
      this.setState({ palindrome: "true" });
    } else {
      this.setState({ palindrome: "false" });
    }
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input
          onChange={e => this.handleChange(e.target.value)}
          className="inputLine"
        />
        <button
          onMouseOver={() => this.isPalindrome(this.state.userInput)}
          className="confirmationButton"
        >
          Check
        </button>
        <span className="resultsBox">
          Filtered: {JSON.stringify(this.state.palindrome, null, 10)}
        </span>
      </div>
    );
  }
}
