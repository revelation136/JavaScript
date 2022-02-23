// let dropdown = document.getElementById('base_currency');
// dropdown.length = 0;

// let defaultOption = document.createElement('option');
// defaultOption.text = 'Choose Base Currency';

// dropdown.add(defaultOption);
// // .selectedIndex = it is like default selection, starts at zero
// dropdown.selectedIndex = 0;

// // Fetching Data from API and virtually stored it to promise
// const url = 'https://api.exchangerate.host/latest';
// fetch(url)
//     .then(
//         function(response) {
//             if (response.status !== 200) {
//                 console.warn('Looks like there was a problem. Status Code: ' + response.status);
//             return;
//         }
//     response.json().then(function(data) {
//         const currency = data.rates;
        
//         let option;

//         for (let i = o; i < currency.length; i++) {
//             option = document.createElement('option');
//             option.text = ;
//             option.value = data.rates[i];
//             dropdown.add(option);
//         }
//     })    
//     }
//     )

const url = 'https://api.exchangerate.host/latest';

fetch(url)
    .then(response => response.json())
    .then(data => {
        const currencies = data[rates];

        let eachCurrency = "";
        let eachValue = "";

        for (let i = 0; i < currencies.length; i++) {
            for (let j =0; j < currencies[i].length;)
            eachCurrency += currencies[i];
            eachValue += currencies[i][j];
            
            console.log(eachCurrency);
        }
    })

    .catch(error => {
        console.log('Error:', error);
    });