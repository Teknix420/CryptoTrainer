import React from 'react';
import SearchCrypto from '../../logic/search';
import Search from '../Search';

function Nav(props) {

    return (
        <div>
            <Search />
            <nav className="navbar navbar-dark bg-dark d-flex">
                <h5 className="text-white h4">CryptoTrainer</h5>
                <div className="d-flex justify-content-end">
                    <input id="searchCrypto" className="form-control me-2" type="search" placeholder="Crypto Symbol Search" aria-label="Search" />
                    <button id="" className="btn text-white btn-outline-info" type="submit" onClick={() => {
                        SearchCrypto(document.getElementById('searchCrypto').value);
                    }}>Search</button>
                    <button className="navBtn btn btn-outline-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                    </button>
                </div>
            </nav>
            <div className="collapse" id="navbarToggleExternalContent">
                <div className="collapse" id="navbarToggleExternalContent"></div>
                <div className="bg-dark p-4 d-flex justify-content-end">
                    <div className="navbar-nav">
                        {props.children}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Nav;