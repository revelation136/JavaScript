// Send a GET request to the URL
// fetch > promise (a hidden variable) > .then
fetch('https://api.exchangerate.host/latest')

// Put response into json form
// always take note that the argument of .then is always a function
// response and data are just parameters  of two anonymous function. therefore they're functions
.then(response => {
    response.json()
})
.then(data => {
    
    console.log(data);
    // Get rate from data
    const rate = data.rates.PHP;

    // Display message on the screen
    // toFixed(3) means 3 decimal values
    document.querySelector('body').innerHTML = `1 USD is equal to ${rate.toFixed(3)}PHP.`
});
