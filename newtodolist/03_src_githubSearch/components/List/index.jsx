import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
    render() {
      const{isPending,img_data,isFirst,error} = this.props
        return (
            <div className="row">
              {
                isFirst? <h1>hellow my Lord</h1>:
                isPending?<h2>正字搜索中。。。</h2>:
                img_data?img_data.map((item) => {
                  return (
                    <div className="card" key={item.id}>
                      <a  rel="noreferrer" href={item.html_url} target="_blank">
                        <img alt = 'avator' src={item.avatar_url} style={{width: '100px'}}/>
                      </a>
                      <p className="card-text">reactjs</p>
                    </div>
                  )
                }):
                error?<h2 style={{color:'red'}}>error.msg</h2>:''
              }
             
            </div>
        )
    }
}
