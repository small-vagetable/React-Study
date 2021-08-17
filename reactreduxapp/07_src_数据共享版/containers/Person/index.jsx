import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addPerson} from '../../redux/action/person'
import {nanoid} from 'nanoid'
class Person extends Component {
    addPerson = () => {
        let age = this.ageInput.value*1;
        let name = this.nameInput.value;
        this.props.addPerson({id:nanoid(),name,age})
        this.ageInput.value = '';
        this.nameInput.value = ''
    }
    render() {
        let persons = this.props.persons
        console.log('persons',persons)
        return (
            <div>
                <h1>这是Person组件，Count的总和为:{this.props.count}</h1>;
                <input ref = {c=>this.nameInput=c} type='text' placeholder='输入姓名'/>
                <input ref = {c=>this.ageInput=c} type='text' placeholder='输入年龄'/>
                <button onClick = {this.addPerson}>添加</button>
                <hr/>
                <ul>
                    {
                        persons.map(p=>{
                            return <li key={p.id}>{p.name} -- {p.age} </li>
                        })
                    }
                </ul>
                
            </div>
        )
    }
}

export default connect(
    //映射状态
    state=>({persons:state.persons,count:state.count}),
    // 映射控制状态的方法
    {
        addPerson
    }
)(Person) 