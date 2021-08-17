import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

  // showCar = ()=>{        //遇到跨域问题，没办法获取数据
  //   axios.get('http://wwww.localhost:5000/car').then(
  //     response=>{console.log(response.data)},
  //     err=>{console.log(err)}
  //   )
  // }
  showCar = ()=>{
    axios.get('/api1/car').then(
      response=>{console.log(response.data)},
      err=>{console.log(err)}
    )
  }
  showStudent = ()=>{
    axios.get('/api2/student').then(
      response=>{console.log(response.data)},
      err=>{console.log(err)}
    )
  }
  render() {
    return (
      <div className="container">
        
        <button onClick = {this.showStudent}>学生数据5</button>
        <button onClick = {this.showCar}>汽车数据4</button>
      </div>
    )
  }
}
