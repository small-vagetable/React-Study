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

	pushShow = (id,title)=>{
		// console.log(id,title)
		// console.log(this.props);

		// params参数
		// this.props.history.push(`/home/message/detail/${id}/${title}`)

		//search参数
		this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)
		
		// state参数
		// this.props.history.push(`/home/message/detail`,{id,title})
	}
	replaceShow = (id,title)=>{
		// console.log(id,title)
		// console.log(this.props);

		// params参数
		// this.props.history.replace(`/home/message/detail/${id}/${title}`)

		//search参数
		this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)

		// state参数
		// this.props.history.replace(`/home/message/detail`,{id,title})
	}
	goBack = ()=>{
		this.props.history.goBack()
	}
	goForward = ()=>{
		this.props.history.goForward()
	}
	go = ()=>{
		this.props.history.go(-2)
	}

	render() {
		return (
			<div>
				<ul>
					{
						this.state.messageArr.map((item)=>{
							return (
								<li key={item.id}>
									{/* <Link replace  to={{pathname:'/home/message/detail',state:{id:item.id,title:item.title}}}>{item.title}</Link> */}
									<Link push='true'  to={{pathname:'/home/message/detail',state:{id:item.id,title:item.title}}}>{item.title}</Link>
									<button onClick = {()=>{this.pushShow(item.id,item.title)}}>push查看</button>
									<button onClick = {()=>{this.replaceShow(item.id,item.title)}}>replace查看</button>
								</li>

							)
						})
					}
					
					
				</ul>
				<hr/>
				{/* 注册路由 */}
				<Switch>
					{/* params参数 */}
					{/* <Route path='/home/message/detail/:id/:title' component={Detail}/> */}

					{/* search参数 */}
					<Route path='/home/message/detail' component={Detail} />

					{/* state参数 */}
					{/* <Route path='/home/message/detail' component={Detail} /> */}
				</Switch>

				<button onClick ={this.goForward}>goForward</button>
				<button onClick = {this.goBack}>goBack</button>
				<button onClick = {this.go}>go</button>

			</div>
		)
	}
}
