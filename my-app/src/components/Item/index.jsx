import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {

    state = {
        flag :false
    }
    //更改选中
    onchangeHandle = (id)=>{
        const {checkTodo} = this.props;

        return (e)=>{
            console.log(e.target.checked)
            checkTodo(id,e.target.checked)

        }
    }

    //鼠标移入和移出
    handleMouse = (flag)=>{
        return ()=>{
            this.setState({flag:flag})
        }
    }
    //删除todo
    handleClick = (id)=>{
        const {removeTodo} = this.props;
        return ()=>{
            if (window.confirm('是否删除')) {
                removeTodo(id)
            }
        }
    }
    render() {
        //接收props
        const {id,name,done} = this.props;
        const {flag} = this.state;
        return (
            <li style={{backgroundColor : flag?'#ddd':'white'}} onMouseEnter = {this.handleMouse(true)} onMouseLeave = {this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked = {done} onChange ={this.onchangeHandle(id)} />
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{display:flag?'block': 'none'}} onClick = {this.handleClick(id)}>删除</button>
            </li>
        )
    }
}
