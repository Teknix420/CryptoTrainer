import React from 'react';
import { HomePageHeader } from '../components/Header';
import Login from '../components/Login';
import CreateAccount from '../components/CreateAccount';
import Nav from '../components/Nav';


function Landing() {
    return (
        <div>
            <Nav>
                {/* eslint-disable-next-line */}
                <a className="nav-link text-white" href="#" onClick={() => {
                    document.getElementById('loginDiv').style.display = 'block';
                }}>Login</a>
                {/* eslint-disable-next-line */}
                <a className="nav-link text-white" href="#" onClick={() => {
                    document.getElementById('accountDiv').style.display = 'block';
                }}>Create Account</a>
            </Nav>
            <HomePageHeader />
            <Login />
            <CreateAccount />
        </div>
    )
}

export default Landing;