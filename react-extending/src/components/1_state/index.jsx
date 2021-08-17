import React, { Component } from 'react'

export default class Demo extends Component {
    state = {
        count:0
    }
    add = () => {
        // 对象式setstate
        // this.setState({count:this.state.count+1},() => {
        //     //在render之后再调用该callback
        //     console.log(this.state.count)
        // });
        // console.log(this.state.count)//0,this.setstate方法虽然式同步的，但是react对应的render等后续动作是异步的。

        // 函数式setstate
        // this.setState((state,props) => {
        //     return {count:state.count+1}
        // })
        this.setState(state => ({count:state.count+1}),() => {
            console.log(this.state.count)
        }
             
        )

    }
    render() {
        return (
            <div>
                <h1>当前求和为：{this.state.count}</h1>
                <button onClick = {this.add}>点我+1</button>
            </div>
        )
    }
}
