import React, { Component } from 'react'
import './index.css'
export default class Parent extends Component {
    render() {
        return (
            <div>
                <h2>这是parent</h2>
                {/* childprops
                <A>
                    <B/>
                </A> */}

                {/* renderprops */}
                <A render={Astate=><B Astate ={Astate}/>}/>
            </div>
        )
    }
}

class A extends Component {
    state = {
        name:'Tom',
        age:22
    }
    render() {
        return (
            <div className = 'a'>
                <h2>这是a</h2>
                {/* {this.props.children} */}
                {this.props.render(this.state)}
            </div>
        )
    }
}

class B extends Component {
    render() {
        const {age,name} = this.props.Astate
        return (
            <div className ='b'>
                <h2>这是b</h2>
                <h2>从A那获取到的state，name：{name},age:{age}</h2>
            </div>
        )
    }
}
