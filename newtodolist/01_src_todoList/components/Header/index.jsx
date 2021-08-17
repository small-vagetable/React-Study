import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {
    handleKeyUp = (e) => {
        // console.log(e.key)
        const {addTodo} = this.props;
        const{key,target} = e;
        //获取输入的内容
        // console.log(nanoid())
        let todoObj = {id:nanoid(),name:target.value,done:false};
        if(key!=='Enter') return;
        addTodo(todoObj);
        //清空输入栏
        target.value = ''
        
    }
    render() {
        return (
            <div className="todo-header">
                <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp ={this.handleKeyUp}/>
            </div>
        )
    }
}
