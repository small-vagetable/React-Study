import React, {  PureComponent } from 'react'

//pureComponent相当于自动判断的更新阀门
// class版

// export default class Demo extends PureComponent {
//     state = {
//         car:'奔驰'
//     }
//     changeCar = ()=>{
//         // const {car} = this.state
//         this.setState({car:'雷克萨斯'})
//     }
//     render() {
//         console.log('parent--render')
//         return (
//             <div>
//                 <h2>当前车为：{this.state.car}</h2><br/>
//                 <button onClick = {this.changeCar}>点我换车</button>
//                 <br/>
//                 {/* <Child car={this.state.car}/> */}
//                 <Child />
//             </div>
//         )
//     }
// }

// class Child extends PureComponent {
   
//     render() {
//         const {car} = this.props;
//         console.log('child--render')
//         return (
//             <div>
//                 <h2> child组件：当前车为：{car}</h2><br/>
//             </div>
//         )
//     }
// }

export default function Demo() {
    const [car,setCar] = React.useState('宝马')
    function changeCar(){
        setCar(state=>'雷克萨斯')
    }
    console.log('parent--render')
    return (
        <div>
            <h2>当前车为：{car}</h2><br/>
            <button onClick = {changeCar}>点我换车</button>
            <br/>
            {/* <Child car={this.state.car}/> */}
            <Child car='奔驰' />
        </div>
    )
}
function Child(props){
    // console.log(props) 
    console.log('chhild--render')
    return (
        <div>
            <h2> child组件：当前车为：{props.car}</h2><br/>
        </div>
    )
}
