import React, { Component } from 'react'
import About from './pages/About'
import Home from './pages/Home'
import Header from './components/Header'
import MyNavLink from './components/MyNavLink'
import {Route, Switch} from 'react-router-dom'
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
                        <MyNavLink to="/kejie/about" >About</MyNavLink>
                        <MyNavLink to="/home/a/b" >Home</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                        <div className="panel-body">
                            {/* 创建路由 */}
                            <Switch>
                            <Route path='/kejie/about' component={About} />
                            {/* Link 的to = ‘/home/a/b’ 可以匹配 Route的path = '/home' */}
                            {/* <Route path='/home' component = {Home} /> */}
                            {/* 但是Link 的to = ‘/home’ 不可以匹配 Route的path = '/home/a/b' */}
                            {/* <Route path='/home/a/b' component = {Home} /> */}
                            {/* 给route加入exact属性后就变成精准匹配不能再匹配/home/a/b */}
                            <Route exact path='/home/' component = {Home} />
                            
                            </Switch>

                            
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
