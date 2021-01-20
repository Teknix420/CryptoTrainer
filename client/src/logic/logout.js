import API from '../utils/API';

function Logout() {
    API.logoutUser()
        .then(res => {
            window.location.href = '/#/';
        })
        .catch(err => console.log(err));
};

export default Logout;