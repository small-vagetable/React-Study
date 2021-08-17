import React, { Component } from 'react'
import List from './components/List'
import Search from './components/Search'
import axios from 'axios'

export default class App extends Component {

  //初始化数据
  state = {
    img_data :null,
    isFirst:true,
    isPending : false,
    error:null
  }
  showCar = ()=>{
    axios.get('http://wwww.localhost:5000/car').then(
      response=>{console.log(response.data)},
      err=>{console.log(err)}
    )
  }
  // Search组件
  //更新数据
  updata = (newstate)=>{
    this.setState(newstate);
  }

  render() {
    
    return (
      <div className="container">
        <Search updata = {this.updata} />
        <List {...this.state} />
        
        <button onClick = {this.showCar}>汽车数据</button>
      </div>
    )
  }
}
