function user() {
    const name = document.querySelector('#name').value;
    alert(`Hello, ${name}`);
};


document.querySelector('form').onsubmit = user;