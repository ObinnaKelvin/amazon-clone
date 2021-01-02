import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './css/Login.css'
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        // Trythis: 1
        // .then(auth => {
        //     history.push('/')
        // })

        // Trythis: 2
        // .then(auth => {
        //     if(auth){
        //         history.push('/')
        //     }
        // })

        //Successful Sign in
        //Trythis: 3 ---Itenery Operator
        .then(auth => auth?history.push('/'):alert("Failed to Sign in"))
        .catch(error => alert(error.message))
    }
    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            //succesful user creation
            console.log(auth)
            if(auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to="/">
                <img 
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1020px-Amazon_logo.svg.png'
                    alt="amazon logo"
                />
            </Link> 
            <div className='login__container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input onChange={onChangeEmail} value={email} type='text'/>
                    <h5>Password</h5>
                    <input type='password' onChange={onChangePassword} value={password}/>   
                    <button onClick={signIn} type="submit" className="login__signInButton">Sign In</button>

                    <p>
                        By signing-in you agree to the AMAZON CLONE(<i>by Obinna Okere</i>) condition of use & sale. 
                        Please see our Privacy Notice, our Cookies Notice
                        and our Interest-Based Ads Notice
                    </p>
                    <button onClick={register} type="submit" className="login__registerButton">Create your Amazon Account</button>                 
                </form>
            </div>
            <div className="login__demoCredentials">
                <p>I(Obinna) would appreciate if you create an account and see proof 
                    that this works. But, if you sort of want to see this work quickly, 
                    you could use the demo login credentials below.
                </p>
                <p>Email: <strong>demo@demo.com</strong></p>
                <p>Password: <strong>demo101</strong></p>
            </div>
        </div>
    )
}

export default Login
