import {INCREMENT,DECREMENT} from '../constants'
export const count_increment_action = (data) => ({type:INCREMENT,data})
export const count_decrement_action = (data) => ({type:DECREMENT,data})
export const count_assyncIncrement_action = (data,time) => {
    return (dispatch)=>{
        setTimeout(() => {
            dispatch(count_increment_action(data))
        }, time);
    }
}
export const count_assyncDecrement_action = (data,time) => {
    return (dispatch)=>{
        setTimeout(() => {
            dispatch(count_decrement_action(data))
        }, time);
    }
}