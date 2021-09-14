import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';


export default class extends Component {


  constructor(props) {
    super(props);
    this.data = props.data;
    this.total = props.total;
  }
  
  render() 
  {

   const showTotal = () => {
     if(this.total != undefined){
       return this.total + '$'
     }
  }

    return <div><h1 style={{fontSize: 50}}>{showTotal()}</h1>
            <Doughnut data={this.data} />
            </div>;
  }
}
