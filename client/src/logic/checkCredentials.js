import API from '../utils/API.js';

function CheckCredentials() {
    let usernameLogin = document.getElementById('usernameLoginInput').value;
    let passwordLogin = document.getElementById('passwordLoginInput').value;
    if (usernameLogin === '' || passwordLogin === '') {
        document.getElementById('fillForm').style.display = 'block';
        setTimeout(() => {
            document.getElementById('fillForm').style.display = 'none';
        }, 2000);
    } else {
        const params = {
            params: {
                username: usernameLogin,
                password: passwordLogin
            }
        }
        API.validateUser(params)
            .then(res => {
                verify();
                async function verify() {
                    if (res.data === 'Invalid Password' || res.data === null) {
                        document.getElementById('invalidCredentials').style.display = 'block';
                        document.getElementById('passwordLoginInput').value = '';
                        return setTimeout(() => {
                            document.getElementById('invalidCredentials').style.display = 'none';
                        }, 2000);
                    } else {
                        document.getElementById('usernameLoginInput').value = '';
                        document.getElementById('passwordLoginInput').value = '';
                        document.getElementById('loginGranted').style.display = 'block';
                        const usernameParams = {
                            params: {
                                username: usernameLogin
                            }
                        }
                        API.userLogin(usernameParams)
                            .catch(err => console.log(err))
                        setTimeout(() => {
                            document.getElementById('loginGranted').style.display = 'none';
                            window.location.href = "/#/dashboard"
                        }, 1000);

                    }
                }
            })
            .catch(err => console.log(err));
    }
};

export default CheckCredentials;