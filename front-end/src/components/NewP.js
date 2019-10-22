import React, { Component } from 'react';
import axios from 'axios';
import '../css/NewP.css';
import { Link } from 'react-router-dom';

class NewPet extends Component {

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
            msgerror: ""
        },

        
      }
    }
      


    addPet = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/pets", this.state.pet)
          .then(res => {
            console.log(res);
            if(res.data.errmsg) {
                this.setState({errors: {...this.state.errors, msgerror: res.data.errmsg}});
            }
            else if (res.data.errors) {
                this.setState({errors: res.data.errors});
            }
             else {
              this.props.history.push("/");
            }
          })
          .catch(err => console.log(err));
      }
    
      changeName = e => {
        this.setState({pet: {...this.state.pet, name:e.target.value}});
      }
    
      changeType = e => {
        this.setState({pet: {...this.state.pet, type:e.target.value}});
      }

      changeDescription = e => {
        this.setState({pet: {...this.state.pet, description:e.target.value}});
      }

      changeSkillOne = e => {
        this.setState({pet: {...this.state.pet, skill1:e.target.value}});
        console.log(this.state.pet.skill1)
      }

      changeSkillTwo = e => {
        this.setState({pet: {...this.state.pet, skill2:e.target.value}});
        console.log(this.state.pet.skill2)
      }
      
      changeSkillThree = e => {
        this.setState({pet: {...this.state.pet, skill3:e.target.value}});
        console.log(this.state.pet.skill3)
      }

    render() {
        return(
            <div className='container '>
                <h1>New Pet</h1>
                <form onSubmit={this.addPet}>
                    <div className="form-group">
                        <label htmlFor="name">Pet Name</label>
                        <input type="text"
                        className="form-control btn-outline-secondary" 
                        placeholder="Enter name" 
                        onChange={this.changeName}
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
                        placeholder="Enter Pet Type" 
                        onChange={this.changeType}
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
                        placeholder="this ___ is awesome and can do ____. color etc... "  
                        rows="3"
                        onChange={this.changeDescription}
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
                        placeholder="Skill 1"
                        onChange={this.changeSkillOne}
                        />
                        <input type="text"
                        className="form-control btn-outline-secondary" 
                        placeholder="Skill 2" 
                        onChange={this.changeSkillTwo}
                        /><input type="text"
                        className="form-control btn-outline-secondary" 
                        placeholder="Skill 3" 
                        onChange={this.changeSkillThree}
                        />
                    </div>

                    <input type="submit" className="btn btn-primary" value="Create"/>
                    <Link to={"/"} className="btn btn-danger">cancel</Link>
                </form>
            </div>

        );
    }
}

export default NewPet;