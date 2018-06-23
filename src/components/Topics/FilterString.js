import React, { Component } from "react";

export default class EvenAndOdd extends Component {
  constructor() {
    super();
    this.state = {
      colors: ["razzleberry", "raspberry", "red", "rose", "black", "purple"],
      userInput: "",
      filteredColors: []
    };
  }
  handleChange(val) {
    this.setState({ userInput: val });
  }
  filterColors(userInput) {
    var colors = this.state.colors;
    var filteredColors = [];

    for (var i = 0; i < colors.length; i++) {
      if (colors[i].includes(userInput)) {
        filteredColors.push(colors[i]);
      }
    }
    this.setState({ filteredColors: filteredColors });
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">
          Original: {JSON.stringify(this.state.colors, null, 10)}
        </span>
        <input
          onChange={e => this.handleChange(e.target.value)}
          className="inputLine"
        />
        <button
          onMouseOver={() => this.filterColors(this.state.userInput)}
          className="confirmationButton"
        >
          Filter{" "}
        </button>
        <span className="resultsBox filterStringRB">
          Filtered: {JSON.stringify(this.state.filteredColors, null, 10)}
        </span>
      </div>
    );
  }
}
