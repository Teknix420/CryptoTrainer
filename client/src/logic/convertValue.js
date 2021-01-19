import API from '../utils/API';

function ConvertValue(convert) {
    let tradeValue = 0;
    let tradeValueDiv = document.getElementById('tradeValueDiv');


    API.convertValue(convert)
        .then(res => {

            for (const quoteFrom in res.data.data) {
                if (res.data.data[quoteFrom] !== undefined) {
                    for (const quoteTo in res.data.data[quoteFrom].quote) {
                        if (res.data.data[quoteFrom].quote[quoteTo] !== undefined) {
                            tradeValue = res.data.data[quoteFrom].quote[quoteTo].price
                        }
                    }
                }
            }

            tradeValueDiv.innerHTML = convert.convertFrom + ' is currently worth ' + tradeValue.toFixed(8) + ' ' + convert.convertTo + ' each.';
            tradeValueDiv.cryptovalue = tradeValue;
            tradeValueDiv.style.display = 'block';

        })
        .catch(err => console.log(err))
}

export default ConvertValue;