import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import './index.css'
export default class Header extends Component {
    handleKeyUp = (e)=>{
        const {addTodo} = this.props;
        const{code,target}  = e;
        //如果按下的键不是回车，那不用管，是回车就输内容
        if (code!=='Enter') return;
        //是回车，获取内容添加内容到state中
        addTodo({id:nanoid(),name:target.value,done:false});
        //清空输入框
        target.value =''
    }
    render() {

        return (
            <div className="todo-header">
                <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp ={this.handleKeyUp}/>
            </div>
        )
    }
}
