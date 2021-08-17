import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import  './App.css';


export default class App extends Component {
  // 定义state
  state = {todos:[
    {id:1,name:'吃饭',done:false},
    {id:2,name:'睡觉',done:false},
    {id:3,name:'打代码',done:false},
  ]}
  //定义方法
  //======header
    // 添加todo
  addTodo = (todoObj) => {
    const {todos} = this.state;
    //添加到state中
    let newTodos = [todoObj,...todos];
    //更新
    this.setState({todos:newTodos})
  }
  //======List
  // 勾选todo,勾选的todo中的done值改为true,勾选后的todo要改为false，即 done = 勾选
  checkedTodo = (id,done)=>{
    const {todos} = this.state;
    let newTodos = todos.map((todo) => {
      return todo.id===id?{...todo,done}:todo;
    })
    //更新
    this.setState({todos:newTodos})
  }
  // 删除单个todo
  removeTodo = (id) => {
    const {todos} = this.state;
    //过滤
    let newTodos = todos.filter((todo)=>{
      return todo.id!==id;
    })
    //更新
    this.setState({todos:newTodos})
  }
  //======Footer
  //清除所有todo
  removeAllChecked = () => {
    const {todos} = this.state;
    let newTodos = todos.filter((todo) => {
      return !todo.done
    })
    //更新
    this.setState({todos:newTodos});

  }
  //全选或全取消
  checkedAll = (done) => {
    const {todos} = this.state;
    let newTodos = todos.map((todo)=>{
      return {...todo,done}
    })
    this.setState({todos:newTodos})
  }
  

    render() {
      const {todos} = this.state;
        return (
            <div className="todo-container">
              <div className="todo-wrap">
                <Header addTodo = {this.addTodo}/>
                <List todos = {todos} checkedTodo = {this.checkedTodo} removeTodo = {this.removeTodo}/>
                <Footer todos = {todos} checkedAll ={this.checkedAll} removeAllChecked = {this.removeAllChecked}/>
              </div>
            </div>
        )
    }
}
