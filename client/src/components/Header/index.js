import React from 'react';

function HomePageHeader() {
    return (
        <div className="homePageHeader container-fluid text-center">
            <h2>Welcome to CryptoTrainer! This App was built as a tool to practice trading Cryptocurrency without the need of real money.</h2>
            <h3 id="loginText">Please Login or Create an Account below.</h3>
            <button id="loginBtn" type="button" className="homepageBtn btn btn-info" onClick={() => {
                const loginDiv = document.getElementById('loginDiv');
                loginDiv.style.display = 'block';
            }}>Login</button>
            <button id="createBtn" type="button" className="homepageBtn btn btn-success" onClick={() => {
                const accountDiv = document.getElementById('accountDiv');
                accountDiv.style.display = 'block';
            }}>Create Account</button>
        </div>
    )
}

function AccountHeader(props) {

    return (
        <div className="welcomeHeader">
            <h3 id="welcome">Welcome {props.email},</h3>
            <h3 id="balance">Your current portfolio balance is: ${props.balance} USD</h3>
        </div>
    )
}

export { HomePageHeader, AccountHeader };