// var: used to define a variable globally
    // let: used to define a variable that is limited in scope to the current block such as a function or loop
    // const: used to define a value that will not change
    let counter = 0;

    function count() {
        counter++;
        // counter = counter + 1; this is the root, counter++; is just shortcut
        document.querySelector("h1").innerHTML = counter;
        // select element h1 to display the current value of our variable counter
    
        // formatted string in python, using backticks instead of double or single quotation marks
        // this is called templeted literal
        if (counter % 10 === 0) {
            alert(`Count is now ${counter}`);
        }
    };

    // Find me the button of the page then onclick execute count function
    document.querySelector('button').onclick = count;
        
    // setInterval takes function as argument and 1000 is in millisecond
    setInterval(count, 1000);