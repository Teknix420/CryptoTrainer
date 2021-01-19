import React from 'react';

function Search() {
    return (

        <div id="searchDiv" className="modal" style={{ display: 'none' }} tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Search Results</h5>
                    </div>
                    <div className="modal-body">
                        <h3 id="cryptoSymbol">Symbol</h3>
                        <div>
                            <ul className="list-group list-group-flush">
                                <li id="cryptoName" className="list-group-item list-group-item-info"></li>
                                <li id="cryptoTotalSupply" className="list-group-item list-group-item-light"></li>
                                <li id="cryptoMaxSupply" className="list-group-item list-group-item-light"></li>
                                <li id="cryptoMarketCap" className="list-group-item list-group-item-secondary"></li>
                                <li id="cryptoChange1h" className="list-group-item list-group-item-secondary"></li>
                                <li id="cryptoChange7d" className="list-group-item list-group-item-secondary"></li>
                                <li id="cryptoChange24h" className="list-group-item list-group-item-secondary"></li>
                                <li id="cryptoPrice" className="list-group-item list-group-item-success"></li>
                                <li id="cryptoVolume24h" className="list-group-item list-group-item-dark"></li>
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={() => {
                                document.getElementById('searchDiv').style.display = 'none';
                            }}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;