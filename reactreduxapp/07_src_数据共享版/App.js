import React, { Component } from 'react'
import Count from './containers/Count'
import Person from './containers/Person'
export default class App extends Component {
    render() {
        return (
            <div>
                {/* 最外层的组件包裹了普通组件和react - redux组件 */}
                <Count/>
                <hr/>
                <Person/>
            </div>
        )
    }
}
