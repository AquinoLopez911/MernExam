import React, { Component } from 'react';
import axios from 'axios';
import '../css/UpdateP.css';
import {Link } from 'react-router-dom';

class UpdatePet extends Component {
    constructor(props) {
        super(props);
        this.state = {
          pet: {
              name: "",
              type: "",
              description: "",
              skill1:"",
              skill2:"",
              skill3:"",
              likes: 0,
          },
          errors: {
              name: "",
              type: "",
              description: "",
              skill1:"",
              skill2:"",
              skill3:"",
              likes: 0,
              msgerror: "false"
          }        
      }
    }

    componentDidMount() {
        let _id = this.props.match.params._id;
        axios.get(`http://localhost:8000/api/pets/${_id}`, this.state.pet)
          .then(res => {
            console.log(res.data);
            this.setState({pet: res.data});})
          .catch(err => console.log(err));
    }



      changeName = e => {
        console.log("hey");
        let pet = {...this.state.pet};
        pet.name = e.target.value;
        this.setState({pet: pet});
        
      }
      changeType = e => {
        let pet = {...this.state.pet};
        pet.type = e.target.value;
        this.setState({pet: pet});
      }
      changeDescription = e => {
        let pet = {...this.state.pet};
        pet.description = e.target.value;
        this.setState({pet: pet});
      }
      changeSkill1 = e => {
        let pet = {...this.state.pet};
        pet.skill1 = e.target.value;
        this.setState({pet: pet});
      }
      changeSkill2 = e => {
        let pet = {...this.state.pet};
        pet.skill2 = e.target.value;
        this.setState({pet: pet});
      }
      changeSkill3 = e => {
        let pet = {...this.state.pet};
        pet.skill3 = e.target.value;
        this.setState({pet: pet});
      }


      updatePet = e => {
        e.preventDefault();
        let _id = this.props.match.params._id;
        axios.put(`http://localhost:8000/api/pets/${_id}`, this.state.pet)
          .then(res => {
            console.log(res);
            if(res.data.errors) {
                console.log(res);
              this.setState({errors: res.data.errors});
            } else {
              this.props.history.push("/")
            }
          })
          .catch(err => console.log(err));
    
      }


    render() {
        return(
            <div className='container '>
                <h1>Edit Pet</h1>
                <form onSubmit={this.updatePet}>
                    <div className="form-group">                                            
                        <label htmlFor="name">Pet Name</label>
                        <input type="text"
                        className="form-control btn-outline-secondary" 
                        onChange={this.changeName}
                        value={this.state.pet.name}
                        />
                         {
                        this.state.errors.msgerror ?
                        <small class="form-text text-danger">duplicate pet name</small>:
                        ""
                        } 
                        {
                        this.state.errors.name ?
                        <small class="form-text text-danger">{this.state.errors.name.message}</small>:
                        ""
                        }
                    </div>
                    <div className="form-group">                        
                        <label htmlFor="quoteBody">Type</label>
                        <input type="text"
                        className="form-control btn-outline-secondary" 
                        onChange={this.changeType}
                        value={this.state.pet.type}
                        />
                        {
                        this.state.errors.type ?
                        <small class="form-text text-danger">{this.state.errors.type.message}</small>:
                        ""
                        } 
                    </div>
                    <div className="form-group">                      
                        <label htmlFor="name">Pet Description</label>
                        <textarea className="form-control btn-outline-secondary"
                        rows="3"
                        onChange={this.changeDescription}
                        value={this.state.pet.description}
                        />
                        {
                        this.state.errors.description ?
                        <small class="form-text text-danger">{this.state.errors.description.message}</small>:
                        ""
                        } 
                    </div>
                    <div className="form-group">
                        
                        <label htmlFor="name">Pet skils</label>
                        <input type="text"
                        className="form-control btn-outline-secondary"
                        onChange={this.changeSkill1} 
                        value={this.state.pet.skill1}
                        />
                        <input type="text"
                        className="form-control btn-outline-secondary" 
                        value={this.state.pet.skill2}
                        onChange={this.changeSkill2}
                        /><input type="text"
                        className="form-control btn-outline-secondary" 
                        onChange={this.changeSkill3}
                        value={this.state.pet.skill3}
                        
                        />
                    </div>

                    <input type="submit" className="btn btn-primary" value="Update"/>
                    <Link to={"/"} className="btn btn-danger">cancel</Link>
                </form>
            </div>

        );
    }
}

export default UpdatePet;