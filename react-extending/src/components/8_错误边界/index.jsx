import React, { Component } from 'react'
import Child from './Child'
export default class Demo extends Component {
    state = {
        hasError:null
    }
    //错误边界
    // 错误边界只能捕获生命周期的错误
    static getDerivedStateFromError(err){
        console.log('@@@',err);
        return {hasError:err}
    }

    //向后太发送错误报告
    componentDidCatch(){
        console.log('统计错误。反馈给服务器，通知编码人员')
        console.log('parent组件的后代组件出现了问题，问题为：',this.state.hasError)
    }
    render() {
        // if (this.state.hasError) {
        //     return 
        // }

        return (
            <div>
                <h1>这是父组件</h1>
                
                {this.state.hasError?<h3>当前网络不稳定</h3>:<Child/>} 
            </div>
        )
    }
}
