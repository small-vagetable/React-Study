import React, { Component } from 'react'
import {connect} from 'react-redux'
//引入action_creater
import{createIncrementAction,createDecrementAction,createAsyncIncrementAction} from '../../redux/count_action'

class Count extends Component {
    increment =()=>{
        this.props.increment(1)
    }
    decrement = ()=>{
        this.props.decrement(1)
    }
    incrementOdd = () => {
        if(this.props.sum%2===0) return
        console.log(this.props.sum%2)
        this.props.increment(1)
    }
    incrementAsync = () => {
        this.props.incrementAsync(1)
    }
    render() {
        return (
            <div>
                <h1>这是COunt组件：合为：{this.props.sum}</h1>
                <button onClick = {this.increment}>+</button>
                <button onClick = {this.decrement}>-</button>
                <button onClick = {this.incrementOdd }>奇数则加1</button>
                <button onClick = {this.incrementAsync}>异步加1</button>
            </div>
        )
    }
}

export default connect(
    //操作状态
    state=>({sum:state}),
    //操作状态的方法
    {
        increment:createIncrementAction,
        decrement:createDecrementAction,
        incrementAsync:createAsyncIncrementAction
    }
)(Count)