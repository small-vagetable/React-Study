import React, { Component } from 'react'
//引用容器Count
import Count from './containers/Count'
// import store from './redux/store'
export default class App extends Component {
    render() {
        return (
            <div>
                {/* 在没有使用react-redux中的provider时需要给每个容器组件传入store */}
                {/* <Count store={store}/>
                <Count store={store}/>
                <Count store={store}/>
                <Count store={store}/> */}

                <Count/>
                <Count/>
                <Count/>
            </div>
        )
    }
}
