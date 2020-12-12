import React, { useState } from 'react'
import { auth } from '../../../helper/Firebase';
import { useHistory } from 'react-router-dom';
import './SignIn.scss';

function SignIn() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  
    const signIn = async e  => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(res => {
            console.log(email);
            localStorage.setItem("email", email);
            localStorage.setPassword("password", password);
            console.log("test");
            console.log(localStorage.getItem("email"));
            history.goBack();
            //do something else with the response
        }).catch(err => {
            //do something with the error
        })
    }


    return (
        <div className='signIn'>
            <h1>Sign in to your account</h1>
            <input type='text' placeholder='Enter your email' value={email} onChange={e => setEmail(e.currentTarget.value)} />
            <input type='password' placeholder='Enter your password' value={password} onChange={e => setPassword(e.currentTarget.value)} />
            <button type="submit" onClick={signIn}>Sign In</button>
        </div>
    )
}

export default SignIn
