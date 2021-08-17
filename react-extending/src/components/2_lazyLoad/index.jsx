import React, { Component,lazy,Suspense } from 'react'
import {Route,NavLink} from 'react-router-dom'

// import About from './About'
// import Home from './Home'
// loading必须用正常形式引入，react要求fallback后的组件必须时就位了的
import Loading from './Loading'

//使用lazyload
const About = lazy(() => import('./About'))
const Home = lazy(()=>import('./Home'))

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                        {/* <Link className="list-group-item active" to="/about">About</Link> */}
                        {/* <Link className="list-group-item" to="/athor">Athor</Link> */}
                        <NavLink className="list-group-item " to="/about">About</NavLink>
                        <NavLink className="list-group-item" to="/home">Home</NavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                        <div className="panel-body">
                            {/* 懒加载时，如果网速很慢，一直没出结果，用别的内容告诉用户正在加载 */}
                            <Suspense fallback ={<Loading/>}>
                            {/* 创建路由 */}
                            <Route path='/about' component={About} />
                            <Route path='/Home' component = {Home} />

                            </Suspense>
                            
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
