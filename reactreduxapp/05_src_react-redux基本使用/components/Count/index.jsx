import React, { Component } from 'react'

export default class Count extends Component {
    state = {
        name:'kejie'
    }
    // 加法
    increment  =()=>{
        let num = this.selectNumber.value;
        const{increment}= this.props
        // console.log(increment)
        increment(num*1)
        
    }
    decrement = () => {
        let num = this.selectNumber.value;
        this.props.decrement(num*1)
    }
    incrementIfOdd = () => {
        let num = this.selectNumber.value;
        // console.log(store.getState()) ===0
        //获取redux的状态值
        let count = this.props.count
        // 为偶数则返回
        if(count%2 ===0) return;
        this.props.increment(num*1)
        
    }
    //异步加
    incrementAsync = () => {
        let num = this.selectNumber.value;
        this.props.asyncIncrement(num*1,1000)
       
        
    }
    render() {
        // console.log('这是CountUI组件的props',this.props)
        return (
            <div>
                <h1>当前求和为：{this.props.count}</h1>
				<select ref={c => this.selectNumber = c}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>&nbsp;
				<button onClick={this.increment}>+</button>&nbsp;
				<button onClick={this.decrement}>-</button>&nbsp;
				<button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
				<button onClick={this.incrementAsync}>异步加</button>&nbsp;
            </div>
        )
    }
}
