import React from 'react';
import CheckEmailPassword from '../../logic/checkEmailPassword';

function CreateAccount() {
    return (
        <div id="accountDiv" className="modal" tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Create an Account</h5>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="emailInput" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="usernameInput" className="form-label">Username</label>
                                <input type="email" className="form-control" id="usernameInput" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="passwordInput" className="form-label">Password</label>
                                <input type="password" className="form-control" id="passwordInput" />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <div id="emailReq" style={{ display: 'none' }} className="form-text">Email is already in use</div>
                        <div id="usernameReq" style={{ display: 'none' }} className="form-text">Username is already in use</div>
                        <div id="passwordReq" style={{ display: 'none' }} className="form-text">Password must be at least 8 characters and contain a lowercase letter, uppercase letter, and at least 1 number. </div>
                        <div id="fillCreateForm" style={{ display: 'none' }} className="form-text">Please fill out all fields</div>
                        <div id="createAccountGranted" style={{ display: 'none' }} className="form-text">Creating new account and taking to dashboard!</div>
                        <button type="button" className="btn btn-info" onClick={() => {
                            CheckEmailPassword();
                        }}>Create Account</button>
                        <button type="button" className="btn btn-secondary" onClick={() => {
                            const accountDiv = document.getElementById('accountDiv');
                            accountDiv.style.display = 'none';
                            document.getElementById('emailInput').value = '';
                            document.getElementById('usernameInput').value = '';
                            document.getElementById('passwordInput').value = '';
                        }}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateAccount;