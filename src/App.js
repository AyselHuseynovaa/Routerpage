import React, { Component } from "react";
import "./style/Navbar.css";
import "./style/Main.css";
import Home from "./Home";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Search from "./Search";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <Switch>
          <Route
            exact
            path="/Search/:name"
            render={(routeProps) => <Search {...routeProps} />}
          />
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default App;
