import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Form, Input, Button,List, Card } from 'antd';
import {nanoid} from 'nanoid'
import {
    people_asyncIncrement_action,
    people_asyncdecrement_action,
    people_decrement_action,
    people_increment_action
} from '../../redux/actions/people'
class People extends Component {

    onFinish = (values) => {
        const id = nanoid();
        // console.log({id,...values})
        this.props.people_increment_action({id,...values})
        console.log(this.props.peoples)
       return values;
        // console.log('Success:', values);
    };
    
    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    addAsyncPeople = (value)=>{
        // const name = this.userInput.value;
        // const password = this.passwordInout.value;
        const val = this.addBtn.click();
        console.log(val)
        console.log()
        // this.props.people_asyncIncrement_action({id:nanoid(),username:name,password},500)
    }
    
    deletePeople = (e) => {
        const id =e.target.parentNode.getAttribute('id')
        // console.log()
        this.props.people_decrement_action(id)
    }
    deletePeopleAsync = (e) => {
        const id =e.target.parentNode.getAttribute('id')
        // console.log()
        this.props.people_asyncdecrement_action(id,700)
    }

    render() {
        return (
            <div>
                <h2>{this.props.count}</h2>
                <Form name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                    >
                    <Form.Item label="Username" name="username"
                        rules={[
                        {
                            required: true,
                            message: '?????????????????????',
                        },
                        ]}
                    >
                        <Input ref={c=>this.userInput =c} />
                    </Form.Item>

                    <Form.Item  label="Password" name="password"
                        rules={[
                        {
                            required: true,
                            message: '?????????????????????',
                        },
                        ]}
                    >
                        <Input.Password  ref={c=>this.passwordInout = c}/>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                        offset: 8,
                        span: 16,
                        }}
                    >
                        <Button ref={c=>this.addBtn=c} type="primary" htmlType="submit" >
                        ??????
                        </Button>&nbsp;&nbsp;
                        <Button type="primary" onClick = {this.addAsyncPeople}>
                        ????????????
                        </Button>&nbsp;&nbsp;
                        
                    </Form.Item>
                </Form>
                <hr/>
                <List grid={{ gutter: 16, column: 4 }}
                    dataSource={this.props.peoples}
                    renderItem={item => (
                    <List.Item data={item.id}>
                        <Card key={item.id} title={item.id.slice(0,5)}>
                            {` 
                                ?????????${item.username},
                                
                                ?????????${item.password}
                            `}
                        <br/>
                        <Button id={item.id} type='primary' onClick = {this.deletePeople}>??????</Button>
                        &nbsp;  
                        <Button id={item.id} type='primary' onClick = {this.deletePeopleAsync}>????????????</Button>
                        
                        </Card>
                    </List.Item>
                    )}
                />
                  
            </div>
        )
    }
}

export default connect(
    state=>({peoples:state.people,count:state.count}),
    {
        people_asyncIncrement_action,
        people_asyncdecrement_action,
        people_decrement_action,
        people_increment_action
    }
)(People)
