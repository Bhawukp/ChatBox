import React from 'react';
import {GoogleOutlined,FacebookOutlined} from '@ant-design/icons'


import firebase from 'firebase/app';
import {auth} from '../components/firebase';
const Login=()=>{
    return (
        <div id="login-page">
            <div id="login-card">
                <h2>Welcome to ChatBox</h2>
                <div 
                className="login-button google"
                onClick={()=>auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
                    <GoogleOutlined/>Login with Google

                </div>
                <br/> <br/>
                <div className="creator">
                    <h4>Created By Bhawuk Pahuja</h4>

                </div>

            </div>
        </div>

    );
}
export default Login;