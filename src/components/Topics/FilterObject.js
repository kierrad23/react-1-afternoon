import React, { Component } from "react";

export default class FilterObject extends Component {
  constructor() {
    super();
    this.state = {
      people: [
        {
          name: "Ray",
          age: 25,
          hometown: "Ellis",
          color: "blue"
        },
        {
          name: "Lo",
          age: 34,
          hometown: "Ardmore"
        },
        {
          name: "Asof",
          age: 52,
          color: "brown",
          food: "sandwich"
        }
      ],
      userInput: "",
      filteredPeople: []
    };
  }
  handleChange(val) {
    this.setState({ userInput: val });
  }
  filterPeople(prop) {
    var people = this.state.people;
    var filteredPeople = [];

    for (var i = 0; i < people.length; i++) {
      if (people[i].hasOwnProperty(prop)) {
        filteredPeople.push(people[i]);
      }
    }
    this.setState({ filteredPeople: filteredPeople });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          Original: {JSON.stringify(this.state.people, null, 10)}
        </span>
        <input
          onChange={e => this.handleChange(e.target.value)}
          className="inputLine"
        />
        <button
          onMouseOver={() => this.filterPeople(this.state.userInput)}
          className="confirmationButton"
        >
          Filter{" "}
        </button>
        <span className="resultsBox filterObjectRB">
          Filtered: {JSON.stringify(this.state.filteredPeople, null, 10)}
        </span>
      </div>
    );
  }
}
