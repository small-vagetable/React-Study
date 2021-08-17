import React, { Component } from 'react'
import querystring from 'querystring'
const DetailData = [
	{id:'01',content:'你好，中国'},
	{id:'02',content:'你好，尚硅谷'},
	{id:'03',content:'你好，未来的自己'}
]
export default class Detail extends Component {
	render() {
		console.log(this.props);
		
		// 接收params参数
		// const {id,title} = this.props.match.params
		// const findResult = DetailData.find((detailObj)=>{
		// 	return detailObj.id === id
		// })
		// return (
		// 	<ul>
		// 		<li>ID:{id}</li>
		// 		<li>TITLE:{title}</li>
		// 		<li>CONTENT:{findResult.content}</li>
		// 	</ul>
		// )

		//接收search参数
		console.log(querystring.parse(this.props.location.search.slice(1)))
		const {id,title} = querystring.parse(this.props.location.search.slice(1))
		const findResult = DetailData.find((detailObj)=>{
			return detailObj.id === id
		})||{}
		return (
			<ul>
				<li>ID:{id}</li>
				<li>TITLE:{title}</li>
				<li>CONTENT:{findResult.content}</li>
			</ul>
		)
		
		//接收state参数
		// console.log(this.props.location.state)
		// const {id,title} = this.props.location.state||{}
		// const findResult = DetailData.find((detailObj)=>{
		// 	return detailObj.id === id
		// }) ||{}
		// return (
		// 	<ul>
		// 		<li>ID:{id}</li>
		// 		<li>TITLE:{title}</li>
		// 		<li>CONTENT:{findResult.content}</li>
		// 	</ul>
		// )

	}
}
