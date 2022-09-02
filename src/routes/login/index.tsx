import React from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const loginHandler = ():void => {
        localStorage.setItem("Login","true");
        navigate('/home');
    }
  return (<>
    <div>Login Page</div>
    <button onClick={loginHandler}>Login</button>
    </>
  )
}

export default Login