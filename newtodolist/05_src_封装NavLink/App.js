import React, { Component } from 'react'
import About from './pages/About'
import Home from './pages/Home'
import Header from './components/Header'
import MyNavLink from './components/MyNavLink'
import {Link,Route,NavLink} from 'react-router-dom'
export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                        {/* <Link className="list-group-item active" to="/about">About</Link> */}
                        {/* <Link className="list-group-item" to="/athor">Athor</Link> */}
                        {/* <NavLink className="list-group-item " to="/about">About</NavLink>
                        <NavLink className="list-group-item" to="/home">Home</NavLink> */}
                        <MyNavLink to="/about" >About</MyNavLink>
                        <MyNavLink to="/home" >Home</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                        <div className="panel-body">
                            {/* 创建路由 */}
                            <Route path='/about' component={About} />
                            <Route path='/Home' component = {Home} />
                            
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
