/* 
	该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/

//引入createStore，专门用于创建redux中最为核心的store对象
//引入middleware中间件 用于调用异步函数去创建action
import {createStore,applyMiddleware} from 'redux';
//引入为Count组件服务的reducer
import countReducer from './count_reducer'
// 引入redux-thunk,用于异步action
import thunk from 'redux-thunk'
//暴露store
export default createStore(countReducer,applyMiddleware(thunk));