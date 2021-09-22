import "./login.css";

const Login = () => {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Facebook</h3>
                    <span className="loginDesc">Connect with your friends and the world around you</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="password" className="loginInput" />
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgotten password?</span>
                        <button className="loginRegisterButton">Create New Account</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Login;
