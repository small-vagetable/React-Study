import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

 class Header extends Component {
     go = ()=>{
         this.props.history.go(-2)
     }
     goBack = ()=>{
         this.props.history.goBack()
     }
     goForward = ()=>{
         this.props.history.goForward()
     }
    render() {
        return (
            <div className="page-header">
                <h2>React Router Demo</h2>
                <div>
                    <button onClick = {this.goBack}>goBack</button>
                    <button onClick = {this.goForward}>goForward</button>
                    <button onClick = {this.go}>go</button>
                </div>
            </div>
        )
    }
}
export default withRouter(Header)
