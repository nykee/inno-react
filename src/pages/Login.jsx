import React from 'react';
import {Form,Icon, Input, Button, Checkbox,Row,Col} from "antd";
import  '../style/Login.css'
const FormItem = Form.Item;


class Login extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    render() {
        const  {getFieldDecorator} = this.props.form;

        return (

                <Row>
                    <Col
                         xs={{span:20,offset:2}}
                         sm={{span:12,offset:6}}
                         md={{span:6,offset:9}}
                         lg={{span:6,offset:9}}
                         xl={{span:6,offset:9}}>
                        <div className="login-container">
                            <Form onSubmit={this.handleSubmit} className="login-form">
                                <FormItem>
                                    {getFieldDecorator('userName', {
                                        rules: [{ required: true, message: '请输入用户名!' }],
                                    })(
                                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名" />
                                    )}
                                </FormItem>
                                <FormItem>
                                    {getFieldDecorator('password', {
                                        rules: [{ required: true, message: '请输入密码!' }],
                                    })(
                                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
                                    )}
                                </FormItem>
                                <FormItem>
                                    {getFieldDecorator('remember', {
                                        valuePropName: 'checked',
                                        initialValue: true,
                                    })(
                                        <Checkbox>记住我</Checkbox>
                                    )}
                                    <a className="login-form-forgot" href="">忘记密码</a>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        登录
                                    </Button>
                                    Or <a href="">现在注册!</a>
                                </FormItem>
                            </Form>
                        </div>
                    </Col>

                </Row>



        )
    }
}
const WrappedNormalLoginForm = Form.create()(Login);

export default WrappedNormalLoginForm;