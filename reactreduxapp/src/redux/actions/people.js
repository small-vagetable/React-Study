import {INCPEOPLE,DECPEOPLE} from '../constants';

export const people_increment_action = (data)=>({type:INCPEOPLE,data})
export const people_decrement_action = (data)=>({type:DECPEOPLE,data})

export const people_asyncIncrement_action = (data,time)=>{
    return (dispatch)=>{
        setTimeout(() => {
            dispatch(people_increment_action(data))
        }, time);
    }
}
export const people_asyncdecrement_action = (data,time)=>{
    return (dispatch)=>{
        setTimeout(() => {
            dispatch(people_decrement_action(data))
        }, time);
    }
}