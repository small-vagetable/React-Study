import {INCREMENT,DECREMENT} from '../constants'

const initState = 0;
export default function reducer(preState=initState,action){
    const {type,data} = action;
    console.log('Count',data)
    switch (type) {
        case INCREMENT:
            return preState+data
        case DECREMENT:
            return preState-data
        default:
            return preState;
            
    }
}