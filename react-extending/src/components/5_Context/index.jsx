import React, { Component } from 'react'
import  './index.css'

// const UserNameComtext = React.createContext();
// const AgeContext = React.createContext();
const StateContext= React.createContext();
const {Consumer,Provider} = StateContext
export default class A extends Component {
    state = {
        username:'Tom',
        age:22
    }
    render() {
        return (
            <div className ='FA'>
                <h2>我是A组件</h2>
                <h4>我的用户名是：{this.state.username}</h4>
                {/* <UserNameComtext.Provider value = {this.state.username}>
                    <AgeContext.Provider value ={this.state.age} >
                        <B/> 
                    </AgeContext.Provider>
                </UserNameComtext.Provider> */}
                <StateContext.Provider value={this.state}>
                    <B/>
                </StateContext.Provider>
                
            </div>
        )
    }
}
class B extends Component{
    // static contextType = UserNameComtext;
    static contextType = StateContext;  
    render() {
        return (
            <div className = 'ChildB'>
                <h2>我是B组件</h2>
                
                <C/>
            </div>
        )
    }
}

// class C extends Component{
//     // static contextType = UserNameComtext;
//     // static contextType = AgeContext;
//     static contextType = StateContext;
//     render() {
//          console.log(this)
//         return (
//             <div className='GChildC'>
//                 <h2>我是C组件</h2>
//                 <h4>我从A组件那接收到的用户名是：{this.context.username}</h4>
//             </div>
//         )
//     }
// }

function C(){

    return (
        <div className='GChildC'>
            <h2>我是C组件</h2>
            <h4>我从A组件那接收到的用户名是：
                <Consumer>
                    {
                        value =>{
                            return `${value.username},年龄是：${value.age}`
                        }
                    }
                </Consumer>
                
            </h4>
        </div>
    )
}
