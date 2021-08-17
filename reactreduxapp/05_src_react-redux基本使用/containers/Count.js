import {connect} from 'react-redux'
import Count from '../components/Count';
import {createAsyncIncrementAction,createDecrementAction,createIncrementAction} from '../redux/count_action'



const mapStateToProps =(state)=>{
    return {count:state}
}

const mapDispatchToProps = (dispatch)=>{
    return {
        increment:data=> dispatch(createIncrementAction(data)) ,
        decrement:data=> dispatch(createDecrementAction(data)) ,
        asyncIncrement :(data,time)=> dispatch(createAsyncIncrementAction(data,time)) 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Count)

