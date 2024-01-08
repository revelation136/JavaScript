// Checking if there is already value in local storage
    // trying to retrieve 'counter', if there's none, set to zero
    // .getItem vs .setItem always remember
    if (!localStorage.getItem('counter')) {

        localStorage.setItem('counter', 0)
    }

    function count() {
        // Retrieve counter value from local storage
        let counter = localStorage.getItem('counter');

        // Update Counter
        counter++;
        // counter = counter + 1; this is the root, counter++; is just shortcut
        document.querySelector("h1").innerHTML = counter;
        // select element h1 to display the current value of our variable counter
    
        // Store counter in local storage
        localStorage.setItem('counter', counter)
    };

    // Set h1 to the current value inside local storage
    document.querySelector('h1').innerHTML = localStorage.getItem('counter');
    document.querySelector('#count').onclick = count;

    // adding reset button
    function reset() {
        let counter = localStorage.setItem('counter', 0)
        document.querySelector('h1').innerHTML = localStorage.getItem('counter');
    };
    document.querySelector('#reset').onclick = reset;