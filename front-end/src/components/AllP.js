import React, { Component } from 'react';
import axios from 'axios';
import {
  Link,
  BrowserRouter,

} from 'react-router-dom';
import '../css/AllP.css';

class AllPets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: []
    }
  }

  componentDidMount() {
    axios.get("http://localhost:8000/api/pets")
      .then(res => this.setState({pets: res.data}))
      .catch(err => console.log(err));
  }

  render() {
    return (
    
      <div>
        <h1>These pets are looking for a home</h1>
        {
          this.state.pets.map( pet => 
            <fieldset className="scheduler-border" key={pet._id}>
              <h3 className="quote_author">{pet.name}</h3>
              <strong>{pet.type}</strong>
              <p>{pet.description}</p>
              {/* <p>Avg. Rating: {truck.reviews.reduce((a, c) => a + c.rating, 0)/truck.reviews.length}</p> */}
                
                <Link to={"/update/" + pet._id} className="btn btn-success">Edit</Link>
                &nbsp;
                <Link to={"/pet/" + pet._id} className="btn btn-primary">view</Link>
            </fieldset>
          )
        }
      </div>
      
    );
  }
}

export default AllPets;