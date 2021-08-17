import React, { Component } from 'react'
import Item from '../Item';
import './index.css'
export default class List extends Component {

    render() {
        //接收props
        let {todos,checkTodo,removeTodo} = this.props;
        console.log(todos)
        return (
            <ul className="todo-main">
               {
                   todos.map(todo=>{
                       return <Item key={todo.id} {...todo} checkTodo = {checkTodo} removeTodo ={removeTodo}/>
                   })
               }
                
                
            </ul>
        )
    }
}
