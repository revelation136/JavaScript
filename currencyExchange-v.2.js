const url = 'https://api.exchangerate.host/latest';

fetch(url)
    .then(response => response.json())
    .then(data => {

        // Using Brackets as get method will give you this error: 
        // "Uncaught (in promise) ReferenceError: AED is not defined"
        const currencies = data.rates;

        let x = "";

        for (let i = 0; i < currencies.length; i++) {
            x += currencies[i]; 
        }
        console.log(currencies[0]);
        document.querySelector("p").innerHTML = x;
    })