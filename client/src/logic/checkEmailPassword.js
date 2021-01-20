import API from '../utils/API.js'

function CheckEmailPassword() {
    let email = document.getElementById('emailInput').value;
    let username = document.getElementById('usernameInput').value;
    let password = document.getElementById('passwordInput').value;
    if (email === '' || username === '' || password === '') {
        document.getElementById('fillCreateForm').style.display = 'block';
        return setTimeout(() => {
            document.getElementById('fillCreateForm').style.display = 'none';
        }, 2000);
    };
    const emailParams = {
        params: {
            email: email
        }
    };
    API.checkEmail(emailParams)
        .then(res => {
            checkExistingUsers();
            async function checkExistingUsers() {
                if (res.data !== null) {
                    document.getElementById('emailReq').style.display = 'block';
                    document.getElementById('emailInput').value = '';
                    return setTimeout(() => {
                        document.getElementById('emailReq').style.display = 'none';
                    }, 2000);
                } else {
                    const usernameParams = {
                        params: {
                            username: username
                        }
                    };
                    API.checkUsername(usernameParams)
                        .then(res => {
                            if (res.data !== null) {
                                document.getElementById('usernameReq').style.display = 'block';
                                document.getElementById('usernameInput').value = '';
                                return setTimeout(() => {
                                    document.getElementById('usernameReq').style.display = 'none';
                                }, 2000);
                            } else {
                                const passRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/);
                                if (passRegex.test(document.getElementById('passwordInput').value) === true) {
                                    document.getElementById('createAccountGranted').style.display = 'block';
                                    document.getElementById('emailInput').value = '';
                                    document.getElementById('usernameInput').value = '';
                                    document.getElementById('passwordInput').value = '';
                                    API.createUser({
                                        email: email,
                                        username: username,
                                        password: password,
                                    })
                                        .then(res => {
                                            API.createPortfolio({
                                                username: username
                                            })
                                                .then(res => {
                                                    API.userLogin(usernameParams)
                                                        .then(res => {
                                                            setTimeout(() => {
                                                                document.getElementById('createAccountGranted').style.display = 'none';
                                                                window.location.href = "/#/dashboard"
                                                            }, 1000);
                                                        })
                                                        .catch(err => console.log(err))
                                                })
                                                .catch(err => console.log(err));
                                        })
                                        .catch(err => console.log(err));
                                } else {
                                    document.getElementById('passwordReq').style.display = 'block';
                                    document.getElementById('passwordInput').value = '';
                                    setTimeout(() => {
                                        document.getElementById('passwordReq').style.display = 'none';
                                    }, 5000);
                                }
                            }
                        })
                }
            }
        })
        .catch(err => console.log(err));
};

export default CheckEmailPassword;