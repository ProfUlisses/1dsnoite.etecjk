document.querySelectorAll('ul li').forEach(function(item) {
    item.addEventListener('click', function() {
        alert("Você clicou em: " + item.textContent);
    });
});
