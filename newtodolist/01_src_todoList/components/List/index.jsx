import React, { Component } from 'react'
import Item from '../Item'
import './index.css'
export default class List extends Component {

    render() {
        const {todos,removeTodo,checkedTodo} = this.props
        console.log(todos);
        return (
            <ul className="todo-main">
                {
                   
                    todos.map((todo) => {
                        return <Item key ={todo.id} {...todo} removeTodo = {removeTodo} checkedTodo = {checkedTodo}/>
                    })
                }
            </ul>
        )
    }
}
