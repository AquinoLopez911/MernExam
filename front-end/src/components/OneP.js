import React, { Component } from 'react';
import axios from 'axios';
import "react-router";
import '../css/oneP.css';
import "bootstrap/dist/css/bootstrap.min.css"





class OnePet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pet: {
                name: "",
                type: "",
                description: "",
                skills : [],
                skill1:"",
                skill2:"",
                skill3:"",
                likes: 0,
                adopted: false
            },
            errors: {
                name: "",
                type: "",
                description: "",
                skills : [],
                skill1:"",
                skill2:"",
                skill3:"",
                likes: 0,
                adopted: false
            }        
        }
    }


    componentDidMount() {
        let _id = this.props.match.params._id;
        axios.get(`http://localhost:8000/api/pets/${_id}`)
          .then(res => {
            console.log(res.data);
            this.setState({pet: res.data});
          })
          .catch(err => console.log(err));
      }

      Increase = () => {

        let _id = this.props.match.params._id;
        axios.put(`http://localhost:8000/api/pets/${_id}` , {likes:this.state.pet.likes + 1 })
          .then(res => {
            console.log(this.state.pet); // here this.state.quotebody = 0
            this.setState({pet: {...this.state.pet, likes: this.state.pet.likes + 1 } , liked:true});
            console.log(this.state.pet);// here this.state.quotebody = 1
            localStorage.setItem("likes",this.state.pet._id);

            this.props.history.push("/");
          })
          .catch(err => console.log(err));
    }

    Adopt = () => {

        let _id = this.props.match.params._id;
        axios.delete(`http://localhost:8000/api/pets/${_id}`)
          .then(res => {this.props.history.push("/");})
          .catch(err => console.log(err));
    }
    



    render() {
        return(
            <div>
                <div className="container text-center">
                
                <h1>{this.state.pet.name}</h1>
                </div>
                <div className='text-center'>
                    <div className="quote-box">
                        <div>
                        <h3>{this.state.pet.description} </h3>
                        <p className="d-flex justify-content-center">likes: {this.state.pet.likes}</p>
                        <ul>
                            <li>{this.state.pet.skill1}</li>
                            <li>{this.state.pet.skill2}</li>
                            <li>{this.state.pet.skill3}</li>
                        </ul>
                        <a className=""><button className="btn btn-success" onClick={this.Increase}>like</button></a>&nbsp;
                        <a className=""><button className="btn btn-primary" onClick={this.Adopt}>adopt</button></a>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default OnePet;