import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// 引入Provider从 react-redux
import {Provider} from 'react-redux'
//引入store
import store from './redux/store'
ReactDOM.render(
    <Provider store={store}>
       <App/>
    </Provider>
    ,
    document.getElementById('root')
)