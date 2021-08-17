import React, { Component } from 'react'

export default class Count extends Component {
    state = {
        count:0
    }
    increment  =()=>{
        let num = this.selectNumber.value;
        this.setState({count:this.state.count+num*1})
    }
    decrement = () => {
        let num = this.selectNumber.value;
        this.setState({count:this.state.count-num*1})
    }
    incrementIfOdd = () => {
        let num = this.selectNumber.value;
        let count=this.state.count
        if(count%2 ===0) return;
        this.setState({count:count+num*1})
    }
    incrementAsync = () => {
        let num = this.selectNumber.value;
        let count=this.state.count
        setTimeout(() => {
            this.setState({count:count+num*1})
        }, 1000);
        
    }
    render() {
        return (
            <div>
                <h1>当前求和为：{this.state.count}</h1>
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
