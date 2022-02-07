document.querySelector('form').onsubmit = function() {
    
    // Send a Get request to the URL
    fetch('https://api.exchangerate.host/latest')

    // Put response into JSON form
    .then(response => response.json())
    .then(data => {

        // Get currency from user input and convert to upper case
        const currency = document.querySelector('#currency').value.toUpperCase();

        // Get rate from data
        const rate = data.rates[currency];

        // Check if currency is valid:
        if (rate !== undefined) {

            // Display exchange on the screen
            document.querySelector('#result').innerHTML = `1 USD is equal to ${rate.toFixed(3)} ${currency}`;
        }
        else {
            // Display error on the screen
            document.querySelector('#result').innerHTML = 'Invalid Currency.';
        }
    })

    // Catch any errors and log them to the console
    .catch(error => {
        console.log('Error:', error);
    });

    // Prevent default Submission
    return false;
}