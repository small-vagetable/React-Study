import React, { Component } from 'react'
//引用容器Count
import Count from './containers/Count'
import store from './redux/store'
export default class App extends Component {
    render() {
        return (
            <div>
                <Count store={store}/>
            </div>
        )
    }
}
