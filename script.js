const exchangeRates = { USD: { INR: 86.69, EUR: 0.88, AUD: 1.60, CNY: 7.34, JPY: 143.35}, INR: { USD: 0.011, EUR: 0.010, AUD: 0.018, CNY: 0.084, JPY: 1.694}, EUR: { USD : 1.13, INR: 95.75, AUD: 1.81, CNY: 8.31, JPY: 162.21}, AUD: { USD : 0.623, INR: 54.025, EUR: 0.550, CNY: 4.58, JPY: 89.341}, CNY: { USD : 0.136, INR: 11.795, EUR: 0.120, AUD: 0.218, JPY:19.506}, JPY: { USD : 0.007, INR: 0.59, EUR: 0.006, AUD: 0.011, CNY: 0.0512} };

function convert() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;
    const resultElement = document.getElementById('result');

    if(amount === "" || isNaN(amount) || amount <= 0) {
        resultElement.textContent = "Please Enter any valid Amount";
        return;
    }
    if(fromCurrency === toCurrency) {
        resultElement.textContent = `${amount} ${fromCurrency} = ${amount} ${toCurrency}`;
        return;
    }

    const rate = exchangeRates[fromCurrency][toCurrency];

    if(rate) {
        const convertedAmount = (amount * rate).toFixed(2);
        resultElement.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
        return;
    }
    else{
        resultElement.textContent = "Conversion Rate not available";
    }
}