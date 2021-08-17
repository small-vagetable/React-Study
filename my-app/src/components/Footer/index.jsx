import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
    //全选按钮
    handleChange = (e)=>{
        const {checkedAllTodo} = this.props;
        checkedAllTodo(e.target.checked);
    }
    //清除已完成的任务
    handleClick = ()=>{
        const {removeAllCheckedTodo} = this.props;
        removeAllCheckedTodo();
    }
    render() {
        const {todos} = this.props;
        //判断是否全选
            //总数
            
        let total = todos.length;
            //选中的数量
        let checkedNumber = todos.reduce((pre,todo)=>{
            if (todo.done) pre++;
            return pre
        },0)
        

        return (
            <div className="todo-footer">
                <label>
                <input type="checkbox" checked = {checkedNumber ===total&&checkedNumber!==0} onChange = {this.handleChange}/>
                </label>
                <span>
                <span>已完成{checkedNumber}</span> / 全部{total}
                </span>
                <button className="btn btn-danger" onClick = {this.handleClick}>清除已完成任务</button>
            </div>
        )
    }
}
