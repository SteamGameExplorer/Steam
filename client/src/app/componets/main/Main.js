import React, { useEffect } from 'react'
import './Main.scss';
import { auth } from '../../helper/Firebase';
import {  useHistory } from 'react-router-dom';

function Main() {
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (!user) history.goBack();
            // history.push('/home');
        })
    })
    const history = useHistory();
    const logOut = () => {
        auth.signOut().then(res => {
            localStorage.clear();
            //console.log("test");
            //console.log(localStorage.getItem("email"));
            history.push('/auth');
            //do something else with res
        }).catch(err => {
            //do something else with err
        })
    }

    return (
        <div className='main'>
            <h1>Hey there, you're logged in!</h1>
            <button onClick={logOut}>Log out</button>
        </div>
    )
}

export default Main
