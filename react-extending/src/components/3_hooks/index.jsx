import React from 'react'
import ReactDOM from 'react-dom'
// export default class Demo extends React.Component {
//     state = {count:0}
//     add = () => {
//         this.setState(state=>({count:state.count+1}))
//     }
    
//     render() {
//         return (
//             <div>
//             <h1>{name} , 当前求和为：{count}</h1>
//             <button onClick={add}>点我+1</button>
//             <button onClick = {changeName}>点我换名</button>
//         </div>
//         )
//     }
// }

export default function Demo(){
    const [count,setCount] = React.useState(0);
    const [name,setName] = React.useState('kejie');

    //useEffect
    React.useEffect(()=>{
        console.log("@")
    // })  没传第二个参数时，相当于render 或者说 DidMount和DidUpdata   不写监测所有人
    // },[])  传入了第二个参数，且为一个空数组时，相当于 DidMount         空数组，谁都不监测
    // },[count]) //传入了count值的数组，  监测count 加载和更新都会调用
    },[count,name]) //传入了count值和name值的数组，  监测count和name 加载和更新都会调用

    //useEffect中的第一个参数时函数，这个函数可以代表 完成挂载和完成更新，
        // 而这个函数参数若是还有返回值且为函数，那么返回的这个函数会被作为“将要卸载”的生命周期钩子

    //useRef
     
    React.useEffect(() => {
        let timer = setInterval(() => {
            // setCount(count=>count+1)
            setCount(count=>count+1)

            setName(randomString(5))
        }, 1000);
        // 将要卸载
        return ()=>{
            // console.log('willUnmount')
            clearInterval(timer)
        }
    },[])

    const inputref = React.useRef();
    function randomString(length) {
        let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    }
    // var rString = randomString(32); 

    function add(){
        // 第一种写法
        setCount(count+1)

        //第二种写法
        // setCount(conut=>count+1)
    }

    function changeName (){
        setName(name=>randomString(5))
    }
    function unmountNode(e){
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
        // console.log(e.target.parentNode.parentNode)
    }

    function show(e){
        alert(inputref.current.value)
        
    }
    return(
        <div>
            <input type='text' ref={inputref}/>
            <h1>{name} , 当前求和为：{count}</h1>
            <button onClick={add}>点我+1</button>
            <button onClick = {changeName}>点我换名</button>
            <button onClick = {unmountNode}>卸载组件</button>
            <button onClick = {show}>show</button>

        </div>
    )
}
