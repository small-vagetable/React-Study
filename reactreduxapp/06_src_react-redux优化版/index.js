import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import store from './redux/store'
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)

//react-redux不需要利用redux检测state变化 直接在组件中就能检测
// store.subscribe(() => {
//     ReactDOM.render(
//         <App/>,
//         document.getElementById('root')
//     )
// })