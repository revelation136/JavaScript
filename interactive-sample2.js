document.querySelectorAll('button').forEach(function(button) {
    button.onclick = function() {
        document.querySelector('#hello').style.color = button.dataset.color;
    };
});
