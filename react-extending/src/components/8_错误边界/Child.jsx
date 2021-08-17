import React, { Component } from 'react'

export default class Child extends Component {
    state = {
        // arr:[
        //     {id:'001',name:'lll',age:21},
        //     {id:'002',name:'aaa',age:23},
        //     {id:'003',name:'bbb',age:24},
        //     {id:'004',name:'dddd',age:25},
        // ]
        arr:'sadafa'
    }
    render() {
        const {arr} = this.state
        return (
            <div>
                <h2>这是子组件</h2>
                <ul>
                    {
                        arr.map(e=><li key={e.id}>name:{e.name}-------age:{e.age}</li>)
                    }
                </ul>
            </div>
        )
    }
}
