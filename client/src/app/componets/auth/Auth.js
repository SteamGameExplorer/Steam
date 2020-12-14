import React, { useState, useEffect } from 'react'
import { auth } from '../../helper/Firebase';
import './Auth.scss';
import { useHistory } from 'react-router-dom';

function Auth() {
    const history = useHistory();
    const [authType, setAuthType] = useState('signIn');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) history.goBack();
        })
        // eslint-disable-next-line
    }, [])

    const signInOrUp = async(e)  => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(res => {
            console.log(email);
            window.localStorage.setItem("email", email);
            window.localStorage.setPassword("password", password);
            const paras = {
                email: email,
                password: password
            };
            if(authType === 'signUp') {
                fetch("http://localhost:8081/signup", {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json' 
                    },
                    body: JSON.stringify(paras)
                }).then(res => res.json())
                    .then(data => {
                    console.log('Success:', data);
                });
            }
            history.goBack().goBack();
        }).catch(err => {
            //do something with the error
        })
    }

    return (
        <div className='auth'>
            {authType === 'signIn' ?
                <div className='container'>
                     <div className='signIn'>
                        <h1>Sign in to your account</h1>
                        <input type='text' placeholder='Enter your email' value={email} onChange={e => setEmail(e.currentTarget.value)} />
                        <input type='password' placeholder='Enter your password' value={password} onChange={e => setPassword(e.currentTarget.value)} />
                        <button type="submit" onClick={signInOrUp}>Sign In</button>
                     </div>
                    <p>New here? <span onClick={() => setAuthType('signUp')}>Create account.</span></p>
                </div>
                :
                <div className='container'>
                    <div className='signUp'>
                        <h1>Register your account</h1>
                        <input type='text' placeholder='Enter your email' onChange={e => setEmail(e.currentTarget.value)} />
                        <input type='password' placeholder='Enter your password' onChange={e => setPassword(e.currentTarget.value)} />
                        <button onClick={signInOrUp}>Sign Up</button>
                    </div>
                    <p>Have an account? <span onClick={() => setAuthType('signIn')}>Sign In.</span></p>
                </div>
            }
        </div>
    )
}

export default Auth
