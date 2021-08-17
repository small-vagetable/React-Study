import React, { Component } from 'react'
import axios from 'axios'
export default class Search extends Component {

    handleClick = ()=>{
        // console.log(this.inputElement.value)
        const {updata} = this.props;
        updata({
            isPending:true,
            isFirst:false
        })
        let keyword= this.inputElement.value;
        axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
            response=>{updata({
                img_data:response.data.items,
                isPending:false,
            })},
            err=>{updata({
                img_data:null,
                isPending:false,
                error:err
            })}
        )
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref = {(c)=>this.inputElement=c} type="text" placeholder="enter the name you search"/>&nbsp;
                    <button onClick = {this.handleClick}>Search</button>
                </div>
            </section>
        )
    }
}
