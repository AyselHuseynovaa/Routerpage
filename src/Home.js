import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { query: "" };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ query: e.target.value });
  }

  render() {
    return (
      <div className="container-fluid page">
        <div className="search">
          <input
            placeholder="Search"
            type="text"
            onChange={this.handleChange}
            value={this.state.query}
          />
          <Link to={`/Search/${this.state.query}`}>
            <button>Search</button>
          </Link>
        </div>

        <div className="bg-color"></div>
      </div>
    );
  }
}
export default Home;
