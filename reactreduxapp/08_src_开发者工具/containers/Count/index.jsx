import React, { Component } from 'react'
import {connect} from 'react-redux'
//引入创建action的方法给容器，容器再把方法给UI组件
import {createDecrementAction,createIncrementAction,createIncrementAsyncAction} from '../../redux/action/count'

//UI组件
class Count extends Component {
    increment = () => {
        this.props.increment(1)
    }
    decrement = () => {
        
        this.props.decrement(1)

    }
    incrementOdd = () => {
        if(this.props.sum%2 ===0 ) return
        this.props.increment(1)
    }
    incrementAsync = () => {
        this.props.incrementAsync(1,750)
    }
    render() {
        return (
            <div>
                <h1>这里时UI组件，Persons的个数和为{this.props.personSum}</h1>
                <h3>Count:{this.props.sum}</h3>
               <button onClick = {this.increment}>+1</button>
               <button onClick = {this.decrement}>-1</button>
               <button onClick = {this.incrementOdd}>奇数+1</button>
               <button onClick = {this.incrementAsync}>异步+1</button>
            </div>
        )
    }
}

// 暴露容器组件
export default connect(
    //传递状态.函数
    state=>({sum:state.count,personSum:state.persons.length}),
    // 传递操控状态的方法
    {
        // 加
        increment:createIncrementAction,
        // 减
        decrement:createDecrementAction,
        // 异步加
        incrementAsync:createIncrementAsyncAction
    }
)(Count)