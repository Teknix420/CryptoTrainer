import React from 'react';
import CheckCredentials from '../../logic/checkCredentials';


function Login() {

    return (
        <div id="loginDiv" className="modal" tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Login</h5>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="usernameLoginInput" className="form-label">Username</label>
                                <input type="text" name="username" className="form-control" id="usernameLoginInput" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="passwordLoginInput" className="form-label">Password</label>
                                <input type="password" name="password" className="form-control" id="passwordLoginInput" />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <div id="loginGranted" style={{ display: 'none' }} className="form-text">Logging In!</div>
                        <div id="invalidCredentials" style={{ display: 'none' }} className="form-text">Your Username or Password is Incorrect</div>
                        <div id="fillForm" style={{ display: 'none' }} className="form-text">Please enter your username and password</div>
                        <button type="button" className="btn btn-info" onClick={() => {
                            CheckCredentials();
                        }}>Login</button>
                        <button type="button" className="btn btn-secondary" onClick={() => {
                            const loginDiv = document.getElementById('loginDiv');
                            loginDiv.style.display = 'none';
                            document.getElementById('usernameLoginInput').value = '';
                            document.getElementById('passwordLoginInput').value = '';
                        }}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;