import React, {Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/App.css';
import {
  Link,
  BrowserRouter,
  Route
} from 'react-router-dom';

import AllPets from "./AllP";
import NewPet from "./NewP";
import OnePet from './OneP';
import UpdatePet from './UpdateP';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="jumbotron">
      <div className="App fluid-container">
        <nav className=" navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">Pet Shelter</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {/* <li className="nav-item active">
                <Link to="/pets" className="nav-link">All Pets</Link>
              </li> */}
              <li className="nav-item active">
              <Link to="/newPet" className="nav-link">Add Pet too shelter</Link>
              </li>
            </ul>
          </div>
        </nav>
        </div>
        </div>

        
        <div className=" text-center fluid-container">
        <Route  exact path="/" component={AllPets} />
        <Route  path="/newPet" component={NewPet} />
        <Route  path="/pet/:_id" component={OnePet} />
        <Route  path="/update/:_id" component={UpdatePet} />
        </div>
      </BrowserRouter>
    )};
}

export default App;
