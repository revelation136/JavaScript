// Send a GET request to the URL
// fetch > promise (a hidden variable) > .then
fetch('https://api.exchangerate.host/latest')

// Put response into json form
.then(response => response.json())
.then(data => {
    
    // Log data to the console
    console.log(data);
});
