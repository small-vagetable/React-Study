import {INCPEOPLE,DECPEOPLE} from '../constants'
const initState = [];
export default function peopleReducer(preState =initState,action){
    const {type,data} = action;
    switch (type) {
        case INCPEOPLE:
            return [data,...preState]
        case DECPEOPLE:
            const newState = preState.filter((people) => {
                return people.id!==data
            })
            return newState;
        default:
            return preState;
    }
}