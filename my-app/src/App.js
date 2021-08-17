import React, { Component } from 'react'
import Footer from './components/Footer'
import Header from './components/Header';
import List from './components/List'
import './App.css'
export default class App extends Component {

  state = {
    todos:[
      {id:1,name:'吃饭',done:false},
      {id:2,name:'睡觉',done:false},
      {id:3,name:'写代码',done:false}
    ]
  }

  //传给header的添加功能
  addTodo = (todoObj)=>{
    let {todos} = this.state;
    //得到添加的内容todo对象，更新state
    let newTodos = [todoObj,...todos];
    //更新
    this.setState({todos:newTodos})
  }

  //check功能 通过是否checkd来修改状态
  checkTodo= (id,done)=>{
    const {todos} = this.state;
    //将这个id的done值
    let newTodos = todos.map((todo)=>{
      if(todo.id ===id){
        todo.done = done
      }
      return todo;
    })
    //更新数据
    this.setState({todos:newTodos})
  }


  //删除单一todo
  removeTodo = (id)=>{
    //获取todos
    const {todos} = this.state;
    //删除该id的值
    let newTodos =todos.filter((todo)=>{
      return todo.id!==id;
    });
    //更新数据
    this.setState({todos:newTodos})
  }

  //footer中的全选
  checkedAllTodo = (flag)=>{
    const {todos} = this.state;
  
    //全选 flag = true 让所有的todo的done改为true
    let newTodos = todos.map((todo)=>{
      return {...todo,done:flag}
    }) 
    //更新
    this.setState({todos:newTodos})
  }
  //删除所有已完成
  removeAllCheckedTodo=()=>{
    const {todos} = this.state;
    let newTodos =  todos.filter((todo)=>{
      return todo.done!==true;
    });
    this.setState({todos:newTodos})
  }
  render() {
    //接收状态值
    const {todos} = this.state;
    return (
      <div className="todo-container">
       <div className="todo-wrap">
          <Header addTodo = {this.addTodo}/>
          <List todos={todos} checkTodo = {this.checkTodo} removeTodo = {this.removeTodo}/>
          <Footer todos={todos} checkedAllTodo = {this.checkedAllTodo} removeAllCheckedTodo = {this.removeAllCheckedTodo}/>
        </div>
      </div>
    )
  }
}

