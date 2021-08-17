import React, { Component } from 'react'
import {Button } from 'antd'
import  '../../node_modules/antd/dist/antd.css'
import {PauseCircleTwoTone,SmileTwoTone, HeartTwoTone, CheckCircleTwoTone} from '@ant-design/icons'
export default class App extends Component {
    render() {
        return (
            <div>
                <Button type="primary">Primary Button</Button>
                <Button>Default Button</Button>
                <Button type="dashed">Dashed Button</Button>
                <br />
                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
                <PauseCircleTwoTone />
                <SmileTwoTone />
                <HeartTwoTone twoToneColor="#eb2f96" />
                <CheckCircleTwoTone twoToneColor="#52c41a" />
            </div>
        )
    }
}
