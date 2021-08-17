import React, { Component } from 'react'
import story from '../../redux/story'

export default class Count extends Component {
    state = {
        name:'kejie'
    }
    increment  =()=>{
        let num = this.selectNumber.value;
        //手动写type内容，手动添加action对象{type:xxx,data:xxx}
        story.dispatch({type:'increment',data:num*1})
    }
    decrement = () => {
        let num = this.selectNumber.value;
        story.dispatch({type:'decrement',data:num*1})
    }
    incrementIfOdd = () => {
        let num = this.selectNumber.value;
        // console.log(story.getState()) ===0
        let count = story.getState();
        if(count%2 ===0) return;
        story.dispatch({type:'increment',data:num*1})
        
    }
    //异步加
    incrementAsync = () => {
        let num = this.selectNumber.value;
        
        setTimeout(() => {
            story.dispatch({type:'increment',data:num*1})
        }, 1000);
        
    }
    render() {
        return (
            <div>
                <h1>当前求和为：{story.getState()}</h1>
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
