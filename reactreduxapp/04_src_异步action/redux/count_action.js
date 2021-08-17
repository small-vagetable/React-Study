import {INCREMENT,DECREMENT} from './constant'

export const createIncrementAction = (data) => ({type:INCREMENT,data});
export const createDecrementAction = (data) => ({type:DECREMENT,data});

//异步action，就是指action的值为函数,异步action中一般都会调用同步action，异步action不是必须要用的。
export const createAsyncIncrementAction = (data) => {
    return (dispatch)=>{
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, 1000);
    }
}