import React, { Component } from 'react'
import {Route,Link,Switch} from 'react-router-dom'
import Detail from './Detail'
export default class Message extends Component {
	state = {
		messageArr:[
			{id:'01',title:'消息1'},
			{id:'02',title:'消息2'},
			{id:'03',title:'消息3'},
		]
	}
	render() {
		return (
			<div>
				<ul>
					{
						this.state.messageArr.map((item)=>{
							return (
								<li key={item.id}>
									<Link  to={`/home/message/detail/?id=${item.id}&title=${item.title}`}>{`${item.title}`}</Link>
								</li>
							)
						})
					}
					
					
				</ul>
				<hr/>
				{/* 注册路由 */}
				<Switch>
					<Route path='/home/message/detail' component={Detail} />
				</Switch>
			</div>
		)
	}
}
