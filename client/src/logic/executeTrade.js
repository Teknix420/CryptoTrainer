import API from '../utils/API';

function ExecuteTrade(tradeParams) {
    const portfolio = tradeParams.currentPortfolio;
    const crypto = tradeParams.tradingFrom.crypto;
    const newAmount = tradeParams.tradingFrom.amount;
    const errorDiv = document.getElementById('amountError');

    for (const property in portfolio) {
        if (crypto === property) {
            if (portfolio[property] - newAmount < 0) {
                errorDiv.style.display = 'block'
                return setTimeout(() => {
                    errorDiv.style.display = 'none'
                }, 2000);
            }
        }
    }

    API.trade(tradeParams)
        .then(res => {
            document.getElementById('successDiv').style.display = 'block';
            setTimeout(() => {
                document.getElementById('successDiv').style.display = 'none';
                document.getElementById('convertTo').value = '0';
                document.getElementById('convertFrom').value = '0';
                document.getElementById('amountTradingFrom').value = '';
                document.getElementById('tradeDiv').style.display = 'none';
                window.location.reload();
            }, 1500)
        })
        .catch(err => console.log(err))
}

export default ExecuteTrade;