import React, { Component } from 'react'
import {connect} from 'react-redux'
import {InputNumber,Button} from 'antd'
//引入操作状态的方法，就是各种action
import {
    count_increment_action,
    count_decrement_action,
    count_assyncDecrement_action,
    count_assyncIncrement_action} from '../../redux/actions/count'
class Count extends Component {
    handleShowNumber = (value)=>{
        return value;
    }
    handleadd = () => {
        const value = this.InputNumber.value
        this.props.count_increment_action(value*1)
    }
    handleDecrement = () => {
        const value = this.InputNumber.value
        this.props.count_decrement_action(value*1)
    }
    handleAsyncAdd = () => {
        const value = this.InputNumber.value
        this.props.count_assyncIncrement_action(value*1,700)
    }
    handleAsyncDecrement = () => {
        const value = this.InputNumber.value
        this.props.count_assyncDecrement_action(value*1,700)
    }
    render() {
        console.log(this.props.num)
        return (
            <div>
                <h1>Count组件</h1>
                <h3>Number值为:{this.props.num}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;people的人数为：{this.props.peopleNumber}</h3>
                <InputNumber ref = {c=>this.InputNumber=c} min={1} max={100000} defaultValue={3} onChange={this.handleOnchange} />
                <Button type='primary' onClick = {this.handleadd}>+</Button>
                <Button type='ghost ' onClick = {this.handleDecrement}>-</Button>
                <Button danger type='primary' onClick = {this.handleAsyncAdd}>异步+</Button>
                <Button type='primary' size='large' onClick = {this.handleAsyncDecrement}>异步-</Button>
            </div>
        )
    }
}

//链接redux和UI
export default connect(
    // 映射状态
    state=>({num:state.count,peopleNumber:state.people.length}),
    // 映射操作状态的方法
    {
        count_increment_action,
        count_decrement_action,
        count_assyncIncrement_action,
        count_assyncDecrement_action
    }
)(Count)
