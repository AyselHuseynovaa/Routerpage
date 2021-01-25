import React, { Component } from "react";
import "./style/Main.css";
class Search extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.history.goBack();
  }

  render() {
    const name = this.props.match.params.name;

    return (
      <div className="search-box">
        <button className="goback" onClick={this.handleClick}>
          Go back
        </button>
        <h3> {name}</h3>
        {name == "Programming" ? (
          <div>
            <h1>PHP</h1>
            <p>
              PHP is a server scripting language, and a powerful tool for making
              dynamic and interactive Web pages. PHP is a widely-used, free, and
              efficient alternative to competitors such as Microsoft's ASP. PHP
              7 is the latest stable release
            </p>

            <h1>React</h1>
            <p>
              React is a JavaScript library for building user interfaces. React
              is used to build single page applications. React allows us to
              create reusable UI components.
            </p>
          </div>
        ) : (
          <h1 className="error">Error not found</h1>
        )}
      </div>
    );
  }
}
export default Search;
