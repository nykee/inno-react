import React from 'react';

class Login extends React.Component {
    render() {
        return (
            <div>
                <div className="signin">
                    <form action="">
                        <p className="welcome">欢迎登陆XY云</p>
                        <input type="text" className="user" value="" placeholder="请输入用户名"  id="uname"/>
                        <input type="password" className="pass" value="" placeholder="请输入密码" id="pwd" />
                        <div  className="reg_help" style={{visibility:'hidden'}}><span>登陆建议</span></div>
                        <label>
                            <input type="checkbox" value="rmbMe" /> 记住我
                        </label>
                        <input id="login" type="submit" value="登录" />
                        <input style={{display: "none"}} id="to_reg" type="submit" value="立即注册"/>
                    </form>
                </div>
            </div>

        )
    }
}

export default Login;