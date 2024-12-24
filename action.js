const conversionRates = {
    USD: { USD: 1, EUR: 0.85, GBP: 0.75, NPR: 118.96 },
    IND: { USD: 0.014, EUR: 0.012, GBP: 0.011, NPR: 1.60},
    EUR: { USD: 1.18, EUR: 1, GBP: 0.88, NPR: 139.91 },
    GBP: { USD: 1.34, EUR: 1.14, GBP: 1, NPR: 158.74 },
    NPR: { USD: 0.0084, EUR: 0.0071, GBP: 0.0063, NPR: 1 }
};

function convertCurrency() {
    try {
        // Retrieve input values
        let amount = parseFloat(document.getElementById('amount').value);
        let fromCurrency = document.getElementById('fromCurrency').value; // Get selected value
        let toCurrency = document.getElementById('toCurrency').value; // Get selected value

        // Validate input amount
        if (amount <= 0 || isNaN(amount)) {
            throw new Error('Please enter a valid amount greater than 0.');
        }
        // Perform currency conversion
        let conversionRate = conversionRates[fromCurrency][toCurrency];
        let convertedAmount = amount * conversionRate;

        // Display result
        document.getElementById('result').innerText = `Amount in ${toCurrency}: ${convertedAmount.toFixed(2)}`;
    } catch (error) {
        // Handle the error
        document.getElementById('result').innerText = error.message;
    }
}
