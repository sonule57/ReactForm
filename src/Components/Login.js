import React from 'react'
import Home from './Home';
const Login = () => {
    let id = "felix";
    let password = 1234;

    let enteredid = window.prompt("Enter id")
    let enteredpass = window.prompt("Enter Password")
    if (id === "enteredid" && password === 1234) {
        return (
            <>
                <h1>Login Successful!</h1>
                <Home/>
            </>
        )
    } else {
        return (
            <>
                <h1>Login Faild!</h1>
                <Login/>
            </>
        )
    }
    return (
        <>
            <h1>This is Home Page</h1>
        </>

    )
}

export default Login;