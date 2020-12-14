import React, { useEffect } from 'react'
import './Main.scss';
import { auth } from '../../helper/Firebase';
import {  useHistory } from 'react-router-dom';

function Main() {
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (!user) history.goBack();
        })
    })
    const history = useHistory();
    const logOut = () => {
        auth.signOut().then(res => {
            localStorage.clear();
        }).catch(err => {
            //do something else with err
        })
    }

    return (
        <div className='main'>
            <h1>Please click the button below to log out</h1>
            <button onClick={logOut}>Log out</button>
        </div>
    )
}

export default Main
