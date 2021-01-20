import React, { Component } from "react";
class Home extends Component {
  render() {
    return (
      <div className="container-fluid webPage">
        <div className="main row">
          <div className="col-md-6 left-col">
            <h1>Real Benefits</h1>
            <h1>Real People</h1>
            <p>
              We combine corportate benefits with strategic <br />
              financial managemenet to provide valuable solution <br /> for
              companies at scale
            </p>
            <button>Schedule a consult</button>
          </div>
          <div className="col-md-6 right-col">
            <img src="https://images.unsplash.com/photo-1582015752624-e8b1c75e3711?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8YnVzaW5lc3MlMjBtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
