//store是从redux中暴露出来的创建方法createStore中得到的
import {createStore,applyMiddleware} from 'redux'
//引入汇总的reducers
import reducer from './reducers'
//需要异步函数时,需要从redux中引入applyMiddleware,以及react-redux中的thunl
import thunk from 'redux-thunk'
//扩展工具
import {composeWithDevTools} from 'redux-devtools-extension'
export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))