import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
    state = {
        flag:false
    }
    //是否勾选
    handleChange = (id) => {
        const {checkedTodo} = this.props;

        return (e) => {
            checkedTodo(id,e.target.checked);
        }
    }
    //删除单个todo
    handleClick = (id)=>{
        const {removeTodo} = this.props;
        return () => {

            if(window.confirm('是否确认删除？')){
                removeTodo(id)
            }
            
        }
    }
    //鼠标移动
    handleMouse = (flag)=>{
        return ()=>{
            this.setState({flag})
        }
    }

    render() {
        const {id,name,done} = this.props;
        const {flag} = this.state;
        return (
            <li style ={{backgroundColor:flag?'#ddd':'white'}} onMouseEnter = {this.handleMouse(true)} onMouseLeave = {this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked = {done} onChange = {this.handleChange(id)}/>
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{display:flag?'block':'none'}} onClick = {this.handleClick(id)}>删除</button>
            </li>
        )
    }
}
