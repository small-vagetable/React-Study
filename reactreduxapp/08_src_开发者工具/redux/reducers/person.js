import {ADDPERSON} from '../constants'
const initState = [{id:'001',name:'kejie',age:21}]
export default function persons (preState=initState,action){
    const {type,data} =action;
    console.log('person',data)
    switch (type) {
        case ADDPERSON :
            return [data,...preState];
        default:
            return preState;
    }
}