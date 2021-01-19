import API from '../utils/API';

function SearchCrypto(symbol) {
    const searchParams = {
        symbol: symbol
    }
    API.searchCrypto(searchParams)
        .then(res => {
            for (const crypto in res.data) {
                document.getElementById('cryptoSymbol').innerHTML = 'Symbol: ' + res.data[crypto].symbol;
                document.getElementById('cryptoName').innerHTML = 'Name: ' + res.data[crypto].name;
                document.getElementById('cryptoMaxSupply').innerHTML = 'Max Supply: ' + res.data[crypto].max_supply;
                document.getElementById('cryptoTotalSupply').innerHTML = 'Total Circulating Supply: ' + res.data[crypto].circulating_supply;
                document.getElementById('cryptoMarketCap').innerHTML = 'Market Cap: ' + res.data[crypto].quote.USD.market_cap;
                document.getElementById('cryptoChange1h').innerHTML = 'Percent Change in 1 Hour: ' + res.data[crypto].quote.USD.percent_change_1h + '%';
                document.getElementById('cryptoChange7d').innerHTML = 'Percent Change in 7 Days: ' + res.data[crypto].quote.USD.percent_change_7d + '%';
                document.getElementById('cryptoChange24h').innerHTML = 'Percent Change in 24 Hours: ' + res.data[crypto].quote.USD.percent_change_24h + '%';
                document.getElementById('cryptoPrice').innerHTML = 'Current Price: $' + res.data[crypto].quote.USD.price.toFixed(2) + ' USD';
                document.getElementById('cryptoVolume24h').innerHTML = 'Volume from Last 24 Hours: ' + res.data[crypto].quote.USD.volume_24h;
                document.getElementById('searchDiv').style.display = 'block';
                return;
            }
        })
        .catch(err => console.log(err))
}

export default SearchCrypto;