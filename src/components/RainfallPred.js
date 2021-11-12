import React, {useRef, useState, Component} from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'
import {Link, useHistory } from "react-router-dom"
import './Pred.css'


class RainfallPred extends Component {

  constructor(props) {
    super(props);

    this.state = {
      result: '',
      mtm:'',
      avg_ten:'',
      avg_inc:''
    };

    this.handleUpload = this.handleUpload.bind(this);
  }

  handleUpload(ev) {
    ev.preventDefault();
      
    this.state.mtm=this.filemtm.value;
    this.state.avg_ten=this.fileten.value;
    this.state.avg_inc=this.fileinc.value;
    const data = {mtm: this.state.mtm, avg_ten:this.state.avg_ten, avg_inc:this.state.avg_inc};
    console.log(data);
        
    fetch('http://127.0.0.1:5000/predict',{
      method: 'POST',
      headers:{
          'Content-Type':'application/json'
      },
      body: JSON.stringify(data),
    }).then((response) => {
        response.json().then((body) => {
            this.setState({ result:body});
            console.log(body);
        });
    });
    
  }


  render() {
    
    return (
      <> 

        {/* <header class="main-header dark-theme">

        <ul class="header-options">

            <li class="title"> <b>V</b> Support </li>
            <li class="option"> Home </li>
            <li class="option"> Admin </li>
            <li class="option"> Predict </li>
            <li class="option"> Contribute </li>

        </ul> */}

        <div>
            
            <div class="jumbotron text-center">
                <h5 class="display-4">Enter Data To Predict Rainfall !!!</h5>
                <hr></hr>
                <br></br>
            <form onSubmit={this.handleUpload}>
                
                <div class="custom-file">
                    <input class="form-control form-control-lg mb-4" type="text" placeholder="Average March-May Rainfall" ref={(ref) => { this.filemtm = ref; }}/>
                    <input class="form-control form-control-lg mb-4" type="text" placeholder="Average past 10 days June Rainfall" ref={(ref) => { this.fileten = ref; }}/>
                    <input class="form-control form-control-lg mb-4" type="text" placeholder="Average Rainfall increase March-May" ref={(ref) => { this.fileinc = ref; }}/>
                    {/* <input type="file" class="custom-file-input" ref={(ref) => { this.uploadInput = ref; }}  /> */}
                    {/* <label class="custom-file-label" for="customFile">Choose file</label> */}
                </div>
                
                <br />
                <br></br>
                <div>
                    <button class="btn btn-primary btn-lg">Submit</button>
                </div>
                <br></br>
                <div className="resultdiv">
                    <p>The Predicition Result : {this.state.result}</p>                
                </div>
        
            </form>
            </div>
            
        </div>      

        {/* </header>           */}
        
      </>
    );
  }
}

export default RainfallPred;


