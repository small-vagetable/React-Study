import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import story from './redux/story'
ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
story.subscribe(() => {
    ReactDOM.render(
        <App/>,
        document.getElementById('root')
    )
})
