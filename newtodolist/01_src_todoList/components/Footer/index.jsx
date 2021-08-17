import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
    //清除全部已完成任务
    handleClick = () => {
        const {removeAllChecked} = this.props;
        removeAllChecked();
    }
    //勾选全部或取消全部
    handleChange = (e) => {
        const {checkedAll} = this.props;
        checkedAll(e.target.checked)
    }
    render() {
        const {todos} = this.props;
        //总数
        let total = todos.length;
        //选中数
        let checkedNum = todos.reduce((pre,todo) => {
            return pre+(todo.done?1:0)
        },0)
        return (
            <div className="todo-footer">
                <label>
                <input type="checkbox" checked = {total === checkedNum&&checkedNum !==0} onChange = {this.handleChange}/>
                </label>
                <span>
                <span>已完成{checkedNum}</span> / 全部{total}
                </span>
                <button className="btn btn-danger" onClick = {this.handleClick}>清除已完成任务</button>
            </div>
        )
    }
}
